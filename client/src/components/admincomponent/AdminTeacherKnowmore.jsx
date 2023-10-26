import "../Style/StudentCss/StudentTeacherKnowmore.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getSingleTeacherData } from "../../redux/adminSlice";
import { Navbar } from "../Navbar/Navbar";
export const AdminTeacherKnowmore = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.admin);
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getSingleTeacherData(id))
  },[])
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
                src={state?.viewTeacherData?.avatar}
                title=""
                alt=""
              />
            </div>

            <div class="about-text ">
              <dev class="about">
                <h3 class="about1">About Me</h3>
                <h4 class="about2">
                {state?.viewTeacherData?.roletitle}
                </h4>
                <p>
                 {state?.viewTeacherData?.bio}
                </p>
              </dev>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Name</label>
                    <p>{state?.viewTeacherData?.name}</p>
                  </div>
                  <div class="media">
                    <label>Age</label>
                    <p>{state?.viewTeacherData?.age} Years Old</p>
                  </div>
                  <div class="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>E-mail</label>
                    <p>{state?.viewTeacherData?.email}</p>
                  </div>
                  <div class="media">
                    <label>Phone</label>
                    <p>{state?.viewTeacherData?.contact}</p>
                  </div>
                  <div class="media">
                    <label>Education</label>
                    <p>{state?.viewTeacherData?.qualification}</p>
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
