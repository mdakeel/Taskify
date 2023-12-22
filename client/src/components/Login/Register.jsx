import { createRef, useState } from "react";
import "../Style/Login.css";
import "../helpers/Dashboard";
import image from "../../assets/Images/image";
import { useNavigate, redirect } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";
import { classNames } from "../helpers";
import toast, { Toaster } from "react-hot-toast";

export const Register = () => {
  const fileInput = createRef();
  const navigate = useNavigate();

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
      const resp = await fetch("http://localhost:8082/student/register", {
        method: "POST",
        body: newData,
      });

      if (resp.status !== 200) {
        toast.error(
          "There's some Error while Creating your account, Please Try Again!"
        );
      } else {
        toast.success("You are Registered Successfully");
        navigate("/waiting");
      }
    } catch (error) {
      toast.error(
        "There's some Error while Creating your account :( Try Again!"
      );
    }
  };
  const [fileValue, setFileValue] = useState();
  const onFileChange = () => {
    setFileValue(fileInput?.current?.files[0] || "");
  };

  return (
    <>
      <div className="home-container2">
        <img src={image.jmi1} alt="jmi1 img" />
      </div>
      <Toaster />
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
                        required
                        name="name"
                        placeholder="First name"
                        className={classNames(
                          "form-control r-form border-[2px]",
                          formData.name.length > 3
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        className={classNames(
                          "form-control r-form border-[2px]",
                          formData.email.length > 6
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        className={classNames(
                          "form-control r-form border-[2px]",
                          formData.password.length > 5
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        className={classNames(
                          "form-control r-form cursor-pointer w-full",
                          "border-[2px]",
                          formData.dob
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        className={classNames(
                          "form-control r-form border-[2px]",
                          formData.contact.length > 9
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        className={classNames(
                          "form-control r-form border-[2px]",
                          formData.studentId.length > 3
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
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
                        <label
                          className={classNames(
                            "register-file !text-[12px] p-2 !rounded-sm cursor-pointer border-[1px] ",
                            fileValue ? "border-green-500" : "border-red-500"
                          )}
                        >
                          Attach ID/Proof
                          <input
                            type="file"
                            id="inputTag"
                            className="form-control r-form"
                            ref={fileInput}
                            name="file"
                            onChange={onFileChange}
                            required
                            placeholder="Clear Image of Fee Slip/ Id Card"
                          />
                        </label>
                      </div>
                      <div class="col-md-4">
                        <label class="labels section-label !text-[16px]">
                          Course
                          <select
                            name="course "
                            className={classNames(
                              "sec text-black cursor-pointer text-[12px] p-2 rounded-sm",
                              "border-[2px]",
                              formData.course
                                ? "border-[2px] border-green-500"
                                : "border-red-500"
                            )}
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
                        <label class="labels section-label2 !text-[16px]">
                          Branch
                          <select
                            name="branch"
                            className={classNames(
                              "sec text-black cursor-pointer text-[12px] p-2 rounded-sm",
                              "border-[2px]",
                              formData.branch
                                ? "border-[2px] border-green-500"
                                : "border-red-500"
                            )}
                            value={formData.branch}
                            required
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
                        className={classNames(
                          "form-control r-form",
                          "border-[2px]",
                          formData.country
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
                        required
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
                        name="state"
                        placeholder="State"
                        required
                        className={classNames(
                          "form-control r-form",
                          "border-[2px]",
                          formData.state
                            ? "border-[2px] border-green-500"
                            : "border-red-500"
                        )}
                        value={formData.state}
                        onChange={(e) =>
                          setformData((prev) => {
                            return { ...prev, state: e.target.value };
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-center w-full px-2">
                    <button
                      onClick={(event) => handleFormData(event)}
                      className="btn btn-primary profile-button min-w-full m-0 col-md-12
                      "
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
