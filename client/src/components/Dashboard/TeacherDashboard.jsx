import { NavLink, useSearchParams } from "react-router-dom";
import {useState } from "react";
import { Navbar } from "../Navbar/Navbar";
// import "../js/Dashboard";

export const TeacherDashboard = () => {
  useState(() => {
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
        <span className="sidemain">Teacher</span>
        <ul class="side-menu top">
          <div class="drop">
            <li class="active">
              <NavLink to={"/teacherdashboard"}>
                <i class="bx bxs-dashboard"></i>
                <label for="touch">
                  <span>Dashboard</span>
                </label>
              </NavLink>
            </li>
          </div>
          <li>
            <NavLink to={"/newstudent"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">New Students</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/teacherstudent"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/teachertask"}>
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Assign Task</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/teachermessage"}>
              <i class="bx bxs-message-dots"></i>
              <span class="text">Message</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/teachergroup"}>
              <i class="bx bxs-group"></i>
              <span class="text">Join Group</span>
            </NavLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <NavLink to={"/teachersetting"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/teacherlogout"}>
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
