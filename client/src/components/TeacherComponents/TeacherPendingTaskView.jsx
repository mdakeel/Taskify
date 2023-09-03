import "../Style/TeacherCss/TeacherTaskView.css";
import { NavLink } from "react-router-dom";

export const TeacherPendingTaskView = () => {
  return (
    <>
      {/* content */}

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
                  Pending Task
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section class="section about-section gray-bg" id="about">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="about-text ">
                <h3 class="dark-color">Task Info</h3>
                <div class="row about-list">
                  <div class="col-md-10">
                    <div class="media">
                      <label>Tile </label>
                      <h6 class="media">
                        <p>Build Mern E-Commerce Website</p>
                      </h6>
                    </div>
                    <div class="media">
                      <label>Discription </label>
                      <div class="media discription">
                        <p>
                          Note Website should be Responsive or multi user ,multi
                          vender login system. and its should be MERN Project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Createdby</label>
                      <p>Farman tasleem</p>
                    </div>
                    <div class="media">
                      <label>Date </label>
                      <p>12 / 08 / 2023</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>Point </label>
                      <p>10</p>
                    </div>
                    <div class="media">
                      <label> Deadline </label>
                      <p> Befor 5PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* submit */}
      </section>
    </>
  );
};
