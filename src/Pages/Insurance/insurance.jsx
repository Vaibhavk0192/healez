import React from "react";
import "./insurance.css";
import Navbar from "../Navbar/navbar";
import { useSolana } from "../../context/SolanaContext";

const Insurance = () => {
  const { user } = useSolana();

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="app__insurance-box">
        <div className="app__head app__family-heading">My Insurance</div>
        <div className="Box">
          <div className="heading">
            Provider Name:{" "}
            <span className="input">{user?.insuranceProviderName}</span>
          </div>
          <div className="heading">
            Policy No.: <span className="input">{user?.insurancePolicyNo}</span>
          </div>
          <div className="heading">
            Coverage Amt:{" "}
            <span className="input">Rs. {user?.insuranceCoverageAmt}</span>
          </div>
          <div className="heading ">
            Duration: <span className="input">{user?.insuranceDuration}</span>
          </div>
          <div className="heading">
            Benefits: <span className="input">{user?.insuranceBenifits}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
