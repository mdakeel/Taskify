import { NavLink } from "react-router-dom";
import "../App";
import "./Style/StudentCss/Login.css";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice";
export const Register = () => {
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = () => {
    dispatch(userRegister(userLogin))
  }
  return (
    <>
      <div className="login_body">
        <img src="../../../assets/bgimg.png" alt="" />
        <Navbar />
        <div className="register">
          <div className="register_form">
            <div className="col">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={userLogin.username}
                onChange={(e) => { setUserLogin({ ...userLogin, username: e.target.value }) }}
              />
              <input type="email" name="email" placeholder="Email" required value={userLogin.email}
                onChange={(e) => { setUserLogin({ ...userLogin, email: e.target.value }) }} />
              <input value={userLogin.password}
                onChange={(e) => { setUserLogin({ ...userLogin, password: e.target.value }) }} type="password" name="password" placeholder="Password" />
              <input type="submit" onClick={handleRegister} value={"Register"} />
            </div>
          </div>
          <div className="form_register_bottom_links">
            <div className="create_account">
              <h2>
                <NavLink to={"/"}> Login</NavLink>
              </h2>
            </div>
            <div className="need_help">
              <h2>
                <NavLink to={"/need_help"}> Need help?</NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
