const express = require("express");
const { studentRegister, unverifiedStudents, verifyStudents, getStudentById, studentLogin } = require("../controller/student.Controller");
const singleUpload = require("../middleware/singleUpload");


const studentRoute = express.Router();

// to create a student
studentRoute.post("/register",singleUpload,studentRegister) 

// get unverified students list
studentRoute.get("/unverified",unverifiedStudents)

// get student by id
studentRoute.get("/:_id",getStudentById)

// verify student
studentRoute.patch("/verify/:verifyStudent",verifyStudents)

// to login student
studentRoute.post("/login",studentLogin)





module.exports = studentRoute

