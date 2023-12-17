import { Button, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import TableComponent from "./Table";
import { getAssignedTask } from "../../api/manager/teacher.api";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const TaskPage = () => {
  const [taskCreatedByTeacher, setTask] = useState([]);
  const getData = async () => {
    const data = await getAssignedTask();
    if (data && data.data) {
      setTask(data.data);
      console.log(data);
    } else {
      console.log("There was definetyly some error");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="content">
      <Toaster />
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
                  All Task
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>All Task</h3>
              <a href="#">04</a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Student Name</th>
                  <th>Review Status</th>
                  <th>Review</th>
                </tr>
              </thead>
              {taskCreatedByTeacher?.map((element, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <h6>{index + 1}</h6>
                        <p>{element?.task?.title}</p>
                      </td>
                      <td>{element?.assignedTo?.name}</td>
                      <td>
                        {element?.submitStatus
                          ? element.evalStatus
                            ? "Reviewed"
                            : "Not Reviewed Yet"
                          : "Not Submitted"}
                      </td>
                      <td>
                        <NavLink to={`/teacher/task/view/${element?._id}`}>
                          <span className="status completed"> Review </span>
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TaskPage;
