import { NavLink } from "react-router-dom";
import "../Style/TeacherCss/TeacherTask.css";
import { AssignCard } from "./AssignCard";
import { useEffect, useRef, useState } from "react";
import { getAssignedStudent, useAssignedStudent } from "../../helpers/AssignedStudents";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsData } from "../../redux/teacherSlice";
import { Navbar } from "../Navbar/Navbar";
import { Axiosinstance as axios } from "../../helpers/axiosInstance";
export const TeacherTask = () => {
  const STATE = useSelector((state => state.teacher))
  const [taskData,setTaskData]  = useState({
    title:"",
    description:"",
    assigned:[],
    deadline:"",
    maxpoint:0
  })
  const getAssignedStudent = ()=> {
    const assignedStudent = []
    const parentElement = document.querySelectorAll(".assignCard");
    for(let list of parentElement) {
        if(list.getAttribute("assignedStatus")=="assigned"){
            assignedStudent.push(list.getAttribute("userid"))
        }
    }
    return assignedStudent
}

  const dispatch = useDispatch()
  const submitTask =()=>{
    let arrayofAssigned = getAssignedStudent()
    setTaskData({...taskData,assigned:arrayofAssigned})
      console.log(taskData)
      sendData(arrayofAssigned)
    
  }

   function sendData (data) {
        axios.post("/task/create",{...taskData,assigned:data},{
          headers : {
            "Authorization":`bearer ${localStorage.getItem("token")}`
          }
        }).then((res)=>{
          console.log(res.data)
        }).catch((err)=>{
          console.log("Error",err.message)
        })
      
  }

  useEffect(()=>{
    dispatch(getStudentsData())
  },[])
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
                        value={taskData.title}
                        onChange={(e)=>{setTaskData((prev)=>{return {...prev,title:e.target.value}})}}
                      />
                    </div>
                    <div id="assign" >
                      {
                        STATE?.studentsData?.map((el)=>{
                          return <AssignCard name={el.name} key={el._id} id={el._id}/>

                        })
                        }
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
                        value={taskData.deadline}
                        onChange={(e)=>{setTaskData((prev)=>{return {...prev,deadline:e.target.value}})}}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        name="point"
                        class="form-control"
                        id="exampleInputName"
                        placeholder="Enter Points* "
                        required="required"

                        value={taskData.maxpoint}
                        onChange={(e)=>{setTaskData((prev)=>{return {...prev,maxpoint:+e.target.value}})}}
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
                      value={taskData.description}
                      onChange={(e)=>{setTaskData((prev)=>{return {...prev,description:e.target.value}})}}
                    ></textarea>
                  </div>
                </div>
                <hr />
                <button onClick={submitTask} class="btn btn-primary">
                  Assign Task
                </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
