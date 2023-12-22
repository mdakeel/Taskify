import "../Style/StudentCss/StudentTaskView.css";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setviewTask } from "../../redux/studentSlice";
import { Axiosinstance as network } from "../../helpers/axiosInstance";
import { getDate } from "../../helpers/functions";
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
      <section id="content" className="">
        <main className="!h-screen !pb-0 !mb-0">
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

          <section
            class="section2 about-section gray-bg"
            id="about"
            className=""
          >
            <div
              class="row row-main2"
              className="!bg-white p-2 rounded-md !px-10 mt-12"
            >
              <div class="about-text2">
                <h3 class="dark-color text-xl ">Task Info</h3>
                <div class="row about-list">
                  <div class="col-md-10">
                    <div class="media media2">
                      <label className="!text-[#A3C24B] !font-light">
                        Title{" "}
                      </label>

                      <h3>{taskData?.task?.title}</h3>
                    </div>
                    <div class="media media2 ">
                      <label className="!text-[#A3C24B] !font-light">
                        Description{" "}
                      </label>
                      <div
                        className="media discription rounded-md"
                        style={{
                          minHeight: "fit-content",
                          minWidth: "600px",
                          maxWidth: "600px",
                          maxHeight: "150px",
                          overflow: "scroll",
                          left: "30px",
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
                      <label className="!text-[#A3C24B] !font-light">
                        Task Assigned By
                      </label>
                      <p>{taskData?.assignedBy?.name}</p>
                    </div>
                    <div class="media">
                      <label className="!text-[#A3C24B] !font-light">
                        Deadline
                      </label>
                      <p>{getDate(taskData?.task?.deadline)}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label className="!text-[#A3C24B] !font-light">
                        Max Point
                      </label>
                      <p>{taskData?.task?.maxpoint}</p>
                    </div>
                    <div class="media">
                      <label className="!text-[#A3C24B] !font-light">
                        Recieved Point
                      </label>
                      <p>
                        {taskData.evalStatus
                          ? taskData.points
                          : "Not Evaluated/submitted yet "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group flex gap-x-5 w-full align-middle items-center">
              <input
                type="text"
                name="fullname"
                class="form-control form-task !h-12"
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
              <button
                type="submit"
                onClick={submitTask}
                class="form-task bg-green-400 text-white w-40 !h-12"
              >
                Submit Task
              </button>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};
