// LoginForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSwitch }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Validate and send login request
    console.log("Logging in...");
  };

  return (
    <>
      <h2 className="modal-title">Log In</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
          <span onClick={onSwitch} style={{ color: "blue", cursor: "pointer" }}>
            Sign up
          </span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
