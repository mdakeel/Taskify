import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userAuth = localStorage.getItem("TOKEN");
const initialState = {
  auth: userAuth ? true : false,
  role: localStorage.getItem("role") || "user",
  signup: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginSuccess(state, action) {
      return { ...state, auth: true, role: action.payload };
    },
  },
});

export const { loginFailed, loginSuccess, signupFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;

export function userRegister(userLogin) {
  return async function (dispatch, getState) {
    try {
      const resp = await fetch("http://localhost:8081/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      if (resp.status == 200) {
        console.log("register Success");
        dispatch({ type: "anything", payload: "doesnt matter" });
      } else {
        console.log("Error while register");
      }
    } catch (error) {
      console.log("erro");
      dispatch({ type: "anything", payload: "doesnt matter" });
    }
  };
}
export function userLogin(userLogin, navigate, role) {
  return async function (dispatch, getState) {
    try {
      const resp = await fetch(`http://localhost:8081/${role}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      const data = await resp.json();
      if (resp.status == 401 && data.status == "pending") {
        window.location.href = "http://localhost:3000/waiting";
        toast("Application is in pending");
      }
      if (resp.status == 200) {
        console.log("login Success");
        localStorage.setItem("token", data.token);
        const state = getState();
        // if(data.role == "user") {
        //   navigate("/studentdashboard")
        // }else if(data.role == "admin"){
        //   navigate("/admindashboard")
        // }else {
        //   navigate("/teacherdashboard")
        // }
        dispatch(loginSuccess(data.role));
      } else {
        console.log("Error while register");
      }
    } catch (error) {
      console.log("erro");
      dispatch({ type: "anything", payload: "doesnt matter" });
    }
  };
}
