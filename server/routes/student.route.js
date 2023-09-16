const express = require("express");
const { studentRegister, unverifiedStudents, verifyStudents } = require("../controller/student.Controller");
const singleUpload = require("../middleware/singleUpload");


const studentRoute = express.Router();


studentRoute.post("/register",singleUpload,studentRegister) // to create a student

// get unverified students list
studentRoute.get("/unverified",unverifiedStudents)

// verify student
studentRoute.patch("/verify/:verifyStudent",verifyStudents)





module.exports = studentRoute

