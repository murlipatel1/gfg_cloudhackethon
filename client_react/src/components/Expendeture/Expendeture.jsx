import React, { useState } from "react";
import "./expendeture.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";

const Expendeture = () => {
  const [loanCounter, setLoanCounter] = useState(0);
  const [cardCounter, setCardCounter] = useState(0);
  const [stockCounter, setStockCounter] = useState(0);
  const [mfCounter, setMFCounter] = useState(0);

  //----------------------------
  const [total_stock_price, settotal_stock_price] = useState("");
  const [total_mf_price, settotal_mf_price] = useState("");
  // ---------------------------

  const [loan_id, setloan_id] = useState(""); // State for loan_id input
  const [ifsc_code, setifsc_code] = useState(""); // State for ifsc_code input
  const [loan_amount, setloan_amount] = useState(""); // State for loan_amount input
  const [card_type, setcard_type] = useState(""); // State for card_type input
  const [card_number, setcard_number] = useState(""); // State forcard_number input
  const [card_amount, setcard_amount] = useState(""); // State for card_amount input
  const [stock_name, setstock_name] = useState(""); // State for stock_name input
  const [stock_price, setstock_price] = useState(""); // State for stock_price input
  const [mf_name, setmf_name] = useState(""); // State for mf_name input
  const [mf_price, setmf_price] = useState(""); // State for mf_price input

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a data object with the form values
    const edata = {
      loan_id,
      ifsc_code,
      loan_amount,
      card_type,
      card_number,
      card_amount,
      stock_name,
      stock_price,
      total_stock_price, // total stock price
      mf_name,
      mf_price,
      total_mf_price, // total mf price
    };

    // Make the fetch request with the POST method
    // fetch("http://localhost:5000/expenditure/exp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     jwt_token: localStorage.getItem("jwt_token"),
    //     // jwt_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxM30sImlhdCI6MTY4NDY0MTU0MywiZXhwIjoxNjg0NjQ1MTQzfQ.yzxUPA0U_Z8_JEkWv7R6epJrUXWaBXgqo6pk2OqkW1o",
    //   },
    //   body: JSON.stringify(edata),
    // })
    //   .then(async (response) => {
    //     let resp = response.json();
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.error(error);
    //   });

    try {
      const response = await fetch("http://localhost:5000/expenditure/exp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.getItem("jwt_token"),
        },
        body: JSON.stringify(edata),
      });

      const data = await response.json();

      // Update the state variables with the retrieved data
      

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalprice = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/expenditure/exp", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.getItem("jwt_token"),
        }
      });
      const data = await response.json();

      // Update the state variables with the retrieved data
      settotal_stock_price(data.total_stock_price);
      settotal_mf_price(data.total_mf_price);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  
  }

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
                  <input
                    type="text"
                    id="loanid"
                    name="loanid"
                    value={loan_id}
                    onChange={(e) => setloan_id(e.target.value)}
                    
                  />
                </div>
                <div className="sub-container">
                  <label for="ifsc">Ifsc Code:</label>
                  <input
                    type="text"
                    id="ifsc"
                    name="ifsc"
                    value={ifsc_code}
                    onChange={(e) => setifsc_code(e.target.value)}
                  />
                </div>
                <div className="sub-container">
                  <label for="email">Loan Amount:</label>
                  <input
                    type="number"
                    id="loanamount"
                    name="loanamount"
                    placeholder="Rs"
                    value={loan_amount}
                    onChange={(e) => setloan_amount(e.target.value)}
                  />
                </div>
                <button
                  className="change-password"
                  // onClick={increaseLoan}
                  onClick={handleSubmit}
                >
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
                      value={card_type}
                      onChange={(e) => setcard_type(e.target.value)}
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
                      value={card_number}
                      onChange={(e) => setcard_number(e.target.value)}
                    />
                  </div>
                  <div className="sub-container">
                    <label for="name">Total Amount:</label>
                    <input
                      type="number"
                      id="card_amount"
                      name="card_amount"
                      placeholder="Rs"
                      value={card_amount}
                      onChange={(e) => setcard_amount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                className="change-password"
                // onClick={increaseCard}
                onClick={handleSubmit}
              >
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
                  <input
                    type="text"
                    id="stock_name"
                    name="stock_name"
                    value={stock_name}
                    onChange={(e) => setstock_name(e.target.value)}
                  />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input
                    type="number"
                    id="stock_price"
                    name="stock_price"
                    placeholder="Rs"
                    value={stock_price}
                    onChange={(e) => setstock_price(e.target.value)}
                  />
                </div>
                <div className="sub-container">
                  <label for="name">Net Stock Amount:</label>
                  <input
                    type="number"
                    id="total_stock_price"
                    name="total_stock_price"
                    placeholder="Rs"
                    value={total_stock_price}
                    onChange={(e) => settotal_stock_price(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <button
                className="change-password"
                // onClick={increaseStock}
                onClick={handleSubmit}
              >
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
                  <input
                    type="text"
                    id="mf_name"
                    name="mf_name"
                    value={mf_name}
                    onChange={(e) => setmf_name(e.target.value)}
                  />
                </div>
                <div className="sub-container">
                  <label for="phone"> Stock Price:</label>
                  <input
                    type="number"
                    id="mf-price"
                    name="mf-price"
                    placeholder="Rs"
                    value={mf_price}
                    onChange={(e) => setmf_price(e.target.value)}
                  />
                </div>
                <div className="sub-container">
                  <label for="name">Net MF Amount:</label>
                  <input
                    type="number"
                    id="total_mf_price"
                    name="total_mf_price"
                    placeholder="Rs"
                    value={total_mf_price}
                    onChange={(e) => settotal_mf_price(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <button
                className="change-password"
                // onClick={increaseMF}
                onClick={(e)=>{handleSubmit, totalprice}}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="sub-container buttonalignment">
            <button className="change-password" onClick={handleSubmit}>
              Save Changes
            </button>
            <button className="delete-account">Discard Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expendeture;
