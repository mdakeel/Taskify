import "../Style/StudentCss/StudentTaskView.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export const StudentTaskView = () => {
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
                  Task Submition
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section class="section2 about-section gray-bg" id="about">
          <div class="row row-main2">
            <div class="about-text2">
              <h3 class="dark-color">Task Info</h3>
              <div class="row about-list">
                <div class="col-md-10">
                  <div class="media media2">
                    <label>Tile </label>
                    
                      <h3>Build Mern E-Commerce Website</h3>
                 
                  </div>
                  <div class="media media2 ">
                    <label>Discription </label>
                    <div class="media discription">
                      <p>
                        Note Website should be Responsive or multi user multi
                        vender login system. and its should be MERN Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row about-list">
                <div class="col-md-6">
                  <div class="media">
                    <label>Createdby</label>
                    <p>Farman tasleem</p>
                  </div>
                  <div class="media">
                    <label>Date </label>
                    <p>12 / 08 / 2023</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="media">
                    <label>Point </label>
                    <p>10</p>
                  </div>
                  <div class="media">
                    <label> Deadline </label>
                    <p> Befor 5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div className="form-main">
              <hr />
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    name="fullname"
                    class="form-control form-task"
                    id="exampleInputName"
                    placeholder="Enter your project link"
                    required="required"
                  />
                </div>
                <hr />
                <div class="form-group">
                  <input type="file" name="file" />
                </div>
                <button type="submit" class="btn form-task btn-primary">
                  Submit Task
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* submit */}
      </section>
    </>
  );
};
