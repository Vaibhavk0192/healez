import React from "react";
import "./familycard.css";
import Woman from "../../assets/woman.png";

const FamilyCard = () => {
  return (
    <div className="app__fcard-box">
      <div className="app__fcard-img">
        <img src={Woman} alt="" />
      </div>
      <div className="app__fcard-details">
        <div className="app__head">Vaibbhav0192</div>
        <div className="app__subhead" style={{ fontWeight: "bold" }}>
          Vaibhav Kapoor
        </div>
        <div className="app__subhead" style={{ fontWeight: "bold" }}>
          +91-9815992941
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;
