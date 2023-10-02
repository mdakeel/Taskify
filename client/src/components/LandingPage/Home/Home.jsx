import React, { useState } from "react";
import "./Home.css";
import image from "../../../assets/Images/image";
import { NavLink} from "react-router-dom";
import HomeNavbar from "../../Navbar/HomeNavbar";

function Home() {
 const myFunction = () => {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
 
  return (
    <>
    <div className="home50">
      <div className="home-container">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>

      <HomeNavbar/>
      <div className="home-main-content">
     

        <div className="row landing-page-content">
          {/* <div className="col"> */}
            <div className="main-content">
            <img src={image.jmilogo} alt="jmi" />
              <h1>Jamia Millia Islamia</h1>
              <p>
              Jamia Vision. Strive to foster the goals of building 
              a secular and modern system of integrated education 
              for sustainable development of society and better
              </p>
            </div>
          {/* </div> */}
          {/* <div className="row"> */}
          <div className="card-content">
            <div className="card-inner">
            <div className="card">
              <img src={image.jmi01} alt="" />
            </div>

            <div className="card">
            <img src={image.jmi02} alt="" />
            </div>
            </div>

            <div>
            <div className="card">
            <img src={image.jmi03} alt="" />
            </div>

            <div className="card">
            <img src={image.jmi04} alt="" />
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* </div> */}
      </>
  );
}

export default Home;
