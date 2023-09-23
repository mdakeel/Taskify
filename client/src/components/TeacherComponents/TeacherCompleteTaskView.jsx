import "../Style/TeacherCss/TeacherTaskView.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export const TeacherCompleteTaskView = () => {
  return (
    <>
      {/* content */}

      <section id="content">
       <Navbar />
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
                  Complete Task
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section class="gray-bg" id="about">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="about-text ">
                <h3 class="dark-color">Task Info</h3>
                <div class="row about-list">
                  <div class="col-md-10">
                    <div class="media">
                      <label>Tile </label>
                      <h6 class="media">
                        <p>Build Mern E-Commerce Website</p>
                      </h6>
                    </div>
                    <div class="media ">
                      <label>Discription </label>
                      <div class="media discription">
                        <p>
                          Note Website should be Responsive or multi user ,multi
                          vender login system. and its should be MERN Project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Submitedby</label>
                      <p>Zunaid Khan</p>
                    </div>
                    <div class="media">
                      <label>Date </label>
                      <p>12 / 08 / 2023</p>
                    </div>
                    <div class="media">
                      <label>Submited time </label>
                      <p>6:30PM</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>Poin </label>
                      <p>10</p>
                    </div>
                    <div class="media">
                      <label> Deadline </label>
                      <p> Befor 5PM</p>
                    </div>
                    <div class="media">
                      <label> Time Cross </label>
                      <p> 1:30 hr</p>
                    </div>
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
                    class="form-control"
                    id="exampleInputName"
                    value="Task Link : https://github.com/mdakeel"
                    required="required"
                    disabled
                  />
                </div>
                <hr />
                <div className="form_file">
                  <div class="form-group2">
                    <input
                      type="text"
                      name="file"
                      class="form-control"
                      placeholder="Task File"
                      value="Task File "
                      disabled
                    />
                  </div>
                  <div class="form-group3">
                    <input
                      type="text"
                      name="file"
                      placeholder="Task File"
                      value="Assignment-2.pdf"
                      disabled
                    />
                  </div>
                  <input
                    type="text"
                    name="point"
                    class="form-control"
                    placeholder="Assign Point"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Assign Point
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
