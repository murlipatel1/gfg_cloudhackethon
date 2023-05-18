import React from "react";
import "./plan.css";
import SideBar from "../SideBar/SideBar";

const Plan = () => {
  return (
    <>
      <SideBar active={"plan"} />
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
                  <input type="number" id="amount" name="amount" />
                </div>
                <div className="row">
                  <label htmlFor="balance">Balance:</label>
                  <input type="number" id="balance" name="balance" />
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
          <div className="calculatorpp" >
          <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
