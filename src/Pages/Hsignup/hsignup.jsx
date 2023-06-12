import React from "react";
import HospitalCover from "../../assets/coverHospital.png";

const Hsignup = () => {
  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title"> Sign Up</div>
          <div className="entries2 ">
            <form>
              <label className="hid">Hospital Name</label>
              <input
                type="text"
                id="hid"
                name="hid"
                required
                placeholder="Enter Details"
              />

              <label className="username">UserName</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Username"
              />

              <label className="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
              />
            </form>
          </div>
          <button className="SignUp">Sign Up</button>
        </div>
        <div className="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Hsignup;
