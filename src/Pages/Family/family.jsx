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
        <div className="Box">
          <div className="app__user">
            Username
            <img className="profile" src={Profile} alt="profile pic" />
          </div>
          <div className="heading">
            Name:
            <span className="input"> Lata Gupta</span>
          </div>
          <div className="heading">
            Relation:
            <span className="input"> Mother</span>
          </div>
          <div className="ageContact">
            <div className="heading">
              Age:
              <span className="input"> 19 years</span>
            </div>
            <div className="heading ">
              Contact:
              <span className="input"> 9898989898</span>
            </div>
          </div>
          <div className="heading">
            Blood Group:
            <span className="input"> B+</span>
          </div>
          <div className="heading">
            Disease:
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

export default Family;
