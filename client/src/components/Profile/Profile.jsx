import React, { useEffect } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import image from "../../assets/Images/image";
import { http } from "../../helpers/http";
// import { Axiosinstance as http } from "../../helpers/axiosInstance";

function Profile() {
  const userDetails = async()=> {
   try {
    const data = await http("GET","/user/details")
    console.log(data.data)
    
   } catch (error) {
      console.log({msg:error.message})
   }
  }
  
  useEffect(()=>{
    userDetails()
  },[])
  
  return (
    <>
        
      <div className="profile-cont">
    
        <div class="row  pro">
          <div class="col-xl-3 ">
            <div class="profile-card">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 class="user-name">Aakil Tayyab</h5>
                    <h6 class="user-email">genious@Maxwell.com</h6>
                  </div>
                  <div class="about about-cont">
                    <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div>
                  <div class="about">
                    <h5>Skills</h5>
                    <p>
                      HTML, CSS, JavaScript, React Js, Node Js, Mongoose,
                      Express JS Redux, Git/Github
                    </p>
                  </div>
                  <div className="logout">
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="profile-card2">
            <div class="card-body">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 class="mb-2 text-primary">Personal Details</h6>
              </div>
              <div class="row ">
                <div class="form-group formg">
                  <p for="fullName">Full Name :</p>
                  <input
                    type="text"
                    class="form-control formp"
                    id="fullName"
                    placeholder="Example"
                    disabled
                  />
                </div>

                <div class="form-group formg">
                  <label for="eMail">Email :</label>
                  <input
                    type="email"
                    class="form-control formp"
                    id="eMail"
                    placeholder="expample@gmail.com"
                    disabled
                  />
                </div>

                <div class="form-group formg">
                  <label for="phone">Phone :</label>
                  <input
                    type="text"
                    class="form-control formp"
                    id="phone"
                    placeholder="+917065121000"
                    disabled
                  />
                </div>

                <div class="form-group formg dob">
                  <label for="website ">DOB :</label>
                  <input
                    type="date"
                    class="form-control formp "
                    id="website"
                    placeholder="1-1-2024"
                    disabled
                  />
                </div>

                <div class="form-group formg">
                  <label for="website">Education :</label>
                  <input
                    type="text"
                    class="form-control formp"
                    id="website"
                    placeholder="Diploma Computer Engineering"
                    disabled
                  />
                </div>
                <div class="form-group formg">
                  <label for="website">Id Number :</label>
                  <input
                    type="text"
                    class="form-control formp"
                    id="website"
                    placeholder="21DCS8017"
                    disabled
                  />
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 class="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group formg">
                    <label for="Street">City</label>
                    <input
                      type="name"
                      class="form-control formp"
                      id="Street"
                      placeholder="Loni"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group formg">
                    <label for="ciTy">State</label>
                    <input
                      type="name"
                      class="form-control formp"
                      id="ciTy"
                      placeholder="Uttar Pradesh"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group formg">
                    <label for="sTate">Zip Code</label>
                    <input
                      type="text"
                      class="form-control formp"
                      id="sTate"
                      placeholder="201102"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group formg">
                    <label for="zIp">Country</label>
                    <input
                      type="text"
                      class="form-control formp formp"
                      id="zIp"
                      placeholder="India"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="edit2">
                <NavLink to={"/editprofile"}>
                  <span>Edit Details</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Profile;
