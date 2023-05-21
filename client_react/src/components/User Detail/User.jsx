import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";

/*
  To Do: 
  1) Add UseState Based Variables --> Done. Added in form as well.
  2) Create method to send a post request to backend

  Required Variables:
  1) Name  --> user_name(String) --> variable_name == name
  2) Phone  --> int --> variable_name == phonenumber 
  3) Date Of Birth --> date --> variable_name == dob
  4) Email --> email(String) --> variable_name == email
  5) Address 1 --> string --> vname(variable_name) == add1 
  6) Address 2 --> String --> vname == add2
  7) Aadhar VID --> int --> vname == aadharvid
  8) PAN --> int --> vname == pannumber
*/

const User = () => {

  let navigate = useNavigate();

  //Variables as useState-based variables
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhoneNumber] = useState(0) 
  const [dob, setDob] = useState(new Date())  //not sure if this will work. Do check once.
  const [add1, setAdd1] = useState("")
  const [add2, setAdd2] = useState("")
  const [aadharvid, setAadharvid] = useState(0)
  const [pannumber, setPannumber] = useState(0)

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    e.preventDefault();
    let add = add1 + add2
    const data = JSON.stringify({ "user_name": name, "email": email, "phonenumber": phonenumber, "dob": dob, "address": add, "aadharvid": aadharvid, "pannumber": pannumber});
      const options = {
        headers: { "content-type": "application/json",
                    "jwt_token": localStorage.getItem('jwt_token') 
                  }
      }

      let j = null;
      axios.post("http://localhost:5000/userdetails/addinfo", data, options)
      .then(async (response)=> {
        console.log(response);
        j = await response.json()
        console.log(j)
        if (j) {
          console.log("Success")
        }
        navigate("/users")
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <header>
        <Navbar active={"users"} />
        <SideBar active={"users"} />
      </header>
      <div className="body4">
        <div className="user-container">

          <h1 className="">User Profile</h1>
          <div className="sub-container1">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" 
            value={name} onChange={(e) => setName(e.target.value)}/>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" maxlength="10" 
            value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="sub-container1">
            <label for="date" className="date-label">
              Date Of Birth:
            </label>
            <input type="date" id="date" name="date" 
            value={dob} onChange={(e) => setDob(e.target.value)} />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            {/* <textarea id="address" name="address"></textarea> */}
          </div>
          <div className="sub-container1">
            <label for="address">Address 1:</label>
            <input type="text" id="address" name="address" 
            value={add1} onChange={(e) => setAdd1(e.target.value)}/>

            <label for="address">Address 2:</label>
            <input type="text" id="address" name="address" 
            value={add2} onChange={(e) => setAdd2(e.target.value)}/>
            {/* <textarea id="address" name="address"></textarea> */}
          </div>
          <div className="sub-container1">
            <label for="aadhar">Aadhar VID:</label>
            <input type="text" id="aadhar" name="aadhar" maxlength="16" 
            value={aadharvid} onChange={(e) => setAadharvid(e.target.value)}/>

            <label for="pan">PAN:</label>
            <input type="text" id="pan" name="pan" maxlength="10" 
            value={pannumber} onChange={(e) => setPannumber(e.target.value)}/>
          </div>

          <div onClick={handleOpenModal} className="notification">
            🔔
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div class="notifications-container">
                  <span className="notification-message">
                    Your notification message goes here
                  </span>
                </div>
              </div>
            </div>
          )}
          {/* <div className="container preferences-container"> */}
          <hr className="myhr" />
          <h1>Preferences </h1>
          <h3 className="notify">Notifications:</h3>
          <div className="sub-container2">
            <div className="preference-options">
              <label for="email-notifications">Email</label>
              <input
                type="checkbox"
                id="email-notifications"
                name="email-notifications"
              />
              <label for="sms-notifications"> SMS</label>
              <input
                type="checkbox"
                id="sms-notifications"
                name="sms-notifications"
              />
            </div>
          </div>
          {/* <hr className="myhr1" /> */}
          <h3 className="notify">Alerts:</h3>
          <div className="sub-container2">
            <div className="preference-options">
              <label for="email-alerts">Email</label>
              <input type="checkbox" id="email-alerts" name="email-alerts" />
              <label for="sms-alerts">SMS</label>
              <input type="checkbox" id="sms-alerts" name="sms-alerts" />
            </div>
          </div>
          <hr className="myhr" />
          <h2 className="other">Other Settings</h2>
          <div className="sub-container2">
            <div className="preference-options">
              <label for="language">Language:</label>
              <select id="language" name="language">
                <option value="english">English</option>
                <option value="spanish">Hindi</option>
                <option value="french">Gujarati</option>
              </select>
            </div>
            <div className="preference-options">
              <label for="theme">Theme:</label>
              <select id="theme" name="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>

          <div className="sub-container2">
            {/* Clicking the button will trigger the method and will send a request to backend */}
            <button className="change-password" onClick={handleSave}> Save </button>
          </div>
          {/* </div> */}
          <hr className="myhr" />
          <div className="sub-container1">
            <button className="change-password">Change Password</button>
            <button className="delete-account">Delete Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
