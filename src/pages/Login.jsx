  // LoginModal.jsx
  import React from "react";
  import "../styles/Login.css";
  import { Link } from "react-router-dom";
  // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  // import { faXmark } from "@fortawesome/free-solid-svg-icons";
  
  import { useNavigate } from "react-router-dom";
  
  const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
  
    if (!isOpen) return null;
  
    const handleSignupRedirect = () => {
      onClose();           // Close the login modal
      navigate("/signup"); // Navigate to signup page
    };
    return (
      <div className="overlay">
        <div className="modal">
          <button className="close-btn" onClick={onClose}>
            &times;
            {/* <FontAwesomeIcon icon={faXmark} /> */}
          </button>
          <h2 className="modal-title">Log In</h2>
          <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
  
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-link">
                Forgot Password?
              </a>
            </div>
  
            <button type="submit" className="login-btn">Log In</button>
  
            <p className="signup-text">
              Don’t have an account?{" "}
              <span onClick={handleSignupRedirect} style={{ color: "blue", cursor: "pointer" }}>
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginModal;