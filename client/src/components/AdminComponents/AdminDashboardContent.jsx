import "../js/Dashboard";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export const AdminDashboardContent = () => {
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
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>1020</h3>
                <p>Groups</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span className="text">
                <h3>2834</h3>
                <p>Students</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-notification"></i>
              <span className="text">
                <h3>2543</h3>
                <p>Teachers</p>
              </span>
            </li>
          </ul>

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
                <tbody>
                  <tr>
                    <td>
                      <h6>01</h6>
                      <p>Aakil Tayyab</p>
                    </td>
                    <td>aakiltayyab@gmail.com</td>
                    <td> Diploma</td>
                    <td>
                      <NavLink to={"/adminstudentknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>02</h6>
                      <p>Aadil Rehman</p>
                    </td>
                    <td>aadilrehman@gmail.com</td>
                    <td> B.Tec</td>
                    <td>
                      <NavLink to={"/adminstudentknowmore"}>
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
                      <NavLink to={"/adminstudentknowmore"}>
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
                      <NavLink to={"/adminstudentknowmore"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Teachers</h3>
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
                <tbody>
                  <tr>
                    <td>
                      <h6>01</h6>
                      <p>Aakil Tayyab</p>
                    </td>
                    <td>aakiltayyab@gmail.com</td>
                    <td> Diploma</td>
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
