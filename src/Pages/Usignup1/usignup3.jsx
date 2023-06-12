import React, { useState } from "react";
import UserCover from "../../assets/userlogin.jpg";

import { useNavigate, useLocation } from "react-router-dom";

const Usignup3 = () => {
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
    navigate("/usignup3", { replace: true, state: { userAccount2 } });
  };

  
  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title">Family Information</div>
          <div className="desc">
            "Family health information is a precious gift that keeps on giving,
            guiding us towards a life of well-being and vitality."
          </div>
          <div className="entries4">
            <form className="app__familyinfo-form">
              <div className="combined">
                <div className="familyid">
                  <label for="familyid">Member User Id</label>
                  <input
                    type="text"
                    className="familyid"
                    id="familyid"
                    placeholder="Enter Details"
                  />
                </div>
                <div className="relation">
                  <label for="Relation">Relation</label>
                  <input
                    type="text"
                    className="Relation"
                    id="Relation"
                    placeholder="Enter Details"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="buttons">
            <button className="next" onClick={handleExitPage}>
              Next
            </button>
            <button className="Add">Add</button>
          </div>
        </div>
        <div className="Photo">
          <img src={UserCover} />
        </div>
      </div>
    </div>
  );
};

export default Usignup3;
