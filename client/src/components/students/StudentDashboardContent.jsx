import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTask } from "../../redux/studentSlice";
import "./StudentComponent.css";
import {
  getDate,
  getDifferenceOfDate,
  isFutureDate,
} from "../../helpers/functions";

export const StudentDashboardContent = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.student.mytask);
  useEffect(() => {
    dispatch(getTask());
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
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>Today Task</h3>
                <p>
                  {
                    task.filter(
                      (element) =>
                        getDifferenceOfDate(element.task.deadline) === -1
                    )?.length
                  }
                </p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span className="text">
                <h3>Progress</h3>
                <p>Good ✔</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-notification"></i>
              <span className="text">
                <h3>Submission</h3>
                <p>{task.filter((element) => element?.submitStatus)?.length}</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Task</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Createdby</th>
                    <th>DeadLine</th>
                    <th>Pints</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {task
                    ?.filter(
                      (element) =>
                        getDifferenceOfDate(element.task.deadline) < 7 ||
                        isFutureDate(element.task.deadline)
                    )
                    .slice()
                    .reverse()
                    ?.map((e, index) => {
                      return (
                        <tr>
                          <td>
                            <h6>{index + 1}</h6>
                            <p>{e.task.title}</p>
                          </td>
                          <td>{e.assignedBy.name}</td>
                          <td>{getDate(e.task.deadline)}</td>
                          <td>
                            <span className="status completed">
                              {e.task.maxpoint}
                            </span>
                          </td>
                          <td>
                            <NavLink to={`/task/${e._id}`}>
                              <span className="status completed"> View </span>
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
