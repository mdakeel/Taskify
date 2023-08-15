export const SGroup = () => {
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
                    Groups
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
                <a href="#">view</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Time</th>
                    <th>Pints</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h5>01</h5>
                      <p>Make Calculator</p>
                    </td>
                    <td>1PM - 5AM</td>
                    <td>
                      <span className="status completed"> 10 </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* previous task */}

            <div className="order">
              <div className="head">
                <h3>Previous Task</h3>
                <a href="#">view</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Time</th>
                    <th>Pints</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h5>01</h5>
                      <p>E-Commerce website</p>
                    </td>
                    <td>9AM - 3PM</td>
                    <td>
                      <span className="status completed"> 7 / 10 </span>
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
