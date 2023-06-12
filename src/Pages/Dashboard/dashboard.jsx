import React from "react";
import "./dashboard.css";
import "../../App.css";
import Heart from "../../assets/heart.png";
import Hand from "../../assets/arm.png";
import Profile from "../../assets/woman.png";
import { MdMonitorWeight } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import ReportDetail from "../../components/Report/reportdetail";
import Navbar from "../Navbar/navbar";
import { useSolana } from "../../context/SolanaContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { wallet, user } = useSolana();

  const dob = new Date(
    parseInt(user?.year),
    parseInt(user?.month) - 1,
    parseInt(user?.day)
  );
  const age = Math.floor((new Date() - dob) / (1000 * 60 * 60 * 24 * 365));

  console.log(age);

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="app__dash">
        <div className="app__dash-box1">
          <div className="app__dash-heading_box">
            <div className="app__dash-Heading">
              Welcome, {user?.name}
              <span>!</span>
            </div>
            <div className="app__subhead">
              Have a nice day and take care, Here is your health activity.
            </div>
            <div className="app__dash-boxes">
              <div className="app__dash-bp">
                <div className="app__dash-bp_img">
                  <img src={Hand} alt="Hand-icon" />
                  <p>
                    110 <span>/</span> 75 <span>mmHg</span>
                  </p>
                </div>
                <p className="app__subhead">Blood Pressure</p>
              </div>
              <div className="app__dash-heart">
                <div className="app__dash-heart_img">
                  <img src={Heart} alt="Hand-icon" />
                  <p>
                    110<span>bpm</span>
                  </p>
                </div>
                <p className="app__subhead">Heart Rate</p>
              </div>
            </div>
            <div className="app__head">Pre-existing Conditions & Allergies</div>
            <div className="app__dash-allergy_box">You're Healthy</div>
          </div>
          <div className="app__dash-profile_box">
            <div className="app__dash-profileIcon">
              <img src={Profile} alt="profile-icon" />
            </div>
            <div className="app__head">VaibhavKapoor0192</div>
            <div className="app__subhead_bold">20 years</div>
            <div className="app__subhead_bold">+91-9823984923</div>
            <div className="app__dash-Person_info_box">
              <div className="app__dash-Person_info">
                <MdBloodtype size={45} />
                <p className="app__subhead" style={{ fontWeight: "bold" }}>
                  Blood
                </p>
                <h4>{user?.bloodGroup}</h4>
              </div>
              <div className="app__dash-Person_info">
                <GiBodyHeight size={45} />
                <p className="app__subhead" style={{ fontWeight: "bold" }}>
                  Height
                </p>
                <h4>
                  {user?.height} <span>cm</span>
                </h4>
              </div>
              <div className="app__dash-Person_info">
                <MdMonitorWeight size={45} />
                <p className="app__subhead" style={{ fontWeight: "bold" }}>
                  Weight
                </p>
                <h4>
                  {user?.weight} <span>Kg</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="app__dash-box2">
          <div className="app__head">Recent Admission</div>
          <div className="app__dash-report">
            <ReportDetail />
          </div>
        </div>
      </div>
    </div>
  );
}
