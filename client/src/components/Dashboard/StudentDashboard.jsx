import { NavLink } from "react-router-dom";
import "../js/Dashboard";

export const StudentsDashboard = () => {
  return (
    <>
      <section id="sidebar">
        <span className="sidemain">Student</span>
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
            <NavLink to={"/steacher"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Teachers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/stask"}>
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Task</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/smessage"}>
              <i class="bx bxs-message-dots"></i>
              <span class="text">Message</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/sgroup"}>
              <i class="bx bxs-group"></i>
              <span class="text">Join Group</span>
            </NavLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <NavLink to={"/ssetting"}>
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

      {/* content */}
    </>
  );
};
