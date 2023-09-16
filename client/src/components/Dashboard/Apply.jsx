import "../js/Dashboard";
import { NavLink } from "react-router-dom";

export const Apply = () => {
  return (
    <>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""/></div>
                    <div class="col-md-6"><label class="labels">Email</label><input type="email" class="form-control" value="" placeholder="Email"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Password</label><input type="password" class="form-control" placeholder="Password" value=""/></div>
                    <div class="col-md-12"><label class="labels">Confirm Password</label><input type="password" class="form-control" placeholder="Confirm Password" value=""/></div>
                    <div class="col-md-12"><label class="labels">DOB</label><input type="date" class="form-control" placeholder="Date Of Birth" value=""/></div>
                    <div class="col-md-12"><label class="labels">Mobile</label><input type="number" class="form-control" placeholder="Mobile Number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Course</label>
                    <select>
                        <option>Diploma</option>
                        <option>B.Tech</option>
                        <option>Dental</option>
                        <option>Unani</option>
                    </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Branch/Stream</label>
                    <select>
                        <option>Computer Engineering</option>
                        <option>Electrical Engineering</option>
                        <option>Electronic Engineering</option>
                        <option>Civil Engineering</option>
                    </select>
                    </div>
                    <div class="col-md-12"><label class="labels">StudentId</label><input type="text" class="form-control" placeholder="Student ID" value=""/></div>
                    
                    <div class="col-md-12"><label class="labels">Proof</label><input type="image" class="form-control" placeholder="Fee Slip/ Id Card" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        {/* <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br/>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
            </div>
        </div> */}
    </div>
</div>
 
      
    </>
  );
};
