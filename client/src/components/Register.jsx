import { NavLink } from "react-router-dom";
import "../App";
import "./Style/StudentCss/Login.css";
import { Navbar } from "./Navbar";
import { useState } from "react";

export const Register = () => {
  const[userLogin,setUserLogin]=useState({
    user:"",
    email:"",
    password:""
  })

  const handleRegister=async()=>{
    const resp=await fetch("http://localhost:8081/user/signup",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(userLogin)
    })
    if(resp.status==200){
      console.log("register Success")
    }else{
      console.log("Error while register")
    }
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
                value={userLogin.user}
                onChange={(e)=>{setUserLogin({...userLogin,user:e.target.value})}}
              />
              <input type="email" name="email" placeholder="Email" required />
              <input   value={userLogin.password}
                onChange={(e)=>{setUserLogin({...userLogin,password:e.target.value})}} type="password" name="password" placeholder="Password" />
<button onClick={handleRegister}>Register</button>
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
