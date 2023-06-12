import React, { useState } from "react";
import UserCover from "../../assets/userlogin.jpg";
import Profile from "../../assets/woman.png";
import {  useNavigate } from "react-router-dom";

const Usignup1 = () => {
  const [userAccount, setUserAccount] = useState({
    name: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    email: "",
    bloodGroup: "",
    height: "",
    weight: "",
    preExistingConditions: "",
    preExistingAllergies: "",
    insuranceProviderName: "",
    insurancePolicyNo: "",
    insuranceAmount: "",
    insuranceDuration: "",
    insuranceBenifits: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setUserAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(userAccount);
  };

  const navigate = useNavigate();

  const handleExitPage = () => {
    console.log(userAccount);
    navigate("/usignup2", { replace: true, state: { userAccount } });
  };

  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title">Sign Up</div>
          <div className="entries4">
            <div className="profilePhoto">
              <img src={Profile} alt="PP" />
            </div>
            <form className="app__user-form">
              <label for="uname">Name*</label>
              <input
                type="text"
                name="name"
                onChange={inputsHandler}
                value={userAccount.name}
                className="uname"
                id="uname"
                placeholder="Enter Details"
              />

              <label for="uname">Email*</label>
              <input
                type="email"
                name="email"
                onChange={inputsHandler}
                value={userAccount.email}
                className="uname"
                id="uname"
                placeholder="Enter Details"
              />

              <label for="dob">DOB* </label>
              <input
                type="date"
                name="dob"
                onChange={inputsHandler}
                value={userAccount.dob}
                className="dob"
                id="dob"
                placeholder="Enter Details"
              />
              <label className="gender">Gender* </label>

              <select
                id="gender"
                name="gender"
                value={userAccount.gender}
                onChange={inputsHandler}
              >
                <option value="select">Select</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Others</option>
              </select>
              <label for="contact">Contact No.*</label>
              <input
                type="contact"
                name="phoneNumber"
                value={userAccount.phoneNumber}
                onChange={inputsHandler}
                className="contact"
                id="contact"
                placeholder="Enter contact No."
              />
            </form>
          </div>

          <button type="button" className="next" onClick={handleExitPage}>
            Next
          </button>
        </div>
        <div className="Photo">
          <img src={UserCover} />
        </div>
      </div>
    </div>
  );
};

export default Usignup1;
