import React, { useState } from "react";
import UserCover from "../../assets/userlogin.jpg";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useSolana } from "../../context/SolanaContext";

const Usignup4 = () => {
  const { state } = useLocation();
  const { userAccount2 } = state;
  const navigate = useNavigate();

  const { createUser } = useSolana();

  const [userAccount3, setUserAccount3] = useState(userAccount2);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setUserAccount3((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userAccount3);
  };

  const handleExitPage = () => {
    const day = new Date(userAccount3.dob).getDate();
    const month = new Date(userAccount3.dob).getMonth() + 1;
    const year = new Date(userAccount3.dob).getFullYear();

    userAccount3.day = day.toString();
    userAccount3.month = month.toString();
    userAccount3.year = year.toString();
    console.log(userAccount3);
    createUser(userAccount3);
  };

  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title">Insuarance Information</div>
          <div className="desc">
            "Health insurance is the cornerstone of well-being, ensuring access
            to quality care, safeguarding against financial burdens, and
            empowering individuals to prioritize their health without
            hesitation."
          </div>
          <div className="entries4">
            <form className="app__insuranceinfo-form">
              <label for="Weight">Name of the Provider</label>
              <input
                type="text"
                className="Weight"
                id="insuranceProviderName"
                name="insuranceProviderName"
                value={userAccount3.insuranceProviderName}
                onChange={inputsHandler}
                placeholder="Enter Details"
              />
              <label for="Weight">Policy No.</label>
              <input
                type="text"
                className="Weight"
                id="Weight"
                name="insurancePolicyNo"
                value={userAccount3.insurancePolicyNo}
                onChange={inputsHandler}
                placeholder="Enter Details"
              />

              <div className="combined">
                <div className="amount">
                  <label for="amount">Coverage Amt</label>
                  <input
                    type="text"
                    className="amount"
                    id="amount"
                    placeholder="Rs. xxxxx"
                    name="insuranceAmount"
                    value={userAccount3.insuranceAmount}
                    onChange={inputsHandler}
                  />
                </div>
                <div className="duration">
                  <label for="duration">Duration</label>
                  <input
                    type="text"
                    className="duration"
                    id="duration"
                    placeholder="In months"
                    name="insuranceDuration"
                    value={userAccount3.insuranceDuration}
                    onChange={inputsHandler}
                  />
                </div>
              </div>
              <label for="benefits">Benefits</label>
              <textarea
                id="benefits"
                rows="4"
                cols="50"
                name="insuranceBenifits"
                value={userAccount3.insuranceBenifits}
                onChange={inputsHandler}
              ></textarea>
            </form>
            <button className="next" onClick={handleExitPage}>
              Finish
            </button>
          </div>
        </div>
        <div className="Photo">
          <img src={UserCover} />
        </div>
      </div>
    </div>
  );
};

export default Usignup4;
