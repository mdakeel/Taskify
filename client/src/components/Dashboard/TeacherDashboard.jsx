import { NavLink } from "react-router-dom";
import { TDashboard } from "../TeachersCom/T.Dashboard";
// import "../js/Dashboard";

export const TeachersDashboard = () => {
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
            <NavLink to={"/tstudent"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ttask"}>
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Assign Task</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tmessage"}>
              <i class="bx bxs-message-dots"></i>
              <span class="text">Message</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tgroup"}>
              <i class="bx bxs-group"></i>
              <span class="text">Join Group</span>
            </NavLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <NavLink to={"/rsetting"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tlogout"}>
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
