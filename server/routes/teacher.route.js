const express =  require("express");
const { TeacherLogin, taskCreatedByTeacher, getAssignedTaskById } = require("../controller/teacher.Controller");
const { Authentication } = require("../middleware/Authentication");
const { validateRole } = require("../middleware/validateRole");


const teacherRoute  = express.Router();

// teacher login

teacherRoute.post("/login",TeacherLogin) 

// Task which is assigned by Teacher

teacherRoute.get("/task/assigned",Authentication,validateRole("teacher"),taskCreatedByTeacher)

// Task by ID
teacherRoute.get("/task/view/:id",Authentication,validateRole("teacher"),getAssignedTaskById)

module.exports = {
    teacherRoute
}