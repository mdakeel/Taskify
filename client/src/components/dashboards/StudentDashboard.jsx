import { NavLink } from "react-router-dom";
import "../helpers/Dashboard";
import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";

export const StudentDashboard = () => {
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
  
      <section id="sidebar">
      
        <span className="sidemain hide">Student</span>
        <ul class="side-menu top">
          <div class="drop">
            <li class="active">
              <NavLink to={"/studentdashboard"}>
                <i class="bx bxs-dashboard"></i>
                <label for="touch">
                  <span>Dashboard</span>
                </label>
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink to={"/studentteacher"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Teachers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/studenttask"}>
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Task</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/studentchat"}>
              <i class="bx bxs-message-dots"></i>
              <span class="text">Chat</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/studentgroup"}>
              <i class="bx bxs-group"></i>
              <span class="text">Join Group</span>
            </NavLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <NavLink to={"/studentsetting"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/logout"}>
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </section>
      <section id="content">
       <Navbar />
</section>

      {/* content */}
    </>
  );
};
