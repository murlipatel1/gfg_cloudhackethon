import React,{useState} from 'react'
import './user.css'
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
    <div>
    <div className="user-container">
		<h1>User Profile</h1>
		<div className="sub-container1">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name"/>
		</div>
		<div className="sub-container1">
			<label for="phone">Phone:</label>
			<input type="tel" id="phone" name="phone" maxlength="10"/>
		</div>
		<div className="sub-container1">
			<label for="email">Email:</label>
			<input type="email" id="email" name="email"/>
		</div>
		<div className="sub-container1">
			<label for="address">Address:</label>
			<textarea id="address" name="address"></textarea>
		</div>
		<div className="sub-container1">
			<label for="aadhar">Aadhar VID:</label>
			<input type="text" id="aadhar" name="aadhar" maxlength="16"/>
		</div>
		<div className="sub-container1">
			<label for="pan">PAN:</label>
			<input type="text" id="pan" name="pan" maxlength="10"/>
		</div>

		<div onClick={handleOpenModal} className="notification">!</div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
            </span>
            <div class="notifications-container">
            <span className="notification-message">Your notification message goes here</span>
            
            </div>
          </div>
        </div>
      )}
        {/* <div className="container preferences-container"> */}
		<h1>Preferences </h1>
		<h3>Notifications</h3>
		<div className="sub-container2">
			<div className="preference-options">
				<label for="email-notifications">Email:</label>
				<input type="checkbox" id="email-notifications" name="email-notifications"/>
				<label for="sms-notifications">SMS:</label>
				<input type="checkbox" id="sms-notifications" name="sms-notifications"/>
			</div>
		</div>
		<hr/>
		<h3>Alerts</h3>
		<div className="sub-container2">
			<div className="preference-options">
				<label for="email-alerts">Email:</label>
				<input type="checkbox" id="email-alerts" name="email-alerts"/>
				<label for="sms-alerts">SMS:</label>
				<input type="checkbox" id="sms-alerts" name="sms-alerts"/>
			</div>
		</div>
		<hr/>
		<h3>Other Settings</h3>
		<div className="sub-container2">
			<div className="preference-options">
				<label for="language">Language:</label>
				<select id="language" name="language">
					<option value="english">English</option>
					<option value="spanish">Hindi</option>
					<option value="french">Gujarati</option>
				</select>
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

    <div className="sub-container1">
			<button className="change-password">Change Password</button>
			<button className="delete-account">Delete Account</button>
		</div>
	</div>
    </div>
    </>
  )
}

export default User