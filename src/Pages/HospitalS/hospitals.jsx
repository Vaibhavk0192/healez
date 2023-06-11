import React from "react";
import "./hospitals.css";
import HospitalCover from "../../assets/coverHospital.png";
import UserIcon from "../../assets/user.png";
import HospitalIcon from "../../assets/buildings.png";
import HospitalIcon2 from "../../assets/buildingsb.png";

const Hospitals = () => {
  return (
    <div className="">
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title">Login</div>
          <div class="entries3">
            <div class="UserChoice">
              <div class="Uchoice">
                <img src={UserIcon} class="icon" />
                <a href="/" class="button">
                  User Login
                </a>
              </div>
              <div class="hchoice">
                <img src={HospitalIcon2} class="icon" />
                <a href="/" class="button">
                  Hospital Login
                </a>
              </div>
            </div>
            <form>
              <label for="hid">UserName</label>
              <input
                type="text"
                class="hid"
                id="hid"
                placeholder="Enter your user Id"
              />
              <br />
              <label for="password">Password</label>
              <input
                type="password"
                class="password"
                id="password"
                placeholder="Enter OTP"
              />
            </form>
          </div>
          <button class="SignIn">Login</button>
          <div class="need">
            {" "}
            Need an Account?
            <a href="/pages/hospitalSignIn.html">SignUp</a>
          </div>
        </div>
        <div class="Photo">
          <img src={HospitalCover} alt="cover photo" />
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
