import { NavLink, useNavigate } from "react-router-dom";
import "../Style/Login.css";
import "../../App.css";
import image from "../../assets/Images/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin as userLoginAction } from "../../redux/userSlice";
import HomeNavbar from "../Navbar/HomeNavbar";

export const StudentLogin = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const handleLogin = () => {
    dispatch(userLoginAction(userLogin, navigate, "student"));
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div className="home50">
        <div className="home-container">
          <img src={image.jmi1} alt="jmi1" />
        </div>
        <HomeNavbar />
        <div className="home-main-content2">
          <div className="row ">
            <div className="col">
              <div className="main-content2">
                <img src={image.jmilogo} alt="jmi" />
                <h1>Jamia Millia Islamia</h1>
                <p>
                  Jamia Vision. Strive to foster the goals of building a secular
                  and modern system of integrated education for sustainable
                  development of society and better
                </p>
              </div>
            </div>
            <div className="login card-content002">
              <div className="login_form ">
                {/* <div className="col"> */}
                <input
                  type="email"
                  value={userLogin.email}
                  className="form-login !text-black active:text-green border-2 border-green"
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, email: e.target.value });
                  }}
                  name="email"
                  placeholder="email"
                  required
                />
                <input
                  type="password"
                  value={userLogin.password}
                  className="form-login text-black"
                  onChange={(e) => {
                    setUserLogin({ ...userLogin, password: e.target.value });
                  }}
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  name="button"
                  className="login01 form-login cursor-pointer"
                  onClick={handleLogin}
                  value="Login"
                />
                {/* </div> */}
              </div>
              <div className="form_bottom_links">
                <div className="create_account student-button">
                  <NavLink to={"/teacherlogin"}>Teacher Login</NavLink>
                </div>
                <div className="need_help">
                  <NavLink to={"/register"}>Register</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
