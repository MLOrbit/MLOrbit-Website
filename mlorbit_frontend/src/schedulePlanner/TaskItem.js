// TaskItem.js
import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  // Overdue check (if due date/time is in the past and isComplete is false)
  const [isOverdue, setIsOverdue] = useState(false);

  useEffect(() => {
    if (task.dueTimestamp && task.dueTimestamp instanceof Timestamp) {
      const dueDate = task.dueTimestamp.toDate();
      const now = new Date();
      setIsOverdue(!task.isComplete && dueDate < now);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setEditedTask((prev) => ({ ...prev, [name]: checked }));
    } else {
      setEditedTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTask({ ...task }); // reset changes
    setIsEditing(false);
  };

  const toggleCheckbox = () => {
    // Toggles the isComplete field
    onEdit(task.id, { ...task, isComplete: !task.isComplete });
  };

  return (
    <div
      className="task-item"
      style={{ borderLeft: `10px solid ${task.colorTag || "#ffd369"}` }}
    >
      {isOverdue && <span className="overdue-label">Overdue</span>}
      {isEditing ? (
        <div className="task-edit-form">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={editedTask.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={editedTask.time}
            onChange={handleChange}
            required
          />

          <label>Frequency</label>
          <select
            name="frequency"
            value={editedTask.frequency}
            onChange={handleChange}
          >
            <option value="monthly">Monthly Task</option>
            <option value="daily">Daily Task</option>
          </select>

          <label>Color Tag</label>
          <input
            type="color"
            name="colorTag"
            value={editedTask.colorTag}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Notes"
            value={editedTask.notes || ""}
            onChange={handleChange}
          ></textarea>

          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          ></textarea>

          <div className="edit-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="task-details">
          <div className="task-header">
            <h3>{task.title}</h3>
            {/* Checkbox to mark complete/incomplete */}
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={toggleCheckbox}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <p>
            {task.date} at {task.time}
          </p>
          {task.notes && <p className="notes-section">Notes: {task.notes}</p>}
          <p>{task.description}</p>
          <p>Frequency: {task.frequency}</p>

          <div className="task-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
