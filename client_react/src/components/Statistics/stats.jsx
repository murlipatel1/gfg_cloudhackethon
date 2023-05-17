// import React, { useState } from "react";
import "../Statistics/stats.css";
import SideBar from "../SideBar/SideBar";
import image from "./timeseriesgraph.png";
const Stats = () => {
  //   const [inputValue, setInputValue] = useState("");
  //   const [outputValue, setOutputValue] = useState("");

  //   const handleInputChange = (event) => {
  //     const value = event.target.value;
  //     setInputValue(value);
  //     setOutputValue(value * 10);
  //   };
  return (
    <>
      <SideBar active={"calc"} />
      <div className="body2c html2">
        <div className="containerc">
          <div className="ajubaju top3">
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <div className="row">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <div className="row">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="ajubaju">
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <div className="row">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <div className="row">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
