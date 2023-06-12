import React from "react";
import "./hospitals.css";
import HospitalCover from "../../assets/coverHospital.png";
import UserIcon from "../../assets/user.png";
import HospitalIcon from "../../assets/buildings.png";
import HospitalIcon2 from "../../assets/buildingsb.png";
import { Link, Navigate } from "react-router-dom";
import { useSolana } from "../../context/SolanaContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Hospitals = () => {
  const { user } = useSolana();

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
              <div className="Uchoice">
                <img src={UserIcon} className="icon" />
                <Link to={"/ulogin"}>User Login</Link>
              </div>
              <div className="hchoice">
                <img src={HospitalIcon2} className="icon" />
                <Link to={"/hlogin"} className="button">
                  Hospital Login
                </Link>
              </div>
            </div>
            <div className="wallet-button">
              <WalletMultiButton />
            </div>
          </div>
          <button className="SignIn">Login</button>
          <div className="need">
            Need an Account?
            <a href="/pages/hospitalSignIn.html">SignUp</a>
          </div>
        </div>
        <div className="Photo">
          <img src={HospitalCover} alt="cover photo" />
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
