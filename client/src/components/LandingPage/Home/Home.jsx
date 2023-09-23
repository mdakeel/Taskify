import React from "react";
import "./Home.css";
import image from "../../../assets/Images/image";
import { NavLink} from "react-router-dom";

function Home() {
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

        <div className="row">
          <div className="col">
            <div className="jmi-logo"></div>
            <div className="main-content">
              <h1>Jamia Millia Islamia</h1>
              <p>
              Jamia Vision. Strive to foster the goals of building 
              a secular and modern system of integrated education 
              for sustainable development of society and better
              </p>
            </div>
          </div>
          <div className="col card-content">
            <div className="card">
              <img src={image.jmi01} alt="" />
            </div>

            <div className="card">
            <img src={image.jmi02} alt="" />
            </div>

            <div className="card">
            <img src={image.jmi03} alt="" />
            </div>

            <div className="card">
            <img src={image.jmi04} alt="" />
            </div>
          </div>
        </div>
      
      </div>
     
      </>
  );
}

export default Home;
