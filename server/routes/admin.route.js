const express = require("express");
const { teacherSignup } = require("../controller/teacher.Controller");
const { validateTeacherRegister } = require("../middleware/validateTeacherRegister");
const { getAllTeacher, teacherData, getAllUser, studentData } = require("../controller/admin.Controller");


const adminRoute  = express.Router();

// to create a teacher
adminRoute.post("/teacher",validateTeacherRegister,teacherSignup) 

// get all teachers
adminRoute.get("/teachers",getAllTeacher) 

// get specific teacher data through id
adminRoute.get("/teacher/:_id",teacherData) 

// get all students
adminRoute.get("/students",getAllUser)

// get specific student data through id
adminRoute.get("/student/:_id",studentData) 

module.exports = {
    adminRoute
}