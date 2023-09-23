import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const TeacherNewStudent = () => {
  const[newStudent,setNewStudent] = useState([])
  const getData=async()=>{
    const resp =  await fetch("http://localhost:8081/student/unverified");
    const {data} = await resp.json()
    console.log(data)
    setNewStudent(data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      {/* content */}

      <section id="content">
       <Navbar />

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

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Students List</h3>
                <a href="#">All Students : 04</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Education</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    newStudent?.map((e)=>{ 
                      return (
                        <tr>
                    <td>
                      <h6>01</h6>
                      <p>{e.name}</p>
                    </td>
                    <td>{e.email}</td>
                    <td>{e.course}</td>
                    <td>
                      <NavLink to={"/teacherstudentknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                      )
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
