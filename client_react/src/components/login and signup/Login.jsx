import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import image from "../login and signup/gradient.png";
// import { Icon, InlineIcon } from "@iconify/react";
import { Icon } from "@iconify/react";
import mylogo from "./mylogo.png";
import axios from "axios";

/*
  To Do:
  1) Change all form input parameters to variables with useState hooks
  2) Change onSubmit Buttons to handleSubmitLogin and handleSubmitRegister for both form types
  3) Ensure that authToken is stored in localStorage or some other area of frontend

  To Note: 
  1) Phone Number in register form is ENTIRELY USELESS. Backend doesn't have phoneNumber as an attribute.

*/

const Login = () => {
  let navigate = useNavigate();

  //Variables as useState-based variables
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secPassword, setSecPassword] = useState("")
  const [phonenumber, setPhoneNumber] = useState(0)  //useless attribute --> Not necessary but kept it as it has been kept in form


  //make handle register submit section
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (password === secPassword) {
      const data = JSON.stringify({ "name": name, "email": email, "password": password,"phonenumber":phonenumber });
      const options = {
        headers: { "content-type": "application/json" }
      }

      let j = null;
      axios.post("http://localhost:5000/authentication/register", data, options)
        .then(async (response)=> {
          console.log(response);
          j = await response.json()
          console.log(j)
          if (j.jwtToken) {
            localStorage.setItem('jwt_token', j.jwtToken)
            navigate("/users")
          } else {
            navigate("/login")
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  //make handle login submit section
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    //method to send data to backend and await response

    // const data = JSON.stringify({"email": email, "password": password});
    // const options = {
    //     headers: {"content-type": "application/json"}
    // }

    // let j = null;
    // axios.post("http://localhost:5000/authentication/login", data, options)
    // .then(async (response)=> {
    //     // console.log(response);
    //     j = await response.json()
    //     // console.log(j)
    // console.log(j.jwtToken);
    // if (j.jwtToken) 
    // {
    //     localStorage.setItem('jwt_token', j.jwtToken)
    //     navigate("/expendeture")
    // }else{
    //   navigate("/login")
    // }
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const data = JSON.stringify(
      { 
      "email": email,
       "password": password
       }
       );
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data
    };

    let j = null;
    fetch("http://localhost:5000/authentication/login", options)
      .then(async (response) => {
        // console.log(response);
        j = await response.json();
        // console.log(j)
        console.log(j.jwtToken);
        if (j.jwtToken) {
          localStorage.setItem('jwt_token', j.jwtToken)
          navigate("/users")
        } else {
          navigate("/login")
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  //const [input1Value, setInput1Value] = useState("");
  //const [input2Value, setInput2Value] = useState("");
  // let colour = "black";
  // let icon = "mdi:password";

  /*
  Comment --> I am still able to register with different passwords. Thus, am making changes.

  function handleInputChange(event) {
    if (event.target.name === "password") {
      setInput1Value(event.target.value);
    } else if (event.target.name === "confirmpassword") {
      setInput2Value(event.target.value);
    }
  }
*/
  const isPasswordMatch = password === secPassword;

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

                {/*I am removing the action attribute from form right now. 
                Main reason being the fact that we are going to use the handle Functions
                to do it for us*/}

                <form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"mdi:email"}
                        color="black"
                        className="text-3xl"
                      />
                      {/* //text to ntext */}
                      {/*adding email variable made above in the form*/}
                      <input type="etext" placeholder="Email-Id" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:lock"}
                        color="black"
                        className="text-3xl"
                      />
                      {/*adding password variable made above in the form*/}
                      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="text">
                      <a href=" ">Forgot password?</a>
                    </div>

                    <div className="button input-box">
                      <input
                        type="submit"
                        //value="Login"
                        onClick={handleLoginSubmit}
                      />
                    </div>

                    <div className="text sign-up-text">
                      {" "}
                      Don't have an account?
                      <label htmlFor="flip">Register Now</label>
                    </div>
                  </div>
                </form>
              </div>

              {/*I am removing the action attribute from form right now. 
              Main reason being the fact that we are going to use the handle Functions
              to do it for us*/}

              <div className="register-form">
                <div className="title">REGISTER</div>

                <form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <Icon
                        icon={"material-symbols:person"}
                        color="black"
                        className="text-3xl"
                      />
                      <input
                        type="ntext" //text to ntext
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}  //adding name variable made above in the form
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
                        name="phoneNumber"
                        placeholder="Phone"
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}  //adding phoneNumber variable made above in the for
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  //adding email variable made above in the form
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} //adding password variable made above in the form
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
                        name="secPassword"
                        value={secPassword}
                        onChange={(e) => setSecPassword(e.target.value)}  //adding second password variable made above in the form
                      />
                    </div>

                    <div className="button input-box">
                      <input type="submit"
                        //value="Register" 
                        onClick={handleRegisterSubmit} />
                    </div>

                    <div className="text login-text">
                      Already have an account?
                      <label htmlFor="flip">Login now</label>
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
