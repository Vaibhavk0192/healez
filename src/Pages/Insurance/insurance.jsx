import React from "react";
import "./insurance.css";
import Navbar from "../Navbar/navbar";

const Insurance = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="app__insurance-box">
        <div className="app__head app__family-heading">My Insurance</div>
        <div class="Box">
          <div class="heading">
            Provider Name:
            <span class="input">LIC Life Insurance</span>
          </div>
          <div class="heading">
            Policy No. :<span class="input">12345645</span>
          </div>
          <div class="heading">
            Coverage Amt:
            <span class="input">Rs. 50 lakhs</span>
          </div>
          <div class="heading ">
            Duration:
            <span class="input">lifetime</span>
          </div>
          <div class="heading">
            Benefits:
            <span class="input">
              <span class="multiple">
                <li>cancerjkndkbca</li>
                <li>cancjdkbaer</li>
              </span>
              <span class="multiple">
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
