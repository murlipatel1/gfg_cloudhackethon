import React, { useState } from "react";
import "./expendeture.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";

const Expendeture = () => {
  const [loanCounter, setLoanCounter] = useState(0);
  const [cardCounter, setCardCounter] = useState(0);
  const [stockCounter, setStockCounter] = useState(0);
  const [mfCounter, setMFCounter] = useState(0);

  const increaseLoan = () => {
    setLoanCounter(loanCounter + 1);
  };

  const increaseCard = () => {
    setCardCounter(cardCounter + 1);
  };

  const increaseStock = () => {
    setStockCounter(stockCounter + 1);
  };

  const increaseMF = () => {
    setMFCounter(mfCounter + 1);
  };
  return (
    <>
      <header>
        <Navbar active={"expendeture"} />
        <SideBar active={"expendeture"} />
      </header>
      <div className="container-exp">
        <div className="containere">
          <div className="ajubaju3">
            <div className="expendeturecontainer">
              <h1>Expenditure</h1>
              <hr className="myhr" />
              <div>
                <h2>
                  Loan <span className="counter">{loanCounter}</span>
                </h2>
                <br />
                <div className="sub-container">
                  <label for="name">Loan Id:</label>
                  <input type="text" id="loanid" name="loanid" />
                </div>
                <div className="sub-container">
                  <label for="ifsc">Ifsc Code:</label>
                  <input type="text" id="ifsc" name="ifsc" />
                </div>
                <div className="sub-container">
                  <label for="email">Loan Amount:</label>
                  <input
                    type="number"
                    id="loanamount"
                    name="loanamount"
                    placeholder="Rs"
                  />
                </div>
                <button className="change-password" onClick={increaseLoan}>
                  Submit
                </button>
                {/* <!-- <div className="notification">!</div> --> */}
                {/* </div> */}
                <hr className="myhre" />
                <div className="">
                  <h2>
                    Cards <span className="counter">{cardCounter}</span>
                  </h2>
                  <br />
                  <div className="sub-container">
                    {/* <label for="name">Card Type:</label>
                    <input type="text" id="name" name="name" /> */}
                    <label htmlFor="cardType">Card Type:</label>
                    <select
                      id="cardType"
                      name="cardType"
                      className="dropbox-menu"
                    >
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                      <option value="amex">American Express</option>
                      <option value="discover">Discover</option>
                    </select>
                  </div>
                  <div className="sub-container">
                    <label for="phone"> Card Number:</label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      maxLength={16}
                    />
                  </div>
                  <div className="sub-container">
                    <label for="name">Total Amount:</label>
                    <input
                      type="number"
                      id="card_amount"
                      name="card_amount"
                      placeholder="Rs"
                    />
                  </div>
                </div>
              </div>
              <button className="change-password" onClick={increaseCard}>
                Submit
              </button>
            </div>
            <div className="expendeturecontainer">
              <h1>Stock Management</h1>

              <hr className="myhr" />
              <div>
                <h2>
                  Stock <span className="counter">{stockCounter}</span>
                </h2>
                <br />
                <div className="sub-container">
                  <label for="name">Stock Name:</label>
                  <input type="text" id="stock_name" name="stock_name" />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input
                    type="number"
                    id="stock_price"
                    name="stock_price"
                    placeholder="Rs"
                  />
                </div>
                <div className="sub-container">
                  <label for="name">Net Stock Amount:</label>
                  <input
                    type="number"
                    id="total_stock_price"
                    name="total_stock_price"
                    placeholder="Rs"
                    disabled
                  />
                </div>
              </div>
              <button className="change-password" onClick={increaseStock}>
                Submit
              </button>
              <hr className="myhre" />
              <div>
                <h2>
                  Mutual Funds <span className="counter">{mfCounter}</span>
                </h2>
                <br />
                <div className="sub-container">
                  <label for="name">Stock Name:</label>
                  <input type="text" id="mf_name" name="mf_name" />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input
                    type="number"
                    id="mf-price"
                    name="mf-price"
                    placeholder="Rs"
                  />
                </div>
                <div className="sub-container">
                  <label for="name">Net MF Amount:</label>
                  <input
                    type="number"
                    id="total_mf_price"
                    name="total_mf_price"
                    placeholder="Rs"
                    disabled
                  />
                </div>
              </div>
              <button className="change-password" onClick={increaseMF}>
                Submit
              </button>
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
