import React from "react";
import "./Waiting.css";
import image from "../../assets/Images/image";
import { NavLink} from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

function Waiting() {
  return (
    <>
      <div className="home-container">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>
      <HomeNavbar />
      <div className="home-main-content">
        

        <div className="waiting">
            <h1>Register Successfully!</h1>
            <h3 className="waiting-content">Your account isnt approved yet, please check later or contact your teacher</h3>
        </div>
      
      </div>
     
      </>
  );
}

export default Waiting;
