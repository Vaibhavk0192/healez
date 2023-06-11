import React from 'react'
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
import { Link } from 'react-router-dom';

const Usignup1 = () => {
  return (
    <div>
      <div className="Main2">
<div className="EnterDetails">
  <div className="title">Sign Up</div>
  <div className="entries4">
    <div className="profilePhoto">
        <img src={Profile} alt="PP"/>
    </div>
    <form className='app__user-form'>
      <label for="uid">User Id*</label>
      <input type="text" className="uid" id="uid" placeholder="Enter Details"/>

      <label for="uname">Name*</label>
      <input type="text" className="uname" id="uname" placeholder="Enter Details"/>


        <label for="dob">DOB* </label>
        <input type="date" className="dob" id="dob" placeholder="Enter Details"/>
        <label className="gender">Gender* </label>
      
        <select id="gender" name="gender">
            <option value="select">Select</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Others</option>
          </select>
      <label for="contact">Contact No.*</label>
      <input type="contact" className="contact" id="contact" placeholder="Enter contact No."/>
    </form>
  </div>
  <Link to="/usignup2">
  <button className="next">Next</button>
  </Link>
</div>
<div className="Photo">
  <img src={UserCover}/>
</div>
</div>
    </div>
  )
}

export default Usignup1
