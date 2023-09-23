import { useDispatch, useSelector } from "react-redux";
import "../Style/StudentCss/StudentTeacherKnowmore.css";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleStudentData } from "../../redux/adminSlice";
import { Navbar } from "../Navbar/Navbar";

export const AdminStudentKnowmore = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.admin);
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getSingleStudentData(id))
  },[])
  return (
    <>
      {/* content */}

      <section id="content">
       <Navbar />
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
                  Student
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
                src={state?.viewStudentData?.avatar}
                title=""
                alt=""
              />
            </div>

            <div class="about-text ">
              <dev class="about">
                <h3 class="about1">About Me</h3>
                <h4 class="about2">
                  A Lead UX &amp; UI designer based in Canada
                </h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
              </dev>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Name</label>
                    <p>{state?.viewStudentData?.name}</p>
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
                    <p>{state?.viewStudentData?.email}</p>
                  </div>
                  <div class="media">
                    <label>Phone</label>
                    <p>820-885-3321</p>
                  </div>
                  <div class="media">
                    <label>Education</label>
                    <p>{state?.viewStudentData?.course}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="counter">
            <div class="row">
              <div class=" col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    500
                  </h6>
                  <p class="m-0px font-w-600">Totle Task</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="150" data-speed="150">
                    150
                  </h6>
                  <p class="m-0px font-w-600">Task Completed</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="850" data-speed="850">
                    350
                  </h6>
                  <p class="m-0px font-w-600">Task Pending</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="190" data-speed="190">
                    1500
                  </h6>
                  <p class="m-0px font-w-600">Totle Poins Gain</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
