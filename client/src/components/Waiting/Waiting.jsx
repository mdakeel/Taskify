import React from "react";
import "./Waiting.css";
import image from "../../assets/Images/image";
import { NavLink} from "react-router-dom";

function Waiting() {
  return (
    <>
      <div className="home-container">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>
      <div className="home-main-content">
        <div className="home-navbar">
                    <div className="home-logo">
            <img src={image.taskify} alt="taskify" />
          </div>
          <div className="home-nav_items">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/Studentlogin">login</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="waiting">
            <h1>Register Successfully!</h1>
            <h3 className="waiting-content">Your account isnt approved yet, please check later or contact your teacher</h3>
        </div>
      
      </div>
     
      </>
  );
}

export default Waiting;
