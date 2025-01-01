// src/breaks/BreakScheduler.js

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
import { db } from "../../login/firebaseConfig"; // Ensure correct import path
import "./BreakScheduler.css";
import { UserContext } from "../../context/UserContext"; // Adjust the path based on your project structure

/**
 * A component to schedule, edit, and track user breaks.
 */
const BreakScheduler = () => {
  const { user } = useContext(UserContext); // Access user from UserContext
  const [breaks, setBreaks] = useState([]);
  const [newBreak, setNewBreak] = useState({
    breakTitle: "",
    breakDate: "",
    breakTime: "",
    duration: 15, // in minutes
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentBreakId, setCurrentBreakId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false); // For form submission

  useEffect(() => {
    if (!user) {
      // If user is not logged in, clear breaks
      setBreaks([]);
      setLoading(false);
      return;
    }

    // Create a query against the collection for the current user's breaks
    const q = query(collection(db, "breaks"), where("uid", "==", user.uid));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const breaksData = [];
        querySnapshot.forEach((docSnap) => {
          breaksData.push({ id: docSnap.id, ...docSnap.data() });
        });
        setBreaks(breaksData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching breaks:", error);
        alert("Failed to fetch breaks. Please try again.");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBreak((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddBreak = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to add breaks.");
      return;
    }

    const { breakTitle, breakDate, breakTime, duration } = newBreak;

    // Basic validation
    if (!breakTitle.trim()) {
      alert("Break title cannot be empty.");
      return;
    }

    const breakTimestamp =
      breakDate && breakTime
        ? Timestamp.fromDate(new Date(`${breakDate}T${breakTime}`))
        : null;

    try {
      setProcessing(true);
      await addDoc(collection(db, "breaks"), {
        uid: user.uid,
        breakTitle,
        breakDate,
        breakTime,
        duration,
        breakTimestamp,
        createdAt: Timestamp.now(),
      });
      // Reset form
      setNewBreak({
        breakTitle: "",
        breakDate: "",
        breakTime: "",
        duration: 15,
      });
      alert("Break scheduled successfully!");
    } catch (err) {
      console.error("Error scheduling break:", err);
      alert("Failed to schedule break. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const handleEditBreak = (brk) => {
    setIsEditing(true);
    setCurrentBreakId(brk.id);
    setNewBreak({
      breakTitle: brk.breakTitle,
      breakDate: brk.breakDate,
      breakTime: brk.breakTime,
      duration: brk.duration,
    });
  };

  const handleUpdateBreak = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to update breaks.");
      return;
    }

    const { breakTitle, breakDate, breakTime, duration } = newBreak;

    // Basic validation
    if (!breakTitle.trim()) {
      alert("Break title cannot be empty.");
      return;
    }

    const breakTimestamp =
      breakDate && breakTime
        ? Timestamp.fromDate(new Date(`${breakDate}T${breakTime}`))
        : null;

    try {
      setProcessing(true);
      const breakRef = doc(db, "breaks", currentBreakId);
      await updateDoc(breakRef, {
        breakTitle,
        breakDate,
        breakTime,
        duration,
        breakTimestamp,
        updatedAt: Timestamp.now(),
      });
      // Reset form
      setNewBreak({
        breakTitle: "",
        breakDate: "",
        breakTime: "",
        duration: 15,
      });
      setIsEditing(false);
      setCurrentBreakId(null);
      alert("Break updated successfully!");
    } catch (err) {
      console.error("Error updating break:", err);
      alert("Failed to update break. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentBreakId(null);
    setNewBreak({
      breakTitle: "",
      breakDate: "",
      breakTime: "",
      duration: 15,
    });
  };

  const handleDeleteBreak = async (id) => {
    if (!window.confirm("Are you sure you want to delete this break?")) return;

    try {
      await deleteDoc(doc(db, "breaks", id));
      alert("Break deleted successfully!");
    } catch (err) {
      console.error("Error deleting break:", err);
      alert("Failed to delete break. Please try again.");
    }
  };

  return (
    <div className="break-scheduler">
      <h3>Plan Your Breaks</h3>

      <form
        onSubmit={isEditing ? handleUpdateBreak : handleAddBreak}
        className="break-form"
      >
        <input
          type="text"
          name="breakTitle"
          placeholder="Break Title"
          value={newBreak.breakTitle}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="breakDate"
          value={newBreak.breakDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="breakTime"
          value={newBreak.breakTime}
          onChange={handleChange}
          required
        />
        <div className="duration-input">
          <label htmlFor="duration">Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={newBreak.duration}
            onChange={handleChange}
            min="1"
            max="60"
            required
          />
        </div>
        <button type="submit" disabled={processing}>
          {processing
            ? isEditing
              ? "Updating..."
              : "Adding..."
            : isEditing
            ? "Update Break"
            : "Schedule Break"}
        </button>
        {isEditing && (
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancelEdit}
            disabled={processing}
          >
            Cancel
          </button>
        )}
      </form>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="break-list">
          {breaks.length === 0 ? (
            <p className="no-breaks">No breaks scheduled.</p>
          ) : (
            breaks
              .sort((a, b) => a.breakTimestamp.seconds - b.breakTimestamp.seconds)
              .map((brk) => (
                <div key={brk.id} className="break-item">
                  <div className="break-details">
                    <h4>{brk.breakTitle}</h4>
                    <p>
                      {brk.breakDate} at {brk.breakTime}
                    </p>
                    <p>Duration: {brk.duration} minutes</p>
                  </div>
                  <div className="break-actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEditBreak(brk)}
                      title="Edit Break"
                    >
                      &#9998;
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteBreak(brk.id)}
                      title="Delete Break"
                    >
                      &#128465;
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      )}
    </div>
  );
};

export default BreakScheduler;
