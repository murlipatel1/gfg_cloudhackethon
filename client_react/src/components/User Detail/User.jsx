import React, { useState } from "react";
import "./user.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";
const User = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar active={"users"} />
      <SideBar active={"users"} />
      <div className="body4">
        <div className="user-container">
          <h1>User Profile</h1>
          <div className="sub-container1">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" maxlength="10" />
          </div>
          <div className="sub-container1">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" />
            {/* <textarea id="address" name="address"></textarea> */}
          </div>
          <div className="sub-container1">
            <label for="aadhar">Aadhar VID:</label>
            <input type="text" id="aadhar" name="aadhar" maxlength="16" />

            <label for="pan">PAN:</label>
            <input type="text" id="pan" name="pan" maxlength="10" />
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
            <button className="change-password"> Save </button>
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
