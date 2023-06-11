import React from "react";
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
import { Link } from "react-router-dom";
const Usignup3 = () => {
  function handleChange(event) {
    const { name, value } = event.target;
  }
  return (
    <div>
      <div class="Main2">
        <div class="EnterDetails">
          <div class="title">Family Information</div>
          <div class="desc">
            "Family health information is a precious gift that keeps on giving,
            guiding us towards a life of well-being and vitality."
          </div>
          <div class="entries4">
            <form className="app__familyinfo-form">
              <div class="combined">
                <div class="familyid">
                  <label for="familyid">Member User Id</label>
                  <input
                    type="text"
                    class="familyid"
                    id="familyid"
                    placeholder="Enter Details"
                  />
                </div>
                <div class="relation">
                  <label for="Relation">Relation</label>
                  <input
                    type="text"
                    class="Relation"
                    id="Relation"
                    placeholder="Enter Details"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="buttons">
            <Link to="/usignup4">
              <button class="next">Next</button>
            </Link>
            <button class="Add">Add</button>
          </div>
        </div>
        <div class="Photo">
          <img src={UserCover} />
        </div>
      </div>
    </div>
  );
};

export default Usignup3;
