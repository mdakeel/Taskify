import { createRef, useState } from "react";
import "../Style/Login.css";
import "../helpers/Dashboard";
import image from "../../assets/Images/image";
import { NavLink } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

export const Register = () => {
  const fileInput = createRef();
  const [formData, setformData] = useState({
    email: "",
    name: "",
    password: "",
    dob: "",
    contact: "",
    studentId: "",
    file: "",
    course: "",
    branch: "",
    state: "",
    country: "",
  });
  const handleFormData = async (e) => {
    e.preventDefault();
    const newData = new FormData();

    for (let key in formData) {
      if (key !== "file") {
        newData.append(key, formData[key]);
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
                <form>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control r-form"
                        name="name"
                        placeholder="first name"
                        value={formData.name}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, name: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control r-form"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, email: e.target.value };
                          })
                        }
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
                        value={formData.password}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, password: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="date"
                        class="form-control r-form"
                        placeholder="Date Of Birth"
                        name="dob"
                        value={formData.dob}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, dob: e.target.value };
                          })
                        }
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
                        value={formData.contact}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, contact: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="studentId"
                        class="form-control r-form"
                        placeholder="Student ID"
                        value={formData.studentId}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, studentId: e.target.value };
                          })
                        }
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
                          <select
                            name="course "
                            className="sec"
                            value={formData.course}
                            onChange={(e) =>
                              setformData((prev) => {
                                return { ...prev, course: e.target.value };
                              })
                            }
                          >
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
                          <select
                            name="branch"
                            className="sec"
                            value={formData.branch}
                            onChange={(e) =>
                              setformData((prev) => {
                                return { ...prev, branch: e.target.value };
                              })
                            }
                          >
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
                        value={formData.country}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, country: e.target.value };
                          })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control r-form"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, state: e.target.value };
                          })
                        }
                      />
                    </div>
                  </div>

                  <div class="mt-3 text-center">
                    <button
                      onClick={(event) => handleFormData(event)}
                      class="btn btn-primary profile-button"
                    >
                      Register
                    </button>
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
