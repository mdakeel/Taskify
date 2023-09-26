import { Navbar } from "../Navbar/Navbar";
import "../Style/TeacherCss/TeacherStudentKnowmore.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios"
import { Axiosinstance as request } from "../../helpers/axiosInstance";
import { useEffect, useState } from "react";
export const NewStudent = () => {
    const {id} = useParams()
    const [newStudentData,setData] = useState()
    const getData = async( )=> {
        try {
            const data =await request.get("/student/"+id)
            setData(data.data.data)
            
        } catch (error) {
            console.log("error")
        }
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <>
  

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
          <div class="row row-main">
         

            <div class="about-text ">
              <h3 class="dark-color">Student Information</h3>
             
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Name</label>
                    <p>{newStudentData?.name}</p>
                  </div>
                  <div class="media">
                    <label>Date of Birth</label>
                    <p>{newStudentData?.dob}</p>
                  </div>
                  <div class="media">
                    <label>Location</label>
                    <p>{newStudentData?.state + " " + newStudentData?.country}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>E-mail</label>
                    <p>{newStudentData?.email}</p>
                  </div>
                  <div class="media">
                    <label>Phone</label>
                    <p>{newStudentData?.contact}</p>
                  </div>
                  <div class="media">
                    <label>Education</label>
                    <p>M.Tech from JMI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex row gap flex-center justify-content-center mb-3">
            <div>
                <button className="btn btn-success btn-sm ">Approve Request</button>
            </div>
            <div>
                <button className="btn btn-dark btn-sm">Cancel Request</button>
            </div>
            <div>
                <button className="btn btn-dark btn-sm">View Proof</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
