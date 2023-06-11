import React from 'react'
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
import { Link } from "react-router-dom";
const Usignup4 = () => {
  return (
    <div>
    <div class="Main2">
      <div class="EnterDetails">
        <div class="title">Insuarance Information</div>
        <div class="desc">
          "Health insurance is the cornerstone of well-being, ensuring access
          to quality care, safeguarding against financial burdens, and
          empowering individuals to prioritize their health without
          hesitation."
        </div>
        <div class="entries4">
          <form className="app__insuranceinfo-form">
            <label for="Weight">Name of the Provider</label>
            <input
              type="text"
              class="Weight"
              id="Weight"
              placeholder="Enter Details"
            />
            <label for="Weight">Policy No.</label>
            <input
              type="text"
              class="Weight"
              id="Weight"
              placeholder="Enter Details"
            />

            <div class="combined">
              <div class="amount">
                <label for="amount">Coverage Amt</label>
                <input
                  type="text"
                  class="amount"
                  id="amount"
                  placeholder="Rs. xxxxx"
                />
              </div>
              <div class="duration">
                <label for="duration">Duration</label>
                <input
                  type="text"
                  class="duration"
                  id="duration"
                  placeholder="In months"
                />
              </div>
            </div>
            <label for="benefits">Benefits</label>
            <textarea id="benefits" name="benefits" rows="4" cols="50"></textarea>
          </form>
          <Link to="/">
<button class="next">Finish</button>
</Link>
      </div>
      </div>
      <div class="Photo">
        <img src={UserCover} />
      </div>
    </div>
  </div>
  )
}

export default Usignup4
