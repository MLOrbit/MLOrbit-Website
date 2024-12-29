// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections
import WelcomeSection from "./components/WelcomeSection";
import Sections from "./components/Sections";
import RecommendedSections from "./components/RecommendedSections";

// Pages
import AboutSection from "./components/AboutSection";
import Login from "./login/LoginPage";
import Algorithms from "./pages/Algorithms";
import DataStructures from "./pages/DataStructures";
import MachineLearning from "./pages/MachineLearning";
import ExploreML from "./ExploreML/ExploreML";
import AdvancedPDFViewer from "./ExploreML/AdvancedPDFViewer";

// Protected Pages
import DSAProgress from "./dsaProgress/components/DSAProgress"; // Corrected path

// User Context and Private Routes
import { UserProvider } from "./components/userDetails/UserContext"; // Corrected path
import PrivateRoute from "./components/PrivateRoute"; // Corrected path

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <WelcomeSection />
                <Sections />
                <RecommendedSections />
              </>
            }
          />

          {/* Public Pages */}
          <Route path="/about" element={<AboutSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/data-structures" element={<DataStructures />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/explore-ml" element={<ExploreML />} />
          <Route path="/view-pdf" element={<AdvancedPDFViewer />} />

          {/* Protected Pages */}
          <Route
            path="/dsa-progress"
            element={
              <PrivateRoute>
                <DSAProgress />
              </PrivateRoute>
            }
          />
        </Routes>
        {/* Footer will remain visible on all pages */}
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
