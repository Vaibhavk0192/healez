import React from "react";
import HospitalCover from "../../assets/coverHospital.png";

const Hsignup = () => {
  return (
    <div>
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title"> Sign Up</div>
          <div class="entries2 ">
            <form>
              <label class="hid">Hospital Name</label>
              <input
                type="text"
                id="hid"
                name="hid"
                required
                placeholder="Enter Details"
              />

              <label class="username">UserName</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Username"
              />

              <label class="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
              />
            </form>
          </div>
          <button class="SignUp">Sign Up</button>
        </div>
        <div class="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Hsignup;
