import { useEffect, useState } from "react";
import image from "../../assets/Images/image"
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { StudentDashboard } from "../Dashboard/StudentDashboard";

export const Navbar = () => {
  useEffect(() => {
    window.onload = function () {
     const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
 
     allSideMenu.forEach((item) => {
         const li = item.parentElement;
 
         item.addEventListener("click", function () {
             allSideMenu.forEach((i) => {
                 i.parentElement.classList.remove("active");
             });
             li.classList.add("active");
         });
     });
 
     // TOGGLE SIDEBAR
     const menuBar = document.querySelector("#content nav .bx.bx-menu");
     const sidebar = document.getElementById("sidebar");
 
     menuBar.addEventListener("click", function () {
         sidebar.classList.toggle("hide");
     });
 
     if (window.innerWidth < 768) {
         sidebar.classList.add("hide");
     }
 
 }
 
   }, []);

  return (
  <>
     <nav>
      {/* <div className="dashboard-nav"> */}
          <div className="left-nav">
            <i class="bx bx-menu"></i>
          </div>
          <div className="right-nav">
            {/* <a href="#" className="notification">
              <i class="bx bxs-bell"></i>
              <span className="num">8</span>
            </a> */}
            <div class="dropdown2">
            <div class="dropbtn2 profile">
              <img src={image.people} />
            </div>
            <div class="dropdown-content2">
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/Setting">Setting</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
          </div>
          </div>
          {/* </div> */}
        </nav>
  </>
  );
};
