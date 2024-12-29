import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreML.css";

// Importing fallback image for error handling
import defaultBookImage from "./assets/1.png";

function ExploreML() {
    const navigate = useNavigate();

    const books = [
        {
            id: "book-1",
            title: "Hands-On Machine Learning",
            author: "Aurélien Géron",
            description: "Practical guide to machine learning with scikit-learn and TensorFlow",
            year: "2019",
            category: "Machine Learning",
            image: require("./assets/1.png"),
            pdfPath: require("./assets/Hands_On_Machine_Learning_with_Scikit_Learn_and_TensorFlow.pdf"),
        },
        {
            id: "book-2",
            title: "Deep Learning by Ian Goodfellow",
            author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
            description: "Comprehensive introduction to deep learning fundamentals",
            year: "2016",
            category: "Deep Learning",
            image: require("./assets/2.jpg"),
            pdfPath: require("./assets/DL.pdf"),
        },
        {
            id: "book-3",
            title: "Machine Learning: A Probabilistic Perspective",
            author: "Kevin P. Murphy",
            description: "Advanced concepts in machine learning with probabilistic approach",
            year: "2012",
            category: "Machine Learning",
            image: require("./assets/3.jpg"),
            pdfPath: require("./assets/DM.pdf"),
        },
        {
            id: "book-4",
            title: "Artificial Intelligence A Modern Approach",
            author: "Stuart Russell, Peter Norvig",
            description: "Comprehensive introduction to artificial intelligence",
            year: "2020",
            category: "Artificial Intelligence",
            image: require("./assets/5.jpg"),
            pdfPath: require("./assets/6.pdf"),
        },
        {
            id: "book-5",
            title: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            description: "Guide to designing large-scale data systems",
            year: "2017",
            category: "Data Engineering",
            image: require("./assets/6.jpg"),
            pdfPath: require("./assets/5.pdf"),
        },
    ];

    const handleViewPDF = (pdfPath) => {
        navigate("/view-pdf", { state: { pdfPath } });
    };

    return (
        <div className="explore-ml">
            <h1>Explore ML</h1>
            <div className="book-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-card" aria-label={`Book: ${book.title}`}>
                        <div className="image-container">
                            <img
                                src={book.image}
                                alt={`${book.title} cover`}
                                className="book-cover"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = defaultBookImage;
                                }}
                            />
                        </div>
                        <h2>{book.title}</h2>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleViewPDF(book.pdfPath)}
                            aria-label={`View PDF of ${book.title}`}
                        >
                            View PDF
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreML;
