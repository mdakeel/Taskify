import "../Style/StudentCss/StudentTeacher.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export const StudentTeacher = () => {
  return (
    <>
      <section id="content">
       <Navbar />
        <div className="searchbar">
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
          <div className="wrap">
            <div class="search">
              <input
                type="text"
                className="searchterm"
                placeholder="Search group..."
              />
              <label for="cheak">
                <i class="bx bx-search"></i>
              </label>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row">
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card001">
                <div class="card-image">
                  <img
                    src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                    alt="profile one"
                  />
                </div>

                <div class="details">
                  <h2>John Smith</h2>
                  <h3 class="job-title">UI Developer</h3>
                  <NavLink to={"/studentteacherknowmore"}>
                    <h4>Know More</h4>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
