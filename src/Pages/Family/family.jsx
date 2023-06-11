import React from "react";
import Profile from "../../assets/woman.png";
import "./family.css";
import Navbar from "../Navbar/navbar";


const Family = () => {
  return (
    <div style={{ display: "flex" }}>
    <Navbar />
    <div className="app__family-box">
      <div className="app__head app__family-heading">My Family</div>
      <div class="Box">
        <div class="app__user">
          Username
          <img class="profile" src={Profile} alt="profile pic" />
        </div>
        <div class="heading">
          Name: 
          <span class="input"> Lata Gupta</span>
        </div>
        <div class="heading">
          Relation:
          <span class="input"> Mother</span>
        </div>
        <div class="ageContact">
          <div class="heading">
            Age: 
            <span class="input"> 19 years</span>
          </div>
          <div class="heading ">
            Contact: 
            <span class="input"> 9898989898</span>
          </div>
        </div>
        <div class="heading">
          Blood Group: 
          <span class="input"> B+</span>
        </div>
        <div class="heading">
          Disease: 
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

export default Family;
