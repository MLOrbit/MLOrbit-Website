// Sections.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Sections.css";

function Sections() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for Algorithms button click
  const handleAlgorithmsClick = () => {
    navigate("/schedule-planner", { state: { section: "Algorithms" } });
  };

  // Handler for Data Structures button click (Optional)
  const handleDataStructuresClick = () => {
    navigate("/schedule-planner", { state: { section: "Data Structures" } });
  };

  // Handler for Machine Learning button click (Optional)
  const handleMachineLearningClick = () => {
    navigate("/schedule-planner", { state: { section: "Machine Learning" } });
  };

  return (
    <div className="container mt-5">
      <div className="row mt-4">
        <div className="col-md-4">
          <button className="custom-btn" onClick={handleAlgorithmsClick}>
            Algorithms
          </button>
        </div>
        <div className="col-md-4">
          <button className="custom-btn" onClick={handleDataStructuresClick}>
            Data Structures
          </button>
        </div>
        <div className="col-md-4">
          <button className="custom-btn" onClick={handleMachineLearningClick}>
            Machine Learning
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sections;
