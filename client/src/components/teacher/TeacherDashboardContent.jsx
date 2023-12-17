import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { getTeacherDashboardDetails } from "../../api/manager/teacher.api";
import { useEffect, useState } from "react";
import { getDate } from "../../helpers/functions";
export const TeacherDashboardContent = () => {
  const [dashboardData, setdashboardData] = useState({
    countofCompletedTask: 0,
    countofPendingTask: 0,
    completedTask: [],
    pendingTask: [],
  });
  const getData = async () => {
    const data = await getTeacherDashboardDetails();
    setdashboardData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
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
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>Task</h3>
                <p>Submitted - 03</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span className="text">
                <h3>Task</h3>
                <p>
                  Pending for Review-{" "}
                  {dashboardData?.countofPendingTask || "Loading.."}
                </p>
              </span>
            </li>
            <li>
              <i class="bx bxs-notification"></i>
              <span className="text">
                <h3>Task</h3>
                <p>Reviewed - {dashboardData?.countofCompletedTask}</p>
              </span>
            </li>
          </ul>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Review Pending</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Assigned On</th>
                    <th>Submit Date</th>
                    <th>View</th>
                  </tr>
                </thead>
                {dashboardData?.pendingTask?.map((element, index) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <h6>{index + 1}</h6>
                          <p>{element.task.title}</p>
                        </td>
                        <td>{getDate(element.createdAt) || "N/a"}</td>
                        <td>{getDate(element.submitDate) || "N/a"}</td>

                        <td>
                          <NavLink to={`/teacher/task/view/${element._id}`}>
                            <span className="status completed"> View </span>
                          </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="table-data">
            <div className="table-data">
              <div className="order">
                <div className="head">
                  <h3>Completed Task</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>DeadLine</th>
                      <th>Submited Time</th>
                      <th>Pints</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  {dashboardData?.completedTask?.map((element, index) => {
                    return (
                      <tbody>
                        <tr>
                          <td>
                            <h6>{index + 1}</h6>
                            <p>{element.task.title}</p>
                          </td>
                          <td>5AM</td>
                          <td>4AM</td>
                          <td>
                            <span className="status completed">
                              {" "}
                              {element.point}
                            </span>
                          </td>
                          <td>
                            <NavLink to={"/teacherCompletetaskview"}>
                              <span className="status completed"> View </span>
                            </NavLink>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
