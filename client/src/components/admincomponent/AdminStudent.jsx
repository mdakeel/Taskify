import { useDispatch, useSelector } from "react-redux";
import "../helpers/Dashboard";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getStudentsData } from "../../redux/adminSlice";
import { Navbar } from "../Navbar/Navbar";

export const AdminStudent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.admin);
  useEffect(()=>{
    dispatch(getStudentsData())
    console.log(state)
  },[])
  return (
    <>
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
                <li>
                  <a className="active" href="#">
                    Student
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Students</h3>
                <a href="#">04</a>
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
              {state?.studentsData?.map((el)=>{return(  <tbody>
                  <tr>
                    <td>
                      <h6>01</h6>
                      <p>{el.name}</p>
                    </td>
                    <td>{el.email}</td>
                    <td> Diploma</td>
                    <td>
                      <NavLink to={`/adminstudentknowmore/${el._id}`}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>)})}

               
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
