import React from 'react'
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
const Usignup1 = () => {
  return (
    <div>
      <div class="Main2">
<div class="EnterDetails">
  <div class="title">Sign Up</div>
  <div class="entries4">
    <div class="profilePhoto">
        <img src={Profile} alt="PP"/>
    </div>
    <form className='app__user-form'>
      <label for="uid">User Id*</label>
      <input type="text" class="uid" id="uid" placeholder="Enter Details"/>

      <label for="uname">Name*</label>
      <input type="text" class="uname" id="uname" placeholder="Enter Details"/>


        <label for="dob">DOB* </label>
        <input type="date" class="dob" id="dob" placeholder="Enter Details"/>
        <label class="gender">Gender* </label>
      
        <select id="gender" name="gender">
            <option value="select">Select</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Others</option>
          </select>
      <label for="contact">Contact No.*</label>
      <input type="contact" class="contact" id="contact" placeholder="Enter contact No."/>
    </form>
  </div>
  
  <button class="next">Next</button>
</div>
<div class="Photo">
  <img src={UserCover}/>
</div>
</div>
    </div>
  )
}

export default Usignup1
