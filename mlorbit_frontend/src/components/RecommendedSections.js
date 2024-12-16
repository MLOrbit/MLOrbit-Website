import React from "react";
import { Link } from "react-router-dom";
import algosImage from "../assets/algos.jpg";
import datastructuresImage from "../assets/datastructures.jpg";
import mlImage from "../assets/ml.jpg";
import "./RecommendedSections.css";

function RecommendedSections() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold text-primary">Recommended Sections</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <Link to="/algorithms" className="text-decoration-none">
            <div className="card custom-card">
              <img
                src={algosImage}
                className="card-img-top"
                alt="Algorithms"
              />
              <div className="card-body">
                <h5 className="card-title">Explore Algorithms</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/data-structures" className="text-decoration-none">
            <div className="card custom-card">
              <img
                src={datastructuresImage}
                className="card-img-top"
                alt="Data Structures"
              />
              <div className="card-body">
                <h5 className="card-title">Explore Data Structures</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/machine-learning" className="text-decoration-none">
            <div className="card custom-card">
              <img
                src={mlImage}
                className="card-img-top"
                alt="Machine Learning"
              />
              <div className="card-body">
                <h5 className="card-title">Explore Machine Learning</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecommendedSections;
