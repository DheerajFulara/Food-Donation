import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ token }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();   // prevent page jump
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main">
      <div className="logo">
        <h2>
          ShareThe<span>MEAL</span>
        </h2>
      </div>
      <div className={showMenu ? "nav-items mobile-menu-link" : "nav-items"}>
        <ul>
          <li>
            <Link
              to="/"
              style={{ fontSize: "1.5rem" }}
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ fontSize: "1.5rem" }}
              onClick={() => setShowMenu(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/our-work"    
              style={{ fontSize: "1.5rem" }}
              onClick={() => setShowMenu(false)}
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              style={{ fontSize: "1.5rem" }}
              onClick={() => setShowMenu(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-login">
        {token ? (
          <Link className="link" to="/dashboard">
            <button className="btn-nav">Dashboard</button>
          </Link>
        ) : (
          <div className="l-btn">
            <Link className="link" to="/login">
              <button className="btn-nav">Login</button>
            </Link>
            <Link className="link" to="/signup">
              <button className="btn-nav">Signup</button>
            </Link>
          </div>
        )}
        <div className="hamburger-menu">
          <a href="#" onClick={handleClick}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
