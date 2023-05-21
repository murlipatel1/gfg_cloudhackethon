import React, { useState } from "react";
import "../Finance Calculator/calc.css";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/navbar";

const Calc = () => {
  const [bikePrice, setBikePrice] = useState('');
  const [bikeemi, setbikeEMI] = useState('');
  const [carPrice, setcarPrice] = useState('');
  const [caremi, setcarEMI] = useState('');

  const calculatebikeEMI = (e) => {
    e.preventDefault()
    const interestRatebike = 8
    const principle = parseFloat(bikePrice);
    const rate = parseFloat(interestRatebike) / 100 / 12;
    const months = 24;
    const emiAmount = (principle * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    setbikeEMI(emiAmount.toFixed(2));
  };

  const calculatecarEMI = (e) => {
    e.preventDefault()
    const interestRatecar =9
    const principle = parseFloat(carPrice);
    const rate = parseFloat(interestRatecar) / 100 / 12;
    const months = 24;
    const emiAmount = (principle * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    setcarEMI(emiAmount.toFixed(2));
  };

  const [hPrice, sethPrice] = useState('');
  const [hemi, sethEMI] = useState('');
  const calculatehEMI = (e) => {
    e.preventDefault()
    const interestRatecar =9.6
    const principle = parseFloat(hPrice);
    const rate = parseFloat(interestRatecar) / 100 / 12;
    const months = 24;
    const emiAmount = (principle * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    sethEMI(emiAmount.toFixed(2));
  };


  const [homePrice, sethomePrice] = useState('');
  const [homeemi, sethomeEMI] = useState('');
  const [interestRateHome, setinterestRateHome] = useState('');
  const [monthshome, setmonthshome] = useState('');
  const calculateHomeEMI = (e) => {
    e.preventDefault()
    // const interestRateHome=9
    const principle = parseFloat(homePrice);
    const rate = parseFloat(interestRateHome) / 100 / 12;
    // const months = 24;
    const emiAmount = (principle * rate * Math.pow(1 + rate, monthshome)) / (Math.pow(1 + rate, monthshome) - 1);
    sethomeEMI(emiAmount.toFixed(2));
  };

  return (
    <>
    <header>
      <Navbar active={"calc"} />
      <SideBar active={"calc"} />
      </header>
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
                    placeholder="Rs"
                    value={bikePrice}
                    onChange={(e)=>{setBikePrice(e.target.value)}}
                  />
                </div>
                <div className="row">
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" value={bikeemi} disabled />
                  {/* <input
                    type="number"
                    id="result"
                    name="result"
                    value={outputValue}
                  /> */}
                </div>
                <button type="submit" className="center" onClick={calculatebikeEMI}>
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
                    placeholder="Rs"
                    value={carPrice}
                    onChange={(e)=>{setcarPrice(e.target.value)}}
                  />
                </div>
                <div className="row">
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" value={caremi} disabled />
                </div>
                <button type="submit" className="center" onClick={calculatecarEMI}>
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
                    placeholder="Rs"
                    value={hPrice} onChange={(e)=>{sethPrice(e.target.value)}}
                  />
                </div>
                <div className="row">
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" value={hemi}  disabled />
                </div>
                <button type="submit" onClick={calculatehEMI}>Calculate</button>
              </form>
            </div>
            <div className="calculatorc">
              <h2>🏦Loan with Interest</h2>
              <form>
                <div className="row">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Rs"
                    value={homePrice} onChange={(e)=>{sethomePrice(e.target.value)}}
                  />
                </div>
                <div className="row">
                  <label htmlFor="balance">Interest:</label>
                  <input
                    type="number"
                    id="balance"
                    name="interest"
                    placeholder="%"
                    value={interestRateHome} onChange={(e)=>{setinterestRateHome(e.target.value)}}
                  />
                </div>
                <div className="row">
                  <label htmlFor="period">Period:</label>
                  <input type="number" id="period" name="period" placeholder="Month" value={monthshome} onChange={(e)=>{setmonthshome(e.target.value)}} />
                </div>
                <div className="row">
                  <label htmlFor="result">Result:</label>
                  <input type="number" id="result" name="result" value={homeemi} disabled />
                </div>
                <button type="submit" onClick={calculateHomeEMI}>Calculate</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;
