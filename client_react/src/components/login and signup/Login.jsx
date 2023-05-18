import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import image from "../login and signup/gradient.png";
// import { Icon, InlineIcon } from "@iconify/react";
import { Icon } from "@iconify/react";
import mylogo from "./mylogo.png";

const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/expendeture");
  };

  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  // let colour = "black";
  // let icon = "mdi:password";

  function handleInputChange(event) {
    if (event.target.name === "password") {
      setInput1Value(event.target.value);
    } else if (event.target.name === "confirmpassword") {
      setInput2Value(event.target.value);
    }
  }
  const isPasswordMatch = input1Value === input2Value;

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
      <header>
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
      {/* <div>Login</div> */}
      <div className="body2l">
        <div className="containerl">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src={image} alt="" />
              <div className="text">
                <span className="text-1">JOIN US</span>
                <span className="text-2">Start a Valuable Journey With Us</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src={image} alt="" />
              <div className="text">
                <br />
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
              </div>
            </div>
          </div>

          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"mdi:email"}
                        color="black"
                        className="text-3xl"
                      />
                      {/* //text to ntext */}
                      <input type="etext" placeholder="Email-Id" required />
                    </div>
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:lock"}
                        color="black"
                        className="text-3xl"
                      />
                      <input type="password" placeholder="Password" required />
                    </div>

                    <div className="text">
                      <a href=" ">Forgot password?</a>
                    </div>

                    <div className="button input-box">
                      <input
                        type="submit"
                        value="Login"
                        onClick={handleSubmit}
                      />
                    </div>

                    <div className="text sign-up-text">
                      {" "}
                      Don't have an account?
                      <label for="flip">Register Now</label>
                    </div>
                  </div>
                </form>
              </div>

              <div action="/" className="register-form">
                <div className="title">REGISTER</div>

                <form action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:person"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="ntext" //text to ntext
                        name="fullName"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:phone-callback-sharp"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="number"
                        name="phNumber"
                        placeholder="Phone"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"mdi:email"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="etext" //text to etext
                        name="email"
                        placeholder="Email-Id"
                        required
                      />
                    </div>

                    <div className="input-box">
                      <Icon
                        icon={"mdi:password"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={input1Value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="input-box">
                      {isPasswordMatch ? (
                        <Icon
                          icon={"material-symbols:check-circle-outline-rounded"}
                          color={"green"}
                          className="text-3xl"
                        />
                      ) : (
                        <Icon
                          icon={"mdi:password"}
                          color={"black"}
                          className="text-3xl"
                        />
                      )}
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={input2Value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="button input-box">
                      <input type="submit" value="Register" />
                    </div>

                    <div className="text login-text">
                      Already have an account?
                      <label for="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
