import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      number: formData.number,
    };
    try {
      await axios.post("http://localhost:3000/signup", data);
      navigate("/"); // redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Back to Home button fixed top-left */}
      <Link
        to="/"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#333",
          backgroundColor: "#f0f0f0",
          padding: "6px 12px",
          borderRadius: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
          zIndex: 1000,
        }}
      >
        ← Back to Home
      </Link>

      <div className="signup_container">
        <div className="signup_main-img"></div>

        <div className="signup_wrapper">
          <form>
            <h1>Sign-Up</h1>
            <p>Create your free account on Food-donation</p>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              id="name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              id="email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              id="password"
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              id="phone"
            />

            <button type="submit" id="signup-btn" onClick={handleSubmit}>
              Sign Up
            </button>

            <div className="login">
              <p>Already have an account?</p>
              <Link to={"/login"}>
                <button className="login-btn">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
