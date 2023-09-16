import { createRef, useState } from "react";
import "../js/Dashboard";
import { NavLink } from "react-router-dom";

export const Apply = () => {
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
<div class="container rounded bg-white mt-5 mb-8">
    <div class="row">
    
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <form action="http://localhost:8081/student/register" onSubmit={handleFormData} method="post" >
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" name="name" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels">Email</label><input type="email" class="form-control" name="email" placeholder="Email"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" placeholder="Password" name="password" /></div>
                    <div class="col-md-12"><label class="labels">DOB</label><input type="date" class="form-control" placeholder="Date Of Birth" name="dob" /></div>
                    <div class="col-md-12"><label class="labels">Mobile</label><input type="number" class="form-control" placeholder="Mobile Number"  name="contact"/></div>
                    <div class="col-md-12"><label class="labels">Course</label>
                    <select name="course">
                        <option>Diploma</option>
                        <option>B.Tech</option>
                        <option>Dental</option>
                        <option>Unani</option>
                    </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Branch/Stream</label>
                    <select name="branch">
                        <option>Computer Engineering</option>
                        <option>Electrical Engineering</option>
                        <option>Electronic Engineering</option>
                        <option>Civil Engineering</option>
                    </select>
                    </div>
                    <div class="col-md-12"><label class="labels">StudentId</label><input type="text" name="studentId" class="form-control" placeholder="Student ID" /></div>
                    
                    <div class="col-md-12"><label class="labels">Proof</label><input type="file" class="form-control" ref={fileInput} name="file" placeholder="Clear Image of Fee Slip/ Id Card"  /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" name="country" placeholder="country"  /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control"  name="state" placeholder="state" /></div>
                </div>

                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                </form>
            </div>
        </div>
     
    </div>
</div>
 
      
    </>
  );
};
