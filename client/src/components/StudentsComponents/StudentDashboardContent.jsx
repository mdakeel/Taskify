import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTask } from "../../redux/studentSlice";
import './StudentComponent.css';

export const StudentDashboardContent = () => {
  const dispatch = useDispatch()
  const task = useSelector((state)=>state.student.mytask)
  useEffect(()=>{
    dispatch(getTask())
  },[])
  return (
    <>
      {/* content */}

      <section id="content">
       {/* <Navbar /> */}

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
                {/* <li>
                  <a className="active" href="#">
                    Student
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>Today Task</h3>
                <p>Level - 2</p>
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
                <h3>Completed</h3>
                <p>23 / 30</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Task</h3>
                <a href="#">Score : 40</a>
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
                  {/* <tr>
                    <td>
                      <h6>01</h6>
                      <p>Make Calculator</p>
                    </td>
                    <td>Professor Farman</td>
                    <td>5AM</td>
                    <td>
                      <span className="status completed"> 10 </span>
                    </td>
                    <td>
                      <NavLink to={"/studenttaskview"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr> */}
                  {
                    task?.map((e)=>{
                      return <tr>
                      <td>
                        <h6>01</h6>
                        <p>{e.task.title}</p>
                      </td>
                      <td>{e.assignedBy.name}</td>
                      <td>5AM</td>
                      <td>
                        <span className="status completed">{e.task.maxpoint}</span>
                      </td>
                      <td>
                        <NavLink to={`/task/${e._id}`}>
                          <span className="status completed"> View </span>
                        </NavLink>
                      </td>
                    </tr>
                    })
                  }
                </tbody>

              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
