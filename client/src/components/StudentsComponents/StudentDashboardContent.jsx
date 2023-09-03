import { NavLink } from "react-router-dom";
export const StudentDashboardContent = () => {
  return (
    <>
      {/* content */}

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
