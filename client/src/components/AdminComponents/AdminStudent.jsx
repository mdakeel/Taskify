import { useDispatch, useSelector } from "react-redux";
import "../js/Dashboard";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getStudentsData } from "../../redux/adminSlice";

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
        <nav>
          <div className="left-nav">
            <i class="bx bx-menu"></i>
          </div>
          <div className="right-nav">
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" className="notification">
              <i class="bx bxs-bell"></i>
              <span className="num">8</span>
            </a>
            <a href="#" className="profile">
              <img src="img/people.png" />
            </a>
          </div>
        </nav>

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
              {state?.studentsData?.map((el)=>{return(  <tbody>
                  <tr>
                    <td>
                      <h6>01</h6>
                      <p>{el.name}</p>
                    </td>
                    <td>{el.email}</td>
                    <td> Diploma</td>
                    <td>
                      <NavLink to={"/adminstudentknowmore"}>
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
