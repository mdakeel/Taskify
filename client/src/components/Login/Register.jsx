import { createRef, useState } from "react";
import "../Style/Login.css";
import "../helpers/Dashboard";
import image from "../../assets/Images/image";
import { NavLink } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

export const Register = () => {
  const fileInput = createRef();
  const handleFormData = async (e) => {
    e.preventDefault();
    const newData = new FormData();
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce(
        (obj, input) =>
          Object.assign(obj, { [input.name]: input.file || input.value }),
        {}
      );
    for (let key in data) {
      if (key !== "file") {
        newData.append(key, data[key]);
      }
    }
    newData.set("file", fileInput.current.files[0]);

    console.log(...newData);
    try {
      const resp = await fetch("http://localhost:8081/student/register", {
        method: "POST",
        body: newData,
      });

      console.log(resp);
    } catch (error) {}
  };

  return (
    <>
      <div className="home-container2">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>
      <HomeNavbar />
      <div className="home-main-content2">
        <div class="container register-content col-md-10 ">
          <div class="row">
            <div class="col-md-12">
              <div class="p-3">
                <form
                  action="http://localhost:8081/student/register"
                  onSubmit={handleFormData}
                  method="post"
                >
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control r-form"
                        name="name"
                        placeholder="first name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control r-form"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input
                        type="password"
                        class="form-control r-form"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="date"
                        class="form-control r-form"
                        placeholder="Date Of Birth"
                        name="dob"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input
                        type="number"
                        class="form-control r-form"
                        placeholder="Mobile Number"
                        name="contact"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="studentId"
                        class="form-control r-form"
                        placeholder="Student ID"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="row mt-">
                      <div class="col-md-4">
                        <label class="register-file">
                          Choose file
                          <input
                            type="file"
                            id="inputTag"
                            class="form-control r-form"
                            ref={fileInput}
                            name="file"
                            placeholder="Clear Image of Fee Slip/ Id Card"
                          />
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="labels section-label">
                          Course
                          <select name="course " className="sec">
                            <option>Diploma</option>
                            <option>B.Tech</option>
                            <option>Dental</option>
                            <option>Unani</option>
                          </select>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="labels section-label2">
                          Branch
                          <select name="branch" className="sec">
                            <option>Computer</option>
                            <option>Electronic</option>
                            <option>Electricale</option>
                            <option>Civil</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control r-form"
                        name="country"
                        placeholder="Country"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control r-form"
                        name="state"
                        placeholder="State"
                      />
                    </div>
                  </div>

                  <div class="mt-3 text-center">
                    <NavLink to={"/waiting"}>
                      <button
                        class="btn btn-primary profile-button"
                        type="submit"
                      >
                        Register
                      </button>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
