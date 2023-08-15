import "../js/Dashboard";
import { NavLink } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <>
      <section id="sidebar">
        <span className="sidemain">Admin</span>
        <ul class="side-menu top">
          <div class="drop">
            <li class="active">
              <NavLink to={"/admindashboard"}>
                <i class="bx bxs-dashboard"></i>
                <label for="touch">
                  <span>Dashboard</span>
                </label>
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink to={"/astudent"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ateacher"}>
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">Teachers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/atask"}>
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Task</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/amessage"}>
              <i class="bx bxs-message-dots"></i>
              <span class="text">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ateam"}>
              <i class="bx bxs-group"></i>
              <span class="text">Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/agroup"}>
              <i class="bx bxs-group"></i>
              <span class="text">Groups</span>
            </NavLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <NavLink to={"/asetting"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/alogout"}>
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
