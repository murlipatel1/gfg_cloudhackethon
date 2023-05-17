import React, { useState } from "react";
import "../Finance Calculator/calc.css";
import SideBar from "../SideBar/SideBar";

const Calc = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setOutputValue(value * 10);
  };
  return (
    <>
      <SideBar active={"calc"} />
      <div className="body2c html2">
        <div className="containerc">
          <div className="ajubaju top3">
            <div className="calculatorc">
              <h2>🏍️Two-Wheeler</h2>
              <form>
                <div className="row">
                  <label htmlFor="expected-amount">Expected Amount:</label>
                  <input
                    type="number"
                    id="expected-amount"
                    name="expected-amount"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row">
                  <label htmlFor="result">Result:</label>
                  <input
                    type="number"
                    id="result"
                    name="result"
                    value={outputValue}
                  />
                </div>
                <button type="submit" className="center">
                  Calculate
                </button>
              </form>
            </div>
            <div className="calculatorc">
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
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" disabled />
                </div>
                <button type="submit" className="center">
                  Calculate
                </button>
              </form>
            </div>
          </div>
          <div className="ajubaju">
            <div className="calculatorc">
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
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" disabled />
                </div>
                <button type="submit">Calculate</button>
              </form>
            </div>
            <div className="calculatorc">
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
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" disabled />
                </div>
                <button type="submit">Calculate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;
