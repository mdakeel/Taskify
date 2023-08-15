const express = require("express");
const { userSignUp, userLogin } = require("../controller/user.Controller");
const { signupValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");


const userRoute = express.Router();


userRoute.post("/signup",signupValidator,userSignUp);

userRoute.post("/login",loginValidator,userLogin)


module.exports ={
    userRoute
}