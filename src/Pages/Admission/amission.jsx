import React from "react";
import HospitalCover from "../../assets/coverHospital.png";
const Admission = () => {
  return (
    <div>
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title"> Add Admission</div>
          <div class="desc">"Enter the details of the patient"</div>
          <div class="entries app__admission-form_box">
            <form>
              <label class="userid">User Id/Contact No.</label>
              <input
                type="text"
                id="userid"
                name="userid"
                required
                placeholder="Enter Details"
              />

              <label class="doctorname">Doctor Name</label>
              <input
                type="text"
                id="doctorname"
                name="doctorname"
                required
                placeholder="Enter doctor name"
              />

              <label class="Department">Department</label>
              <input
                type="text"
                id="Department"
                name="Department"
                required
                placeholder="Enter Department"
              />

              <label class="Type">Type</label>
              <select id="type" name="type">
                <option value="select">--Select--</option>
                <option value="Checkup">Checkup</option>
                <option value="vaccination">Vaccination</option>
                <option value="Surgery">Surgery</option>
              </select>

              <label class="description">Description/Prescription</label>

              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
              ></textarea>
            </form>
          </div>
          <button class="Add">Add</button>
        </div>
        <div class="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Admission;
