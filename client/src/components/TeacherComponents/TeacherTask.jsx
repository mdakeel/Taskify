import { NavLink } from "react-router-dom";
import "../Style/TeacherCss/TeacherTask.css";
import { AssignCard } from "./AssignCard";
import { useRef } from "react";
import { useAssignedStudent } from "../../helpers/AssignedStudents";

export const TeacherTask = () => {
  const AssignedStudent =useAssignedStudent()
  
  const submitTask =()=>{
    const arrayofAssigned = AssignedStudent()
    console.log(arrayofAssigned)
  }
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
                    Task
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-10">
            <div className="form-main">
              <hr />
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <input
                        type="text"
                        name="title"
                        class="form-control"
                        placeholder="Task Title*"
                        value=""
                      />
                    </div>
                    <div id="assign" >
                      <AssignCard id={1}/>
                      <AssignCard id={2}/>
                      <AssignCard id={3}/>
                      <AssignCard id={4}/>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input
                        type="date"
                        name="date"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Enter Deadline Date*"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="point"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Enter Points* "
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="textarea"
                      class="form-control"
                      placeholder="Enter Discription"
                      rows="4"
                      cols="115"
                      value=""
                    ></textarea>
                  </div>
                </div>
                <hr />
                <button type="submit" onClick={submitTask} class="btn btn-primary">
                  Assign Task
                </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
