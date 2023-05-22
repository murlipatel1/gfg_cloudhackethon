import React, { useState } from "react";
import "./plan.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";

const Plan = () => {
  const [Bike_amount, setBike_amount] = useState(""); // State for expected amount input
  const [Car_amount, setCar_amount] = useState(""); // State for loan amount input
  const [Home_amount, setHome_amount] = useState(""); // State for loan balance input
  const [Loan_with_interest, setLoan_with_interest] = useState(""); // State for loan period input

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a data object with the form values
    const data = {
      Bike_amount,
       Car_amount,
       Home_amount,
       Loan_with_interest
    };

    // Make the fetch request with the POST method
    fetch("http://localhost:5000/finance/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwt_token":localStorage.getItem("jwt_token")
      },
      body: JSON.stringify(data),
    })
      .then(async(response) => {
        let resp = response.json();
        console.log(resp)
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };


  return (
    <>
      <header>
        <Navbar active={"plan"} />
        <SideBar active={"plan"} />
      </header>
      <div className="body2p html1">
        <div className="containerp">
          <div className="ajubaju2 top2">
            <div className="calculatorp">
              <h2>🏍️Two-Wheeler</h2>
              <form>
                <div className="row">
                  <label htmlFor="expected-amount">Expected Amount:</label>
                  <input
                    type="number"
                    id="expected-amount"
                    name="expected-amount"
                    placeholder="Rs"
                    value={Bike_amount}
                    onChange={(e) => setBike_amount(e.target.value)}
                  />
                </div>
                <div className="row">
                  {/* <label htmlFor="result">Result:</label> */}
                  {/* <input type="number" id="result" name="result" disabled /> */}
                </div>
                {/* <button type="submit">Calculate</button> */}
              </form>
            </div>
            <div className="calculatorp">
              <h2>🚗Four-Wheeler</h2>
              <form>
                <div className="row">
                  <label htmlFor="expected-amount">Expected Amount:</label>
                  <input
                    type="number"
                    id="expected-amount"
                    name="expected-amount"
                    placeholder="Rs"
                    value={Car_amount}
                    onChange={(e) => setCar_amount(e.target.value)}
                  />
                </div>
                <div className="row">
                  {/* <label htmlFor="result">Result:</label> */}
                  {/* <input type="number" id="result" name="result" disabled /> */}
                </div>
                {/* <button type="submit">Calculate</button> */}
              </form>
            </div>
          </div>
          <div className="ajubaju2 top2">
            <div className="calculatorp hhome">
              <h2>🏠Home</h2>
              <form>
                <div className="row">
                  <label htmlFor="expected-amount">Expected Amount:</label>
                  <input
                    type="number"
                    id="expected-amount"
                    name="expected-amount"
                    placeholder="Rs"
                    value={Home_amount}
                    onChange={(e) => setHome_amount(e.target.value)}
                  />
                </div>
                <div className="row">
                  {/*  <label htmlFor="result">Result:</label> */}
                  {/* <input type="number" id="result" name="result" disabled /> */}
                </div>
                {/* <button type="submit">Calculate</button> */}
              </form>
            </div>
            <div className="calculatorp">
              <h2>🏦Loan with Interest</h2>
              <form>
                <div className="row">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Rs"
                    value={Loan_with_interest}
                    onChange={(e) => setLoan_with_interest(e.target.value)}
                  />
                </div>
                <div className="row">
                  <label htmlFor="balance">Balance:</label>
                  <input
                    type="number"
                    id="balance"
                    name="balance"
                    placeholder="Rs"
                  />
                </div>
                <div className="row">
                  <label htmlFor="period">Period:</label>
                  <input type="number" id="period" name="period" />
                </div>
                <div className="row">
                  {/* <label htmlFor="result">Result:</label> */}
                  {/* <input type="number" id="result" name="result" disabled /> */}
                </div>
                {/* <button type="submit">Calculate</button> */}
              </form>
            </div>
          </div>
          <div className="calculatorpp">
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Plan;
