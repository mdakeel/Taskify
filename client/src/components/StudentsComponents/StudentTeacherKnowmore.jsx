import "../Style/StudentCss/StudentTeacherKnowmore.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const StudentTeacherKnowmore = () => {
  return (
    <>
      {/* content */}

      <section id="content">
       {/* <Navbar /> */}
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
                  Teacher
                </a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section class="section about-section gray-bg" id="about">
          <div class="row  row-main">
            <div class="about-avatar">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                title=""
                alt=""
              />
            </div>

            <div class="about-text ">
              <div class="about">
                <h3 class="about1">About Me</h3>
                <h4>Assistant professor, Hello world</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish.
                </p>
              </div>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Name</label>
                    <p>Farman</p>
                  </div>
                  <div class="media">
                    <label>Age</label>
                    <p>17 Yr</p>
                  </div>
                  <div class="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>E-mail</label>
                    <p>info@domain.com</p>
                  </div>
                  <div class="media">
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div class="media">
                    <label>Education</label>
                    <p>M.Tech from JMI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="counter">
            <div class="row counter-inside">
              <div className="rank">
              <div class=" col-lg-2">
            
                  <h6 >
                    500
                  </h6>
                  <p >Totle Task</p>
             
              </div>
              <div class="col-6 col-lg-3">
                
                  <h6 >
                    150
                  </h6>
                  <p >Task Completed</p>
               
              </div>
              </div>
              <div className="rank">
              <div class="col-6 col-lg-3">
                
                  <h6>
                    350
                  </h6>
                  <p >Task Pending</p>
          
              </div>
              <div class="col-6 col-lg-3">
                
                  <h6 >
                    1500
                  </h6>
                  <p >Totle Poins Gain</p>
                </div>
                </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
