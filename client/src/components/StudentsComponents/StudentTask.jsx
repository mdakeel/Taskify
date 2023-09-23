import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const StudentTask = () => {
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
                  <tr>
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
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>02</h6>
                      <p>Make Calculator</p>
                    </td>
                    <td>Farman Tasleem</td>
                    <td>5AM</td>
                    <td>
                      <span className="status completed"> 10 </span>
                    </td>
                    <td>
                      <NavLink to={"/studenttaskview"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>03</h6>
                      <p>Make Calculator</p>
                    </td>
                    <td>Farman Sir</td>
                    <td>8AM</td>
                    <td>
                      <span className="status completed"> 10 </span>
                    </td>
                    <td>
                      <NavLink to={"/studenttaskview"}>
                        <span className="status completed"> View </span>
                      </NavLink>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>
                      <h6>04</h6>
                      <p>Make Calculator</p>
                    </td>
                    <td>Aakil Tayyab</td>
                    <td>11PM</td>
                    <td>
                      <span className="status completed"> 10 </span>
                    </td>
                    <td>
                      <NavLink to={"/studenttaskview"}>
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
