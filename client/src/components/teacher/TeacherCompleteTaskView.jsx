import "../Style/TeacherCss/TeacherTaskView.css";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { assignPoint, specificTaskById } from "../../api/manager/teacher.api";
import { Toaster } from "react-hot-toast";
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
          <div class="row row-main2" style={{ padding: "20px" }}>
            {/* <div class="col-lg-8"> */}
            <div class="about-text2 p-10">
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
                    <label>Submitedby</label>
                    <p>{taskData?.assignedTo?.name}</p>
                  </div>
                  <div class="media">
                    <label>Date </label>
                    <p>12 / 08 / 2023</p>
                  </div>
                  <div class="media">
                    <label>Submited time </label>
                    <p>6:30PM</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>Max Points </label>
                    <p>{taskData?.task?.maxpoint}</p>
                  </div>
                  <div class="media">
                    <label> Deadline </label>
                    <p> {taskData?.task?.deadline}</p>
                  </div>
                  <div class="media">
                    <label> Assigned Point</label>
                    <p> 1:30 hr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
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
                    value={`Attached link: ${taskData.attachedLink}`}
                    required="required"
                    disabled
                  />
                </div>
                <hr />
                <div className="form_file">
                  <div class="form-group2">
                    <input
                      type="text"
                      name="file"
                      class="form-control form-task-file"
                      placeholder="Task File"
                      value="Task File "
                      disabled
                    />
                  </div>
                  <div className="assignment-taks">
                    <div class="form-group3">
                      <input
                        type="text"
                        name="file"
                        placeholder="Task File"
                        value="Assignment-2.pdf"
                        disabled
                      />
                    </div>
                    <input
                      type="text"
                      name="point"
                      class="form-control form-task2 form-task"
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
                  class="btn form-task btn-primary"
                >
                  Assign Point
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
