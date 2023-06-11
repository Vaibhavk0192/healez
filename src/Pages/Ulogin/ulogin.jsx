import React from "react";
import "./ulogin.css";
import HospitalCover from "../../assets/coverHospital.png";
import UserIcon from "../../assets/user.png";
import HospitalIcon from "../../assets/buildings.png";
import HospitalIcon2 from "../../assets/buildingsb.png";
import { Link } from "react-router-dom";

const Ulogin = () => {
  return (
    <div>
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title">Login</div>
          <div class="entries3">
            <div class="UserChoice">
              <div class="uchoice">
                <img src={UserIcon} className="userIcon" />
                <Link to="/ulogin">User Login</Link>
              </div>
              <div class="Hchoice">
                <img src={HospitalIcon} class="icon" />
                <a href="/pages/hospitalLogin.html" class="button">
                  Hospital Login
                </a>
              </div>
            </div>
            <form>
              <label for="uid">User Id/ Contact No.</label>
              <input
                type="text"
                class="uid"
                id="uid"
                placeholder="Enter Details"
              />
              <br />
              <label for="OTP">Verification</label>
              <div class="getOTP">Get OTP</div>
              <input type="OTP" class="OTP" id="OTP" placeholder="Enter OTP" />
            </form>
          </div>

          <button class="login">Login</button>
          <div class="need">
            {" "}
            Need a User Id?
            <a href="">SignUp</a>
          </div>
        </div>
        <div class="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Ulogin;
