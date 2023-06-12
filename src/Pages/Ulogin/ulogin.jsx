import React from "react";
import "./ulogin.css";
import HospitalCover from "../../assets/coverHospital.png";
import UserIcon from "../../assets/user.png";
import HospitalIcon from "../../assets/buildings.png";
import HospitalIcon2 from "../../assets/buildingsb.png";
import { Link, Navigate } from "react-router-dom";
import { useSolana } from "../../context/SolanaContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./wallet.css";

const Ulogin = () => {
  const { user, createUser } = useSolana();

  // if (user == false) return <Navigate to={"/usignup1"} />;
  // if (user == "loading") return <>Loading</>;
  // else if (user) return <Navigate to={"/"} />;

  return (
    <div>
      <div className="Main2">
        <div className="EnterDetails">
          <div className="title">Login</div>
          <div className="entries3">
            <div className="UserChoice">
              <div className="uchoice">
                <img src={UserIcon} className="userIcon" />
                <Link to={"/ulogin"}>User Login</Link>
              </div>
              <div className="Hchoice">
                <img src={HospitalIcon} className="icon" />
                <Link to={"/hlogin"}>Hospital Login</Link>
              </div>
            </div>
            <div className="wallet-button">
              <span>Your Wallet:</span> <WalletMultiButton />
            </div>
          </div>

          <button className="login">Login</button>
          <div className="need">
            Need a User Id?
            <a href="">SignUp</a>
          </div>
        </div>
        <div className="Photo">
          <img src={HospitalCover} />
        </div>
      </div>
    </div>
  );
};

export default Ulogin;
