import React from "react";
import "./hospital.css";
import FamilyCard from "../../components/familyCard/familycard";
import Navbar from "../Navbar/navbar";

const Hospital = () => {
  return (
    <div style={{ display: "flex" }}>
    <Navbar />
    <div className="app__hospital-box">
      <div className="main">
        <div className="Entry">
          <div className="user">
          <div className="app__subhead verfy-text">User Id</div>
          <form action="" className="app__hospital-input">
                <input
                  type="text"
                  placeholder="Enter details" 
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter details'"
                />
              </form>
          </div>
          <div className="verify">
            <div className="app__subhead verfy-text">Verification</div>
            <div className="get">
              <form action="" className="app__hospita-input">
                <input
                  type="text"
                  placeholder="Enter details" 
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter details'"
                />
              </form>
              <button className="getbutton">Get</button>
            </div>
          </div>
        </div>
        <div className="submitButton">
          <button className="submit">Submit</button>
        </div>
      </div>  
      <div className="app__hospital-box2">
        <FamilyCard />
        <FamilyCard />
        <FamilyCard />
        <FamilyCard />
      </div>
    </div>
    </div>
  );
};

export default Hospital;
