import { NavLink, useNavigate } from "react-router-dom";
import "./Style/StudentCss/Login.css";
import "../App";

import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin as userLoginAction } from "../redux/userSlice";
export const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector((state)=>state)
  const handleLogin = () =>  {
    dispatch(userLoginAction(userLogin,navigate))
  }
  useEffect(()=>{
    console.log(state)
  },[state])
  return (
    <div className="login_body">
      <img src="../../../assets/bgimg.png" alt="" />
      <Navbar />
      <div className="login">
        <div className="login_form">
            <div className="col">
              <input
                type="email"
                value={userLogin.email}
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
                onChange={(e) => {
                  setUserLogin({ ...userLogin, password: e.target.value });
                }}
                name="password"
                placeholder="Password"
              />
              <input
                type="submit"
                name="button"
                onClick={handleLogin}
                value="Login"
              />
            </div>
        </div>
        <div className="form_bottom_links">
          <div className="create_account">
            <h2>
              <NavLink to={"/register"}>Create Account</NavLink>
            </h2>
          </div>
          <div className="need_help">
            <h2>
              <NavLink to={"/need_help"}>Need Help?</NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
