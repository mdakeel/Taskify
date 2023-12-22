import { Navbar } from "../Navbar/Navbar";
import "../Style/TeacherCss/TeacherStudentKnowmore.css";
import { NavLink, useParams } from "react-router-dom";
import "./NewStudent.css";
import axios from "axios";
import { Axiosinstance as request } from "../../helpers/axiosInstance";
import { useEffect, useState } from "react";
import { cancelStudent, verifyStudent } from "../../api/manager/teacher.api";

import toast, { Toaster } from "react-hot-toast";
export const NewStudent = () => {
  const { id } = useParams();
  const [newStudentData, setData] = useState();
  const getData = async () => {
    try {
      const data = await request.get("/student/" + id);
      setData(data.data.data);
    } catch (error) {
      console.log("error");
    }
  };

  const approveRequest = async () => {
    const resp = await verifyStudent(id, toast);
    console.log(resp);
  };

  const cancelRequestHandle = async () => {
    const resp = await cancelStudent(id, toast);
    console.log(resp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Toaster />
      <section id="content" className="bg-white">
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
        <main>
          <section class="section about-section gray-bg" id="about">
            <div class="row row-main2">
              <div class="about-text2 ">
                <div class="about2">
                  <h3 class="dark-colour">Student Information</h3>
                </div>
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
                      <p>
                        {newStudentData?.state + " " + newStudentData?.country}
                      </p>
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

            <div class="flex req-btn row gap flex-center justify-content-center mb-3">
              <div>
                <button
                  className="bg-[rgb(220,247,226)] !text-[#48B262] !text-[14px] font-medium border-2 border-[#48B262] shadow-md"
                  onClick={approveRequest}
                >
                  APPROVE REQUEST
                </button>
              </div>
              <div>
                <button className="!text-[#3A7EF5] !text-[14px] bg-[#E5EFFE] font-medium border-2 border-[#ED4D40] shadow-md hover:!text-[#3A7EF5]">
                  <a
                    href={newStudentData?.proof}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="!text-[#ED4D40] !text-[14px] bg-white font-medium border-2 border-[#ED4D40] shadow-md"
                  onClick={cancelRequestHandle}
                >
                  Cancel Request
                </button>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};
