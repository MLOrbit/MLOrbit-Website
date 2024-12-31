// SchedulePlanner.js
import React, { useState, useEffect, useContext } from "react";
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc,
    Timestamp,
} from "firebase/firestore";
import { db } from "../login/firebaseConfig"; // Adjust the path as necessary
import { UserContext } from "../components/userDetails/UserContext"; // Adjust the path as necessary
import { useLocation } from "react-router-dom";

// Child components
import TaskItem from "./TaskItem";
import CalendarView from "./calendar/CalendarView";
import BreakScheduler from "./breaks/BreakScheduler";
import DSAProgressTracker from "./dsa/DSAProgressTracker";

import "./SchedulePlanner.css";

const SchedulePlanner = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: "",
        date: "",
        time: "",
        description: "",
        colorTag: "#ffd369", // default color
        isComplete: false,
        notes: "",
        frequency: "monthly", // default: monthly or daily
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // For toggling different schedule views
    const [showCalendarView, setShowCalendarView] = useState(false);
    const [showBreakScheduler, setShowBreakScheduler] = useState(false);

    const location = useLocation();
    const { section } = location.state || {};

    useEffect(() => {
        if (!user) return;

        const q = section
            ? query(
                    collection(db, "schedules"),
                    where("uid", "==", user.uid),
                    where("section", "==", section)
                )
            : query(collection(db, "schedules"), where("uid", "==", user.uid));

        const unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
                const tasksData = [];
                querySnapshot.forEach((doc) => {
                    tasksData.push({ id: doc.id, ...doc.data() });
                });
                setTasks(tasksData);
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [user, section]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!user) return;

        // Convert date & time to a Timestamp for due date logic
        const dueDateTimeString = `${newTask.date}T${newTask.time}`;
        const dueTimestamp = dueDateTimeString ? Timestamp.fromDate(new Date(dueDateTimeString)) : null;

        try {
            await addDoc(collection(db, "schedules"), {
                uid: user.uid,
                section: section || "General",
                title: newTask.title,
                date: newTask.date,
                time: newTask.time,
                description: newTask.description,
                colorTag: newTask.colorTag,
                isComplete: false, // new tasks start incomplete
                notes: newTask.notes,
                frequency: newTask.frequency, // "daily" or "monthly"
                dueTimestamp, // for overdue calculations
                createdAt: Timestamp.now(),
            });
            setNewTask({
                title: "",
                date: "",
                time: "",
                description: "",
                colorTag: "#ffd369",
                isComplete: false,
                notes: "",
                frequency: "monthly",
            });
            alert("Task added successfully!");
        } catch (error) {
            console.error("Error adding task: ", error);
            setError("Failed to add task. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                await deleteDoc(doc(db, "schedules", id));
                alert("Task deleted successfully!");
            } catch (error) {
                console.error("Error deleting task: ", error);
                setError("Failed to delete task. Please try again.");
            }
        }
    };

    const handleEdit = async (id, updatedTask) => {
        try {
            const taskRef = doc(db, "schedules", id);
            await updateDoc(taskRef, updatedTask);
            alert("Task updated successfully!");
        } catch (error) {
            console.error("Error updating task: ", error);
            setError("Failed to update task. Please try again.");
        }
    };

    return (
        <div className="schedule-planner-container">
            <h2>Schedule {section ? `- ${section}` : ""}</h2>
            {error && <p className="error-message">{error}</p>}
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <>
                    {/* DSA Progress Tracker (140 Lectures) */}
                    <DSAProgressTracker />

                    {/* Buttons to toggle different views */}
                    <div className="view-toggle-buttons">
                        <button onClick={() => setShowCalendarView(!showCalendarView)}>
                            {showCalendarView ? "Hide Calendar" : "Show Calendar"}
                        </button>
                        <button onClick={() => setShowBreakScheduler(!showBreakScheduler)}>
                            {showBreakScheduler ? "Hide Breaks" : "Plan a Break"}
                        </button>
                    </div>

                    {/* Conditionally render the Calendar View */}
                    {showCalendarView && <CalendarView tasks={tasks} />}

                    {/* Conditionally render the Break Scheduler */}
                    {showBreakScheduler && <BreakScheduler user={user} />}

                    {/* Add Task Form */}
                    <form onSubmit={handleAddTask} className="task-form">
                        <label htmlFor="title">Task Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Task Title"
                            value={newTask.title}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={newTask.date}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            value={newTask.time}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="frequency">Frequency</label>
                        <select
                            name="frequency"
                            id="frequency"
                            value={newTask.frequency}
                            onChange={handleInputChange}
                        >
                            <option value="monthly">Monthly Task</option>
                            <option value="daily">Daily Task</option>
                        </select>

                        <label htmlFor="colorTag">Color Tag</label>
                        <input
                            type="color"
                            name="colorTag"
                            id="colorTag"
                            value={newTask.colorTag}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="notes">Notes</label>
                        <textarea
                            name="notes"
                            id="notes"
                            placeholder="Additional notes..."
                            value={newTask.notes}
                            onChange={handleInputChange}
                        ></textarea>

                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={newTask.description}
                            onChange={handleInputChange}
                        ></textarea>

                        <button type="submit">Add Task</button>
                    </form>

                    {/* Task List */}
                    <div className="tasks-list">
                        {tasks.length === 0 ? (
                            <p>No tasks scheduled{section ? ` for ${section}` : ""}.</p>
                        ) : (
                            tasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                />
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SchedulePlanner;
