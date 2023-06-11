import React from "react";
import "./hospital.css";
import FamilyCard from "../../components/familyCard/familycard";

const Hospital = () => {
  return (
    <div className="app__hospital-box">
      <div className="main">
        <div className="Entry">
          <div className="user">
            <form className="app__hospital-input app__subhead">
              <input type="radio" name="idname" value="userid" />
              <label for="userid">User Id</label>
              <input type="radio" name="idname" value="contact" />
              <label for="contact">Contact No.</label>
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
  );
};

export default Hospital;
