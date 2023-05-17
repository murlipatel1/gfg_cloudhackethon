import React from "react";
import "./expendeture.css";
import SideBar from "../SideBar/SideBar";
const Expendeture = () => {
  return (
    <>
      <SideBar active={"expendeture"} />
      <div className="container-exp">
        <div className="containere">
          <div className="ajubaju3">
            <div className="expendeturecontainer">
              <h1>Expenditure</h1>
              <hr className="myhr"/>
              <div>
                <h2>Loan</h2>
                <br />
                <div className="sub-container">
                  <label for="name">Unique Id:</label>
                  <input type="text" id="uniqueid" name="uniqueid" />
                </div>
                <div className="sub-container">
                  <label for="ifsc">Ifsc Code:</label>
                  <input type="text" id="ifsc" name="ifsc" />
                </div>
                <div className="sub-container">
                  <label for="email">Amount:</label>
                  <input type="text" id="loanamount" name="loanamount" />
                </div>

                {/* <!-- <div className="notification">!</div> --> */}
                {/* </div> */}
                <hr className="myhre" />
                <div className="">
                  <h2>Cards</h2>
                  <br />
                  <div className="sub-container">
                    <label for="name">Balance:</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div className="sub-container">
                    <label for="name">Credit Score:</label>
                    <input type="text" id="name" name="name" />
                  </div>
                </div>
              </div>
            </div>
            <div className="expendeturecontainer">
              <h1>Stock Management</h1>

              <hr className="myhr" />
              <div>
                <h2>Stock</h2>
                <br />
                <div className="sub-container">
                  <label for="name">Stocks:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="sub-container">
                  <label for="name">Total amount:</label>
                  <input type="text" id="name" name="name" />
                </div>
              </div>
              <hr className="myhre" />
              <div>
                <h2>Mutual Funds</h2>
                <br />
                <div className="sub-container">
                  <label for="name">Stocks:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="sub-container">
                  <label for="name">Total amount:</label>
                  <input type="text" id="name" name="name" />
                </div>
              </div>
            </div>
          </div>
          <div className="sub-container buttonalignment">
            <button className="change-password">Save Changes</button>
            <button className="delete-account">Discard Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expendeture;
