import "../Style/StudentCss/StudentTaskView.css";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setviewTask } from "../../redux/studentSlice";
import { Axiosinstance as network } from "../../helpers/axiosInstance";
export const StudentTaskView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const taskData = useSelector((state) => state.student.viewTask);

  const [submitData, setSubmitData] = useState({ attachedLink: "" });

  const submitTask = async (event) => {
    event.preventDefault();
    if (!submitData) return console.log("All Input Fields are required");
    try {
      const data = await network.post(`task/submit/${id}`, submitData);
      console.log("Task Submitted Successfully");
    } catch (error) {
      console.log({ msg: error.message || error.msg });
    }
  };

  useEffect(() => {
    console.log("id", id);
    dispatch(setviewTask(id));
  }, []);
  return (
    <>
      <section id="content">
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
                  Task Submission
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section class="section2 about-section gray-bg" id="about">
          <div class="row row-main2">
            <div class="about-text2">
              <h3 class="dark-color">Task Info</h3>
              <div class="row about-list">
                <div class="col-md-10">
                  <div class="media media2">
                    <label>Title </label>

                    <h3>{taskData?.task?.title}</h3>
                  </div>
                  <div class="media media2 ">
                    <label>Description </label>
                    <div
                      class="media discription"
                      style={{
                        minHeight: "200px",
                        minWidth: "800px",
                        maxWidth: "800px",
                        maxHeight: "200px",
                        overflow: "scroll",
                        border: "2px solid silver",
                        left: "140px",
                        position: "relative",
                        padding: "0px",
                      }}
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: taskData?.task?.description,
                        }}
                        style={{
                          marginLeft: "0px",
                          padding: "10px",
                        }}
                      ></p>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Createdby</label>
                    <p>{taskData?.assignedBy?.name}</p>
                  </div>
                  <div class="media">
                    <label>Date </label>
                    <p>{taskData?.task?.deadline}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>Point </label>
                    <p>10</p>
                  </div>
                  <div class="media">
                    <label> Deadline </label>
                    <p>{taskData?.task?.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div className="form-main">
              <hr />
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    name="fullname"
                    class="form-control form-task"
                    id="exampleInputName"
                    placeholder="Enter your project link"
                    required="required"
                    value={submitData.attachedLink}
                    onChange={(e) => {
                      setSubmitData((prev) => {
                        return { ...prev, attachedLink: e.target.value };
                      });
                    }}
                  />
                </div>

                <button
                  type="submit"
                  onClick={submitTask}
                  class="btn form-task btn-primary"
                >
                  Submit Task
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* submit */}
      </section>
    </>
  );
};
