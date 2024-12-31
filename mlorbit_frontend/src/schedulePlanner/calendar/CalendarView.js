// src/schedulePlanner/calendar/CalendarView.js

import React, { useState, useEffect, useContext } from "react";
import "./CalendarView.css";
import { db } from "../../login/firebaseConfig"; // Ensure correct path
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext"; // Adjust path accordingly

const CalendarView = () => {
  const [tasks, setTasks] = useState([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // Form State
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    time: "",
    colorTag: "#ffffff",
    status: "Not Started", // new
    priority: "Low",       // new
  });

  // Search/Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const { user } = useContext(UserContext); // Access user from UserContext

  // Fetch tasks from Firestore
  useEffect(() => {
    if (!user) {
      // If user is not logged in, clear tasks
      setTasks([]);
      return;
    }

    // Create a query against the collection for the current user's tasks
    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const tasksData = [];
        querySnapshot.forEach((docSnap) => {
          tasksData.push({ id: docSnap.id, ...docSnap.data() });
        });
        setTasks(tasksData);
      },
      (error) => {
        console.error("Error fetching tasks:", error);
        alert("Failed to fetch tasks. Please try again.");
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user]);

  // Toggle Minimization
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Add New Task
  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to add tasks.");
      return;
    }

    if (!newTask.title.trim()) {
      alert("Task title cannot be empty.");
      return;
    }

    try {
      await addDoc(collection(db, "tasks"), {
        ...newTask,
        userId: user.uid, // associate task with current user
      });
      // Reset form
      setNewTask({
        title: "",
        date: "",
        time: "",
        colorTag: "#ffffff",
        status: "Not Started",
        priority: "Low",
      });
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task. Please try again.");
    }
  };

  // Edit Task
  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTaskId(task.id);
    setNewTask({
      title: task.title,
      date: task.date,
      time: task.time,
      colorTag: task.colorTag,
      status: task.status || "Not Started",
      priority: task.priority || "Low",
    });
  };

  // Update Task
  const handleUpdateTask = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to update tasks.");
      return;
    }

    if (!newTask.title.trim()) {
      alert("Task title cannot be empty.");
      return;
    }

    try {
      const taskRef = doc(db, "tasks", currentTaskId);
      await updateDoc(taskRef, {
        ...newTask,
      });

      // Reset form
      setNewTask({
        title: "",
        date: "",
        time: "",
        colorTag: "#ffffff",
        status: "Not Started",
        priority: "Low",
      });
      setIsEditing(false);
      setCurrentTaskId(null);
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  // Delete Task
  const handleDeleteTask = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "tasks", taskId));
      alert("Task deleted successfully.");
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  // Mark a task as completed quickly
  const handleMarkCompleted = async (taskId, currentStatus) => {
    if (!user) return;
    try {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, {
        status: currentStatus === "Completed" ? "Not Started" : "Completed",
      });
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  // Filtered and searched tasks
  const filteredTasks = tasks.filter((task) => {
    // Basic overdue detection (optional improvement: store dueTimestamp in Firestore)
    const isOverdue = () => {
      if (!task.date || task.status === "Completed") return false;
      const today = new Date().toISOString().split("T")[0];
      return task.date < today; // if date is earlier than today's date
    };

    // Overdue tasks—just store a property for styling
    task.isOverdue = isOverdue();

    // Filter by search query in the title
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Filter by status
    if (filterStatus && task.status !== filterStatus) {
      return false;
    }
    // Filter by priority
    if (filterPriority && task.priority !== filterPriority) {
      return false;
    }
    return true;
  });

  // Task progress: how many tasks are completed out of total
  const totalTasks = tasks.length;
  const completedCount = tasks.filter((t) => t.status === "Completed").length;
  const completionPercentage = totalTasks === 0 ? 0 : Math.floor((completedCount / totalTasks) * 100);

  // Render minimized view
  if (isMinimized) {
    return (
      <div className="calendar-view minimized">
        <button onClick={handleMinimize} className="toggle-button">
          Expand Calendar
        </button>
      </div>
    );
  }

  return (
    <div className="calendar-view">
      {/* Header */}
      <div className="calendar-header">
        <h3>Calendar View</h3>
        <button onClick={handleMinimize} className="toggle-button">
          Minimize
        </button>
      </div>

      {/* Progress Bar */}
      {totalTasks > 0 && (
        <div className="progress-bar-container">
          <label>
            Task Completion: {completedCount}/{totalTasks} ({completionPercentage}%)
          </label>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Search & Filter */}
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="">All Statuses</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="filter-select"
        >
          <option value="">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Add/Edit Task Form */}
      <div className="add-task-form">
        <h4>{isEditing ? "Edit Task" : "Add New Task"}</h4>
        <form onSubmit={isEditing ? handleUpdateTask : handleAddTask}>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={newTask.title}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newTask.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={newTask.time}
            onChange={handleChange}
          />

          {/* Status Select */}
          <select name="status" value={newTask.status} onChange={handleChange} required>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Priority Select */}
          <select name="priority" value={newTask.priority} onChange={handleChange} required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="color"
            name="colorTag"
            value={newTask.colorTag}
            onChange={handleChange}
            title="Choose a color tag"
          />

          <button type="submit" className="add-update-button">
            {isEditing ? "Update Task" : "Add Task"}
          </button>

          {isEditing && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                setIsEditing(false);
                setCurrentTaskId(null);
                setNewTask({
                  title: "",
                  date: "",
                  time: "",
                  colorTag: "#ffffff",
                  status: "Not Started",
                  priority: "Low",
                });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`calendar-cell ${task.isOverdue ? "overdue" : ""}`}
              style={{ backgroundColor: task.colorTag }}
              title={`${task.title}\nStatus: ${task.status}\nPriority: ${task.priority}\nDate: ${
                task.date || "N/A"
              }\nTime: ${task.time || "N/A"}`}
            >
              <div className="task-content">
                <span className="task-name">{task.title}</span>
                <span className="task-date">
                  {task.date || "No date"} {task.time}
                </span>
                <div className="task-status">
                  <strong>Status: </strong>{task.status}
                </div>
                <div className="task-priority">
                  <strong>Priority: </strong>{task.priority}
                </div>
              </div>
              <div className="task-actions">
                {/* Mark as completed (toggle) */}
                <button
                  className="complete-button"
                  onClick={() => handleMarkCompleted(task.id, task.status)}
                  title={
                    task.status === "Completed"
                      ? "Mark as Not Started"
                      : "Mark as Completed"
                  }
                >
                  {task.status === "Completed" ? "↩︎" : "✓"}
                </button>

                <button
                  className="edit-button"
                  onClick={() => handleEditTask(task)}
                  title="Edit Task"
                >
                  &#9998;
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(task.id)}
                  title="Delete Task"
                >
                  &#128465;
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CalendarView;
