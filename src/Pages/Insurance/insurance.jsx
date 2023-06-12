import React from "react";
import "./insurance.css";
import Navbar from "../Navbar/navbar";

const Insurance = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="app__insurance-box">
        <div className="app__head app__family-heading">My Insurance</div>
        <div className="Box">
          <div className="heading">
            Provider Name:
            <span className="input">LIC Life Insurance</span>
          </div>
          <div className="heading">
            Policy No. :<span className="input">12345645</span>
          </div>
          <div className="heading">
            Coverage Amt:
            <span className="input">Rs. 50 lakhs</span>
          </div>
          <div className="heading ">
            Duration:
            <span className="input">lifetime</span>
          </div>
          <div className="heading">
            Benefits:
            <span className="input">
              <span className="multiple">
                <li>cancerjkndkbca</li>
                <li>cancjdkbaer</li>
              </span>
              <span className="multiple">
                <li>cancer kbhwb</li>
                <li>cancerjckaj</li>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
