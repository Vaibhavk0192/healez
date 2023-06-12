import React, { useState } from "react";
import UserCover from "../../assets/userlogin.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Usignup2 = () => {
  const { state } = useLocation();
  const { userAccount } = state;

  console.log(userAccount);

  if (!userAccount) navigate("/usignup1");

  const [userAccount2, setUserAccount2] = useState(userAccount);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setUserAccount2((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleExitPage = () => {
    console.log(userAccount);
    navigate("/usignup4", { replace: true, state: { userAccount2 } });
  };

  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title">User Information</div>
          <div className="entries4">
            <form className="app__userinfo-form">
              <label className="blood">Blood Group </label>
              <select
                id="blood"
                name="bloodGroup"
                value={userAccount2.bloodGroup}
                onChange={inputsHandler}
              >
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
                value={userAccount2.height}
                onChange={inputsHandler}
                type="text"
                className="height"
                id="height"
                placeholder="Enter Details"
              />

              <label for="Weight">Weight</label>
              <input
                name="weight"
                onChange={inputsHandler}
                type="text"
                className="Weight"
                id="Weight"
                placeholder="Enter Details"
              />
              <label className="diesease">Illness/Diesease</label>

              <textarea
                id="disease"
                name="preExistingConditions"
                rows="4"
                cols="50"
                value={userAccount2.preExistingConditions}
                onChange={inputsHandler}
              ></textarea>
              <label className="allergy">Allergies</label>

              <textarea
                id="allergy"
                name="allergies"
                rows="4"
                cols="50"
                value={userAccount2.allergies}
                onChange={inputsHandler}
              ></textarea>
            </form>
          </div>

          <button className="next" onClick={handleExitPage}>
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

export default Usignup2;
