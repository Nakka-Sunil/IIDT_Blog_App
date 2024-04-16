import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./login.css";

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }

    // Implement login logic using email and password values
    // If login is successful:
    navigate("/"); // Navigate to Home page
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          className="loginInput"
          type="text"
          id="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>} {/* Display error message */}
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>} {/* Display error message */}
        <button className="loginButton" type="submit">Login</button>
      </form>
      <Link to="/register" className="loginRegisterButton">Register</Link>
    </div>
  );
}
