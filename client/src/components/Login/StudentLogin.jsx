import { NavLink, useNavigate } from "react-router-dom";
import "../Style/StudentCss/Login.css";
import "../../App.css";
import image from "../../assets/Images/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin as userLoginAction } from "../../redux/userSlice";

export const StudentLogin = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector((state)=>state)
  const handleLogin = () =>  {
    dispatch(userLoginAction(userLogin,navigate,"student"))
  }
  useEffect(()=>{
    console.log(state)
  },[state])
  return (

    <>
    <div className="home-container"> 
    <img src={image.jmi1} alt="jmi1" />
    </div>
      <div className="home-main-content2">
        <div className="home-navbar">
        <div className="home-logo">
            <img src={image.taskify} alt="taskify" />
          </div>
          <div className="home-nav_items">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/Studentlogin">login</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="row " >
          <div className="col">
            <div className="jmi-logo"></div>
            <div className="main-content">
              <h1>Jamia Millia Islamia</h1>
              <p>
              Jamia Vision. Strive to foster the goals of building 
              a secular and modern system of integrated education 
              for sustainable development of society and better
              </p>
            </div>
          </div>
          <div className="login card-content002">
        <div className="login_form ">
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
                className="login01"
                onClick={handleLogin}
                value="Login"
              />
            </div>
        </div>
        <div className="form_bottom_links">
          <div className="create_account student-button">
           
              <NavLink to={"/teacherlogin"}>Teacher Login</NavLink>
           
          </div>
          <div className="need_help">
           
              <NavLink to={"/need_help"}>Need Help?</NavLink>
       
          </div>
        </div>
      </div>
    </div>
      
      </div>
  

    </>
  );
};
