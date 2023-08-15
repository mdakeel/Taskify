import "../Style/StudentCss/STeacher.css";
import { NavLink } from "react-router-dom";

export const STeacher = () => {
  return (
    <>
      <section id="content">
        <nav>
          <div className="left-nav">
            <i class="bx bx-menu"></i>
          </div>
          <div className="right-nav">
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" className="notification">
              <i class="bx bxs-bell"></i>
              <span className="num">8</span>
            </a>
            <a href="#" className="profile">
              <img src="img/people.png" />
            </a>
          </div>
        </nav>
        <div className="head-title">
          <div className="left">
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Teachers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="container1">
          <div class="card">
            <div class="card-image">
              <img
                src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                alt="profile one"
              />
            </div>

            <div class="details">
              <h2>John Smith</h2>
              <h3 class="job-title">UI Developer</h3>
              <NavLink to={"/stknowmore"}>
                <h4>Know More</h4>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
