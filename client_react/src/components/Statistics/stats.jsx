// import React, { useState } from "react";
import "../Statistics/stats.css";
import SideBar from "../SideBar/SideBar";
import image from "./timeseriesgraph.png";
import Navbar from "../Navbar/navbar";
import { ResponsiveContainer,BarChart,Bar,Tooltip,CartesianGrid,XAxis,YAxis
  ,Legend, LineChart, Line } from 'recharts';

  const productData = [
    {
        product : "AAP",
        stock : 90,
        date : 75
    },
    {
        product : "TATA",
        stock : 50,
        date : 90
    },
    {
        product : "HDFC",
        stock : 69,
        date : 30
    },
    {
        product : "SBI",
        stock : 30,
        date : 55
    },
    {
        product : "Infosys",
        stock : 90,
        date : 75
    },
]

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
    <header>
      <Navbar active={"stats"} />
      <SideBar active={"stats"} />
      </header>
      <div className="body2c html2">
        <div className="containerc">
          <div className="ajubaju top3">
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <h2>Bar-chart</h2>
              {/* <div className="row">
                <img src={image} alt="" />
              </div> */}
              <div className="Bar-chart">
                    {/* <p>Bar Chart</p> */}
                    <ResponsiveContainer width="95%" aspect={3}>
                        <BarChart 
                          width = {800}
                          height = {400}
                          data = {productData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity="0.7" />
                        <XAxis dataKey="product"/>
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor:'white' }}/>
                        <Legend />
                            <Bar dataKey="stock" fill="rgba(59, 135, 255,0.5)" />
                            <Bar dataKey="date" fill="rgba(221, 189, 255,0.5)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="calculatorc">
              <h2>Data Visualization</h2>
              <h2>Line-Chart</h2>
              {/* <div className="row">
                <img src={image} alt="" />
              </div> */}
              <div className="line-chart">
                    {/* <p>
                        Line Chart
                    </p> */}
                    <div>
                    <ResponsiveContainer width="7+0%" aspect={3}>
                    <LineChart data={productData} width = {800} height = {400} margin={{top:15 , right: 30
                     }}>
                        <CartesianGrid strokeDasharray={5} vertical={false} />
                        <XAxis dataKey="product"
                        />
                            <Line  dataKey="stock" stroke="green" 
                            />
                            <Line dataKey="date" stroke="cyan"/>
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor:'#f1f1f1'}} />
                        <Legend />
                    </LineChart>
        </ResponsiveContainer>
                    </div>
                     
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
