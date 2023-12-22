import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { getDate } from "../../helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTask } from "../../redux/studentSlice";

export const StudentTask = () => {
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
              <h1>ALL TASK</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Task
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                  {[...task]?.reverse()?.map((e, index) => {
                    return (
                      <tr>
                        <td>
                          <h6>{index + 1}</h6>
                          <p>{e?.task?.title}</p>
                        </td>
                        <td>{e?.assignedBy?.name}</td>
                        <td>{getDate(e?.task?.deadline)}</td>
                        <td>
                          <span className="status completed">
                            {e?.task?.maxpoint}
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
