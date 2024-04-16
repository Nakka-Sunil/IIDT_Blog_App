import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook and Link
import "./register.css"; // Import register.css for styling

export default function Register() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [username, setUsername] = useState(""); // State for username input
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [errors, setErrors] = useState({}); // State for validation errors

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) {
      return; 
    }

    navigate("/"); // Navigate to Home page after successful registration
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="text"
          id="username"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div className="error">{errors.username}</div>} {/* Display error message */}
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="text"
          id="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>} {/* Display error message */}
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>} {/* Display error message */}
        <button className="registerButton" type="submit">Register</button>
      </form>
  
      {/* Close the Link component properly */}
      <Link to="/login" className="loginRegisterButton">Login</Link>
    </div>
  );
}
