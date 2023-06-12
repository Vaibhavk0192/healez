import React from "react";
import HospitalCover from "../../assets/coverHospital.png";
const Admission = () => {
  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title"> Add Admission</div>
          <div className="desc">"Enter the details of the patient"</div>
          <div className="entries app__admission-form_box">
            <form>
              <label className="userid">User Id/Contact No.</label>
              <input
                type="text"
                id="userid"
                name="userid"
                required
                placeholder="Enter Details"
              />

              <label className="doctorname">Doctor Name</label>
              <input
                type="text"
                id="doctorname"
                name="doctorname"
                required
                placeholder="Enter doctor name"
              />

              <label className="Department">Department</label>
              <input
                type="text"
                id="Department"
                name="Department"
                required
                placeholder="Enter Department"
              />

              <label className="Type">Type</label>
              <select id="type" name="type">
                <option value="select">--Select--</option>
                <option value="Checkup">Checkup</option>
                <option value="vaccination">Vaccination</option>
                <option value="Surgery">Surgery</option>
              </select>

              <label className="description">Description/Prescription</label>

              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
              ></textarea>
            </form>
          </div>
          <button className="Add">Add</button>
        </div>
        <div className="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Admission;
