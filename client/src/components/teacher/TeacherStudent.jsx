import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const TeacherStudent = () => {
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
                      <NavLink to={"/teacherstudentknowmore"}>
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
                      <NavLink to={"/teacherstudentknowmore"}>
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
                      <NavLink to={"/teacherstudentknowmore"}>
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
                      <NavLink to={"/teacherstudentknowmore"}>
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
