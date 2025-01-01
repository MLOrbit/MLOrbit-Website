import React, { useState, useContext } from "react";
import { emailLogin, emailSignup, googleLogin } from "./AuthService";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Enhanced CSS
import { UserContext } from "../context/UserContext"; // Global user context

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = isLogin
        ? await emailLogin(email, password)
        : await emailSignup(email, password);
      setUser({ 
        uid : userCredential.uid,
        name: userCredential.displayName || userCredential.email,
        email: userCredential.email,
      });

      // Set user's last-read progress
      const progress = JSON.parse(localStorage.getItem("userProgress")) || {};
      setUser((prev) => ({ ...prev, progress }));

      alert(isLogin ? "Login successful!" : "Signup successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await googleLogin();
      setUser({
        uid: userCredential.uid,
        name: userCredential.displayName || userCredential.email,
        email: userCredential.email,
      });

      // Set user's last-read progress
      const progress = JSON.parse(localStorage.getItem("userProgress")) || {};
      setUser((prev) => ({ ...prev, progress }));

      alert("Google Login successful!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content row align-items-center justify-content-center">
        {/* Left Section - Welcome Animation */}
        <div className="col-md-6 left-section d-none d-md-block">
          <h1 className="welcome-text mb-4">Welcome to MLOrbit</h1>
          <p className="tagline">
            Join a growing community of learners, developers, and creators!
          </p>
          <img
            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
            alt="Animation"
            className="login-animation"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="col-md-5 col-sm-12 form-section">
          <h2 className="text-center mb-4 fw-bold">
            {isLogin ? "Login to MLOrbit" : "Create Your Account"}
          </h2>
          <form onSubmit={handleEmailSubmit} className="form-container">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary w-100 mb-3" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="social-login text-center mb-4">
            <button
              className="btn google-login w-100"
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google me-2"></i> Sign in with Google
            </button>
          </div>

          <p className="toggle-text text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-link fw-bold"
            >
              {isLogin ? "Create Account" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
