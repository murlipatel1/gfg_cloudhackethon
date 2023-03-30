import React from 'react'
import './login.css'
import image from '../login and signup/gradient.png'
const Login = () => {
  return (
    <>
    {/* <div>Login</div> */}
    <div className="body2">
    <div className="container">
        <input type="checkbox" id="flip"/>
        <div className="cover">
            <div className="front">
                <img src={image} alt=""/>
                <div className="text">
                    <span className="text-1">JOIN US</span>
                    <span className="text-2">Start a Valuable Journey With Us</span>
                    {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
                </div>
            </div>
            <div className="back">
                <img className="backImg" src={image} alt=""/>
                <div className="text">
                    <br/>
                    <span className="text-1">Complete miles of journey <br/> with one step</span>
                    {/* <!-- <span className="text-2">Let's get started</span> --> */}
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
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email-Id" required/>
                            </div>
                            <div className="input-box">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" required/>
                            </div>

                            <div className="text"><a href="#">Forgot password?</a></div>

                            <div className="button input-box">
                                <input type="submit" value="Login"/>
                            </div>

                            <div
                                className="text sign-up-text"> Don't have an account? 
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
                                <i className="fas fa-user"></i>
                                <input type="text" name="fullName" placeholder="Name" required/>
                            </div>

                            <div className="input-box">
                                <i className="fas fa-phone"></i>
                                <input type="number" name="phNumber" placeholder="Phone" required/>
                            </div>

                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <input type="text" name="eMail" placeholder="Email-Id" required/>
                            </div>

                            <div className="input-box">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="passWord" placeholder="Password" required/>
                            </div>

                            <div className="input-box">
                                <i className="fas fa-check"></i>
                                <input type="password" placeholder="Confirm Password" required/>
                            </div>

                            <div className="button input-box">
                                <input type="submit" value="Register"/>
                            </div>

                            <div 
                                className="text login-text">Already have an account? 
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
  )
}

export default Login