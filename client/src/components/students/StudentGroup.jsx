import "../Style/StudentCss/StudentGroup.css";
import { Navbar } from "../Navbar/Navbar";

export const StudentGroup = () => {
  return (
    <>
      {/* content */}

      <section id="content">
        {/* <Navbar /> */}
        <div className="head-title">
          <div className="left">
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
        <div className="content">
          <div className="wrap">
            <div class="search">
              <input
                type="text"
                className="searchterm"
                placeholder="Search group..."
              />
              <label for="cheak">
                <i class="bx bx-search"></i>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Javascript</h3>
                <p>Join</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>Python</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Next Js</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Excel</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Java</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>C#</h3>
                <p>Join</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>React Js</h3>
                <p>Join</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>Kotlin</h3>
                <p>Join</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <h3>Node Js</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>C, C++</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Mern Stack</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Backend</h3>
                <p>Join</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3>Frontent</h3>
                <p>Join</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
