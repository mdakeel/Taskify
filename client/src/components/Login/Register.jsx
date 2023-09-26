import { createRef, useState } from "react";
import "../Style/Login.css";
import "../js/Dashboard";
import image from "../../assets/Images/image";
import { NavLink } from "react-router-dom";

export const Register = () => {
const fileInput = createRef()
 const handleFormData =async(e)=>{
    e.preventDefault();
    const newData = new FormData()
    const data = Array.from(e.target.elements)
    .filter((input) => input.name)
    .reduce((obj, input) => Object.assign(obj, { [input.name]: input.file||input.value }), {});
    for(let key in data) {
        if(key!=="file"){

        newData.append(key,data[key])
    }
    }
    newData.set("file",fileInput.current.files[0]);

    console.log(...newData)
    try {
        const resp = await fetch("http://localhost:8081/student/register",{
            method:"POST",
            body:newData
        })

        console.log(resp)
    } catch (error) {
        
    }

 }

  return (
    <>
    <div className="home-container">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>
      <div className="home-main-content">
        <div className="home-navbar">
                    <div className="home-logo">
            <img src={image.taskify} alt="taskify" />
          </div>
          <div className="home-nav_items">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/Studentlogin">login</NavLink>
              </li>
            </ul>
          </div>
        </div>
        
<div class="container register-content col-md-10 ">
    <div class="row">
        <div class="col-md-12">
            <div class="p-3">
                <form action="http://localhost:8081/student/register" onSubmit={handleFormData} method="post" >
                <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" name="name" placeholder="first name" /></div>
                    <div class="col-md-6"><input type="email" class="form-control" name="email" placeholder="Email"/></div>
                </div>
                <div class="row mt-3">
                <div class="col-md-6"><input type="password" class="form-control" placeholder="Password" name="password" /></div>
                    <div class="col-md-6"><input type="date" class="form-control" placeholder="Date Of Birth" name="dob" /></div>
                </div>
                <div class="row mt-3">
                <div class="col-md-6"><input type="number" class="form-control" placeholder="Mobile Number"  name="contact"/></div>
                <div class="col-md-6"><input type="text" name="studentId" class="form-control" placeholder="Student ID" /></div>
                </div>
                <div class="row mt-3">

                <div class="row mt-">
               
                <div class="col-md-4"><label class="register-file">Choose file<input type="file" id="inputTag" class="form-control" ref={fileInput} name="file" placeholder="Clear Image of Fee Slip/ Id Card"  /></label></div>
                <div class="col-md-4"><label class="labels section-label">Course
                    <select name="course " className="sec">
                        <option>Diploma</option>
                        <option>B.Tech</option>
                        <option>Dental</option>
                        <option>Unani</option>
                    </select></label>
                    </div>
                <div class="col-md-4"><label class="labels section-label2">Branch
                    <select name="branch" className="sec">
                        <option>Computer</option>
                        <option>Electronic</option>
                        <option>Electricale</option>
                        <option>Civil</option>
                    </select></label>
                    </div>
                </div>
                    

                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" name="country" placeholder="Country"  /></div>
                    <div class="col-md-6"><input type="text" class="form-control"  name="state" placeholder="State" /></div>
                </div>

                <div class="mt-3 text-center">
                    <NavLink to={"/waiting"}>
                    <button class="btn btn-primary profile-button" type="submit">Register</button>
                    </NavLink></div>
                </form>
            </div>
        </div>
     
    </div>
</div>
</div>
 
      
    </>
  );
};
