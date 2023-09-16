import "../js/Dashboard";
import { NavLink } from "react-router-dom";

export const Apply = () => {
  return (
    <>
<div class="container rounded bg-white mt-5 mb-8">
    <div class="row">
        <div class="col-md-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-12">
                    <div class="col-md-4"><input type="text" class="form-control" placeholder="first name" value=""/></div>
                    <div class="col-md-4"><input type="email" class="form-control" value="" placeholder="Email"/></div>
                    <div class="col-md-4"><input type="password" class="form-control" placeholder="Password" value=""/></div>
                </div>
                <div class="row mt-12">
                    <div class="col-md-6"><input type="date" class="form-control" placeholder="Date Of Birth" value=""/></div>
                    <div class="col-md-6"><input type="number" class="form-control" placeholder="Mobile Number" value=""/></div>
                </div>
                <div class="row mt-12">
                <div class="col-md-3 p-2 px-2" >
                    <label class="labels">Course : </label>
                    <select class="m-2">
                        <option>Diploma</option>
                        <option>B.Tech</option>
                        <option>Dental</option>
                        <option>Unani</option>
                    </select>
                    </div>
                    <div class="col-md-3 p-2" >
                    <label class="labels">Branch : </label>
                    <select class="m-2">
                        <option>Computer Science</option>
                        <option>Electrical</option>
                        <option>Mechanical</option>
                        <option>Civil</option>
                    </select>
                    </div>
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="Student ID" value=""/></div>
                </div>
                <div class="row mt-3">
                                       
                    
                    <div class="col-md-12"><input type="text" class="form-control" placeholder="Student ID" value=""/></div>
                    
                    <div class="col-md-12"><input type="file" class="form-control" placeholder="Fee Slip/ Id Card" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
       
    </div>
</div>
 
      
    </>
  );
};
