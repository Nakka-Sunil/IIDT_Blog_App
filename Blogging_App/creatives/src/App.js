import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/about"; 
import Contact from "./pages/contact/contact"; 

function isAuthenticated() {
  return true; // Just for demonstration, replace with your actual authentication logic
}

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/register"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={isAuthenticated() ? <Write /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/settings"
          element={isAuthenticated() ? <Settings /> : <Navigate to="/login" replace />}
        />
        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
