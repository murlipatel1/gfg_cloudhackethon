import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import mylogo from "./mylogo.png";

export default function Navbar(props) {
  const navigateLogin = useNavigate();

  const handleHome = () => {
    navigateLogin("/");
  };

  const handleAbout = () => {
    navigateLogin("/#about");
  };

  const handleServices = () => {
    navigateLogin("/#services");
  };

  const handleFeatures = () => {
    navigateLogin("/#features");
  };

  const handleContact = () => {
    navigateLogin("/#contact");
  };

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#hero" onClick={handleHome}>
              <img src={mylogo} alt="Fintech Company Name" />
            </a>
          </div>
          <nav>
            <ul>
              <li onClick={handleHome}>
                <a href="#hero">Home</a>
              </li>
              <li onClick={handleAbout}>
                <a href="#about">About</a>
              </li>
              <li onClick={handleServices}>
                <a href="#services">Services</a>
              </li>
              <li onClick={handleFeatures}>
                <a href="#features">Features</a>
              </li>
              <li onClick={handleContact}>
                <a href="#contact">Contact US</a>
              </li>
              {/* <li className="login-signup" onClick={handleLogin}>
                <a href=" ">Login/Signup</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
