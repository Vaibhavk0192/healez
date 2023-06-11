import React from "react";
import "./reportdetail.css";
const ReportsDetail = () => {
  return (
    <div className="app__report-box">
      <div className="app__reports-heading">
        <p className="app__subhead_bold">Time</p>
        <p className="app__subhead_bold">Date</p>
        <p className="app__subhead_bold">Name of hospital</p>
        <p className="app__subhead_bold">Department</p>
        <p className="app__subhead_bold">Trement type</p>
        <p className="app__subhead_bold">Description</p>
      </div>
      <div className="app__reports">
        <div>
          <p className="app__subhead_bold app__reports-text">17:00</p>
        </div>
        <div>
          <p className="app__subhead_bold app__reports-text">19/02/2022</p>
        </div>
        <div>
          <p className="app__subhead_bold app__reports-text">Apollo Hospital</p>
        </div>
        <div>
          <p className="app__subhead_bold app__reports-text">ENT</p>
        </div>
        <div>
          <p className="app__subhead_bold app__reports-text">Vaccination</p>
        </div>
        <div>
          <p className="app__subhead_bold app__reports-text">   desc iptiondescripti scription desc rip ndes cription description</p>
        </div>
      </div>
    </div>
  );
};

export default ReportsDetail;
