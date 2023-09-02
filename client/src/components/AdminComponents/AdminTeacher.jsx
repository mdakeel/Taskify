import "../js/Dashboard";
import "../Style/StudentCss/StudentTeacher.css";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux"
import { useEffect } from "react";
import { getTeacherData } from "../../redux/adminSlice";
export const AdminTeacher = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.admin);
  useEffect(()=>{
    dispatch(getTeacherData())
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
                    Teacher
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Teachers List</h3>
                <a href="#">All Teachers : 04</a>
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
               {
                state?.teachersData?.map((e,i)=>{
                  return (
                    <tbody>
                    <tr>
                      <td>
                        <h6>{i+1}</h6>
                        <p>{e?.name}</p>
                      </td>
                      <td>{e.email}</td>
                      <td>{e.qualification}</td>
                      <td>
                        <NavLink to={"/adminteacherknowmore"}>
                          <span className="status completed"> View </span>
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                  )
                })
               }

                <tbody>
                  <tr>
                    <td>
                      <h6>02</h6>
                      <p>Aadil Rehman</p>
                    </td>
                    <td>aadilrehman@gmail.com</td>
                    <td> B.Tec</td>
                    <td>
                      <NavLink to={"/adminteacherknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>03</h6>
                      <p>Farman Tasleem</p>
                    </td>
                    <td>farmantasleem@gmail.com</td>
                    <td>M.Tech</td>
                    <td>
                      <NavLink to={"/adminteacherknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>04</h6>
                      <p>Chacha</p>
                    </td>
                    <td>chacha@gmail.com</td>
                    <td>12th</td>
                    <td>
                      <NavLink to={"/adminteacherknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
