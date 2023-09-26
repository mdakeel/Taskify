import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"



export const useRedirectUser = () =>{
  const navigate = useNavigate()
  const state = useSelector(state => state.user);

  return ()=>{
    if(state && state.auth) {
        if(state.role == "student") {
            navigate("/studentdashboard")
          }else if(state.role == "admin"){
            navigate("/admindashboard")
          }else if(state.role == "teacher") {
            navigate("/teacherdashboard")
          }
    }}
}
