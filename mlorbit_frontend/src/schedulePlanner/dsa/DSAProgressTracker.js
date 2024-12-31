import React, { useState, useEffect, useContext } from "react";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../login/firebaseConfig";
import "./DSAProgressTracker.css";
import { UserContext } from "../../context/UserContext";

/**
 * A component that helps track the progress of 140 DSA lectures,
 * daily goals, topics, and time left to complete them.
 */
const DSAProgressTracker = () => {
  const [totalLectures] = useState(140);

  // Firestore fields
  const [completedLectures, setCompletedLectures] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [dailyGoal, setDailyGoal] = useState(0);
  const [startDate, setStartDate] = useState(""); // track user’s start date
  const [topics, setTopics] = useState([]); // array of { name: string, covered: bool }

  // State for new topic input
  const [newTopicName, setNewTopicName] = useState("");

  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const userId = user.uid;
    const docRef = doc(db, "dsaProgress", userId);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setCompletedLectures(data.completedLectures || 0);
          setDeadline(data.deadline || "");
          setDailyGoal(data.dailyGoal || 0);
          setStartDate(data.startDate || "");
          setTopics(data.topics || []);
        } else {
          // If no document exists, initialize it
          setDoc(docRef, {
            completedLectures: 0,
            deadline: "",
            dailyGoal: 0,
            startDate: new Date().toISOString().split("T")[0], // set start date to "today"
            topics: [],
          });
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching DSA progress:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Countdown for the deadline
  useEffect(() => {
    if (deadline) {
      const deadlineDate = new Date(deadline);
      const interval = setInterval(() => {
        const now = new Date();
        const diff = deadlineDate - now;
        if (diff <= 0) {
          setTimeLeft("Deadline passed!");
          clearInterval(interval);
        } else {
          // Calculate days, hours, minutes, seconds
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [deadline]);

  // Calculate progress
  const progressPercentage = Math.floor(
    (completedLectures / totalLectures) * 100
  );

  // Estimate if user is on track
  // (Simple example: see how many days since start date, compare with how many lectures completed vs dailyGoal * days)
  const [isOnTrack, setIsOnTrack] = useState(true);
  useEffect(() => {
    if (!startDate || !dailyGoal) {
      setIsOnTrack(true);
      return;
    }
    const daysElapsed = Math.floor(
      (new Date().getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)
    );
    const idealCompleted = dailyGoal * daysElapsed;
    setIsOnTrack(completedLectures >= idealCompleted);
  }, [startDate, dailyGoal, completedLectures]);

  // Firestore helpers
  const saveDSAData = async (fieldsToUpdate) => {
    if (!user) return;
    const userId = user.uid;
    const docRef = doc(db, "dsaProgress", userId);
    try {
      await setDoc(docRef, fieldsToUpdate, { merge: true });
    } catch (error) {
      console.error("Error saving DSA progress:", error);
    }
  };

  // Handlers
  const handleLectureChange = async (e) => {
    if (!user) return;
    let newCount = Number(e.target.value);
    if (newCount < 0) newCount = 0;
    if (newCount > totalLectures) newCount = totalLectures;
    setCompletedLectures(newCount);
    await saveDSAData({ completedLectures: newCount });
  };

  const handleDeadlineChange = async (e) => {
    if (!user) return;
    setDeadline(e.target.value);
    await saveDSAData({ deadline: e.target.value });
  };

  const handleDailyGoalChange = async (e) => {
    if (!user) return;
    const goal = Number(e.target.value);
    setDailyGoal(goal);
    await saveDSAData({ dailyGoal: goal });
  };

  const handleStartDateChange = async (e) => {
    if (!user) return;
    setStartDate(e.target.value);
    await saveDSAData({ startDate: e.target.value });
  };

  const handleReset = async () => {
    if (!user) return;
    setCompletedLectures(0);
    setDeadline("");
    setTimeLeft("");
    setDailyGoal(0);
    setStartDate(new Date().toISOString().split("T")[0]);
    setTopics([]);
    await saveDSAData({
      completedLectures: 0,
      deadline: "",
      dailyGoal: 0,
      startDate: new Date().toISOString().split("T")[0],
      topics: [],
    });
  };

  // Topics
  const handleAddTopic = async () => {
    if (!newTopicName.trim() || !user) return;
    const newTopic = { name: newTopicName.trim(), covered: false };
    setTopics([...topics, newTopicName]);
    setNewTopicName("");
    const docRef = doc(db, "dsaProgress", user.uid);
    await updateDoc(docRef, {
      topics: arrayUnion(newTopic),
    });
  };

  const toggleTopicCovered = async (topic) => {
    if (!user) return;
    const docRef = doc(db, "dsaProgress", user.uid);
    // Remove old topic object
    await updateDoc(docRef, {
      topics: arrayRemove(topic),
    });
    // Insert updated topic object with toggled covered
    await updateDoc(docRef, {
      topics: arrayUnion({ ...topic, covered: !topic.covered }),
    });
  };

  const handleDeleteTopic = async (topic) => {
    if (!user) return;
    const docRef = doc(db, "dsaProgress", user.uid);
    await updateDoc(docRef, {
      topics: arrayRemove(topic),
    });
  };

  if (loading) {
    return (
      <div className="dsa-progress-tracker">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="dsa-progress-tracker">
        <p>Please log in to track your DSA progress.</p>
      </div>
    );
  }

  return (
    <div className="dsa-progress-tracker">
      <h2 className="tracker-title">DSA Progress Tracker</h2>

      <div className="info-row">
        <div>
          <label>Completed Lectures:</label>
          <input
            type="number"
            value={completedLectures}
            min={0}
            max={totalLectures}
            onChange={handleLectureChange}
          />
          <span className="lecture-count">
            / {totalLectures} ({progressPercentage}%)
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="info-row">
        <label>Deadline:</label>
        <input
          type="date"
          value={deadline}
          onChange={handleDeadlineChange}
          className="date-input"
        />
        {deadline && (
          <span className="time-left">Time Left: {timeLeft}</span>
        )}
      </div>

      <div className="info-row">
        <label>Daily Goal (Lectures):</label>
        <input
          type="number"
          min={0}
          value={dailyGoal}
          onChange={handleDailyGoalChange}
        />
      </div>

      <div className="info-row">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="date-input"
        />
      </div>

      <div className="on-track-status">
        {isOnTrack ? (
          <span className="on-track-badge">You’re On Track! ✅</span>
        ) : (
          <span className="off-track-badge">You’re Behind! ❌</span>
        )}
      </div>

      <div className="topics-section">
        <h3>Topics Covered</h3>
        <div className="topic-input">
          <input
            type="text"
            placeholder="Add a topic (e.g. Arrays)"
            value={newTopicName}
            onChange={(e) => setNewTopicName(e.target.value)}
          />
          <button onClick={handleAddTopic}>Add Topic</button>
        </div>
        <ul className="topics-list">
          {topics.map((topicObj, idx) => (
            <li key={idx} className="topic-item">
              <div
                className={`topic-name ${
                  topicObj.covered ? "covered" : "uncovered"
                }`}
              >
                {topicObj.name}
              </div>
              <div className="topic-actions">
                <button onClick={() => toggleTopicCovered(topicObj)}>
                  {topicObj.covered ? "Mark Uncovered" : "Mark Covered"}
                </button>
                <button onClick={() => handleDeleteTopic(topicObj)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleReset} className="reset-button">
        Reset All
      </button>
    </div>
  );
};

export default DSAProgressTracker;
