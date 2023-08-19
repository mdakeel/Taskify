import { NavLink } from "react-router-dom";
import "./Style/StudentCss/Login.css";
import "../App";

import { Navbar } from "./Navbar";
import { useState } from "react";

export const Login = () => {
<<<<<<< HEAD
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
=======
  const[userLogin,setUserLogin]=useState({
    email:"",
    password:""
  })

  const handleLogin=async()=>{
    const resp=await fetch("http://localhost:8081/user/login",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    if(resp.status==200){
      console.log("Login Success")
    }else{
      console.log("Error while login")
    }
  }
>>>>>>> 14670d0153a99591a9c35662f9b3ce4fa4f5be32
  return (
    <div className="login_body">
      <img src="../../../assets/bgimg.png" alt="" />
      <Navbar />
      <div className="login">
        <div className="login_form">
            <div className="col">
<<<<<<< HEAD
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
                value={userLogin.email}
                onChange={(e) => {
                  setUserLogin({ ...userLogin, email: e.target.value });
                }}
                name="password"
                placeholder="Password"
              />
              <input
                type="submit"
                name="button"
                // onClick={handleLogin}
                value="Login"
              />
=======
              <input type="email" value={userLogin.email} onChange={(e)=>{setUserLogin({...userLogin,email:e.target.value})}} name="email" placeholder="email" required />
              <input type="password"  value={userLogin.password} onChange={(e)=>{setUserLogin({...userLogin,password:e.target.value})}} name="password" placeholder="Password" />
              <button onClick={handleLogin}>Submit</button>
>>>>>>> 14670d0153a99591a9c35662f9b3ce4fa4f5be32
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
