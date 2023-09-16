const express =  require("express");
const { TeacherLogin } = require("../controller/teacher.Controller");


const teacherRoute  = express.Router();

// teacher login

teacherRoute.post("/login",TeacherLogin) 



module.exports = {
    teacherRoute
}