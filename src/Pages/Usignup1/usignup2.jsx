import React from "react";
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
import { Link } from "react-router-dom";

const Usignup2 = () => {
  function handleChange(event) {
    const { name, value } = event.target;
  }
  return (
    <div>
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title">User Information</div>
          <div class="entries4">
            <form className="app__userinfo-form">
              <label class="blood">Blood Group </label>
              <select id="blood" name="blood" onChange={handleChange}>
                <option value="select">Select</option>
                <option value="a+">A+</option>
                <option value="b+">B+</option>
                <option value="a-">A-</option>
                <option value="b-">B-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
              </select>
              <label for="height">Height</label>
              <input
                name="height"
                onChange={handleChange}
                type="text"
                class="height"
                id="height"
                placeholder="Enter Details"
              />

              <label for="Weight">Weight</label>
              <input
                name="weight"
                onChange={handleChange}
                type="text"
                class="Weight"
                id="Weight"
                placeholder="Enter Details"
              />
              <label class="diesease">Illness/Diesease</label>

              <textarea
                id="disease"
                name="disease"
                rows="4"
                cols="50"
                onChange={handleChange}
              ></textarea>
              <label class="allergy">Allergies</label>

              <textarea
                id="allergy"
                name="allergy"
                rows="4"
                cols="50"
                onChange={handleChange}
              ></textarea>
            </form>
          </div>

          <Link to="/usignup3">
            <button class="next">Next</button>
          </Link>
        </div>
        <div class="Photo">
          <img src={UserCover} />
        </div>
      </div>
    </div>
  );
};

export default Usignup2;
