const express = require("express");
const { userSignUp, userLogin, getUserDetails } = require("../controller/user.Controller");
const { signupValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");
const singleUpload = require("../middleware/singleUpload");
const { Authentication } = require("../middleware/Authentication");


const userRoute = express.Router();


userRoute.post("/signup",singleUpload,userSignUp);

userRoute.post("/login",loginValidator,userLogin)

// to get student details
userRoute.get("/details",Authentication,getUserDetails)
module.exports ={
    userRoute
}