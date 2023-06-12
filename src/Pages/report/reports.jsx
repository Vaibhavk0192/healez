import React from "react";
import ReportsDetail from "../../components/Report/reportdetail";
import "./reports.css";
import Navbar from "../Navbar/navbar";

const Report = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div className="report-box">
        <div className="app__report-heading">
          <div className="app__head">All Reports</div>
          <div className="search__container">
            <input className="search__input" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="app__report-report_details">
          <ReportsDetail />
        </div>
      </div>
    </div>
  );
};

export default Report;
