import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const TeacherNewStudent = () => {
  const [newStudent, setNewStudent] = useState([]);
  const getData = async () => {
    const resp = await fetch("http://localhost:8082/student/unverified");
    const { data } = await resp.json();
    console.log(data);
    setNewStudent(data);
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
                    New Student
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="table-data" id="section">
            <div className="order">
              <div className="head">
                <h3>New Students</h3>
                <a href="#">04</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Education</th>
                  </tr>
                </thead>
                <tbody>
                  {newStudent?.map((e, i) => {
                    return (
                      <tr>
                        <td>
                          <h6>{i + 1}</h6>
                          <p>{e.name}</p>
                        </td>
                        <td>{e.email}</td>
                        <td>{e.course}</td>
                        <td>
                          <NavLink to={`/details/${e._id}`}>
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
