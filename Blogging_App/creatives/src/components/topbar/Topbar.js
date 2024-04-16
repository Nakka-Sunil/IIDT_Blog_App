import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react"; 
export default function Topbar() {
  const user = true; 

const [showText, setShowText] = useState(true);

  const handleLogout = () => {
    setShowText(false); 
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem"> 
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem"> 
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {user ? (
           <li className="topListItem">
            <Link className="link" to="/login" onClick={handleLogout}>
              {showText ? "LogOut" : ""}
            </Link>
          </li>
          ) : (
            <>
              <li className="topListItem">
                <Link className="link" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpdpNa2ESMVs3mr2ko22udxm6HZWLcjxZNg&s"
              alt="User Avatar"
            />
          </Link>
        ) : (
          <Link className="link" to="/login">
            <i className="topSearchIcon fas fa-search"></i>
          </Link>
        )}
      </div>
    </div>
  );
}
