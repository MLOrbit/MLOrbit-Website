import React, { useState, useEffect } from "react";
import "./WelcomeSection.css";
import giphy from "../assets/giphy.gif";

function WelcomeSection() {
  const [text, setText] = useState(""); // Tracks the displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Tracks if deleting
  const [index, setIndex] = useState(0); // Tracks current character index
  const fullText = "Welcome to MLOrbit"; // The text to type
  const typingSpeed = 200; // Typing speed in ms
  const deletingSpeed = 150; // Deleting speed in ms
  const pauseBeforeDelete = 1000; // Pause before starting delete in ms
  const pauseBeforeRetype = 500; // Pause before retyping in ms

  useEffect(() => {
    const typingEffect = () => {
      if (!isDeleting) {
        // Typing logic
        if (index < fullText.length) {
          setText((prev) => prev + fullText[index]);
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete); // Start deleting after typing
        }
      } else {
        // Deleting logic
        if (index > 0) {
          setText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setTimeout(() => setIsDeleting(false), pauseBeforeRetype); // Restart typing
        }
      }
    };

    const timer = setTimeout(
      typingEffect,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Cleanup the timer
  }, [text, isDeleting, index]); // Dependencies

  return (
    <div className="welcome-section">
      <img src={giphy} alt="Welcome GIF" className="welcome-gif" />
      <h1 className="welcome-title">
        {text}
        <span className="blinking-cursor">|</span>
      </h1>
      <p className="welcome-subtext">
        Browse free Algorithm Notes, tutorials, and explore programming!
      </p>
      <div className="button-group">
        <a href="#courses" className="btn btn-primary">
          Free Notes
        </a>
        <a href="/explore-ml" className="btn btn-outline-dark">
          Explore ML
        </a>
      </div>

    </div>
  );
}

export default WelcomeSection;
