const express = require("express");
const {
  studentRegister,
  unverifiedStudents,
  verifyStudents,
  getStudentById,
  studentLogin,
  getallStudents,
} = require("../controller/student.Controller");
const singleUpload = require("../middleware/singleUpload");

const studentRoute = express.Router();

// to create a student
studentRoute.post("/register", singleUpload, studentRegister);

// get unverified students list
studentRoute.get("/unverified", unverifiedStudents);
// to get all student which are verified

studentRoute.get("/verified", getallStudents);

// get student by id
studentRoute.get("/:_id", getStudentById);

// verify student
studentRoute.patch("/verify/:studentId", verifyStudents);

// to login student
studentRoute.post("/login", studentLogin);

module.exports = studentRoute;
