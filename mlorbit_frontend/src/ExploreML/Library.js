import React, { useState } from "react";
import AdvancedPDFViewer from "./AdvancedPDFViewer";
import "./Library.css";

function Library() {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const books = [
    {
      title: "Hands-On Machine Learning",
      file: "/ExploreML/assets/Hands_On_Machine_Learning_with_Scikit_Learn_and_TensorFlow.pdf",
      cover: "/ExploreML/assets/hands_on_ml.jpg",
    },
    {
      title: "Deep Learning by Ian Goodfellow",
      file: "/ExploreML/assets/Deep_Learning_by_Ian_Goodfellow.pdf",
      cover: "/ExploreML/assets/deep_learning.jpg",
    },
  ];

  return (
    <div className="library">
      {!selectedPDF ? (
        <div className="book-list">
          {books.map((book, index) => (
            <div
              key={index}
              className="book-item"
              onClick={() => setSelectedPDF(book.file)}
            >
              <img src={book.cover} alt={book.title} className="book-cover" />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedPDF(null)}>Back to Library</button>
          <AdvancedPDFViewer selectedPDF={selectedPDF} />
        </div>
      )}
    </div>
  );
}

export default Library;
