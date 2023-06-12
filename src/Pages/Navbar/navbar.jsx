import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { AiFillHome, AiOutlineFileProtect } from "react-icons/ai";
import { BsFillFileTextFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSolana } from "../../context/SolanaContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  return (
    <div className="app__navbar-box">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
        <h5>Heal.ez</h5>
      </div>
      <div className="app__navbar-icons">
        <Link to="/">
          <div className="app__navabr-icon">
            <AiFillHome size={30} color="#3F8AFE" className="icon" />
          </div>
          <div className="app__navabr-icon">
            <p>Home</p>
          </div>
        </Link>
        <Link to="/report">
          <div className="app__navabr-icon">
            <BsFillFileTextFill size={30} color="#3F8AFE" className="icon" />
          </div>
          <div className="app__navabr-icon">
            <p>Reports</p>
          </div>
        </Link>
        <Link to="/family">
          <div className="app__navabr-icon">
            <MdFamilyRestroom size={30} color="#3F8AFE" className="icon" />
          </div>
          <div className="app__navabr-icon">
            <p>Family</p>
          </div>
        </Link>

        <Link to="/insurance">
          <div className="app__navabr-icon">
            <AiOutlineFileProtect size={30} color="#3F8AFE" className="icon" />
          </div>
          <div className="app__navabr-icon">
            <p>Insurance</p>
          </div>
        </Link>
      </div>
      <div className="app__navbar-logout">
        <BiLogOut size={30} color="#3F8AFE" className="icon" />
        <div className="app__navabr-icon">
          <p>Log Out</p>
        </div>
      </div>
      <div>
        <WalletMultiButton />
      </div>
    </div>
  );
}
