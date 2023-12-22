import "../Style/TeacherCss/TeacherTaskView.css";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { assignPoint, specificTaskById } from "../../api/manager/teacher.api";
import { Toaster } from "react-hot-toast";
import { getDate } from "../../helpers/functions";
export const TeacherCompleteTaskView = () => {
  const { id } = useParams();
  const [taskData, setData] = useState({});
  const [inputs, setInput] = useState({
    point: 0,
  });
  const getData = async () => {
    const data = await specificTaskById(id);

    if (data && data.data) {
      setData(data.data);
      console.log(data);
    } else {
      console.log("There was definetyly some error");
    }
  };
  const handleAssignPoint = async (e) => {
    e.preventDefault();
    const resp = await assignPoint(id, inputs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section id="content">
        <Toaster />
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
                  Complete Task
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section
          class="gray-bg"
          style={{ borderRadius: "10px", padding: "!0px" }}
          id="about"
        >
          <div class="row row-main2 !bg-white" style={{ padding: "20px" }}>
            {/* <div class="col-lg-8"> */}
            <div class="about-text2 p-10">
              <h3 class="dark-color ml-2">Task Info</h3>
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
                        left: "100px",
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
                      Student Name
                    </label>
                    <p>{taskData?.assignedTo?.name}</p>
                  </div>
                  <div class="media">
                    <label className="!text-[#A3C24B] !font-light">
                      Submit Date
                    </label>
                    <p>{getDate(taskData?.submitDate)}</p>
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
                      Deadline
                    </label>
                    <p> {getDate(taskData?.task?.deadline)}</p>
                  </div>
                  <div class="media">
                    <label className="!text-[#A3C24B] !font-light">
                      Assigned Point
                    </label>
                    <p>{taskData?.points}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="form-main">
            <hr />
            <form className="flex flex-col justify-center bg-white py-2 items-center">
              <div class="form-group w-[50%]">
                <input
                  type="text"
                  name="fullname"
                  class="form-control form-task"
                  id="exampleInputName"
                  value={`Attached link: ${taskData.attachedLink}`}
                  required="required"
                  disabled
                />
              </div>
              <hr />
              <div className="form_file w-[50%]">
                <div className="assignment-taks">
                  <input
                    type="text"
                    name="point"
                    class="form-control form-task2 form-task text-center"
                    placeholder="Assign Point"
                    value={inputs.point}
                    onChange={(e) =>
                      setInput({ ...inputs, point: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                onClick={handleAssignPoint}
                class="btn form-task btn-primary !w-[50%]"
              >
                Assign Point
              </button>
            </form>
          </div>
        </section>
        {/* submit */}
      </section>
    </>
  );
};
