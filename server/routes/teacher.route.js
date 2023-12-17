const express = require("express");
const {
  TeacherLogin,
  taskCreatedByTeacher,
  getAssignedTaskById,
  teacherDashboardDetails,
} = require("../controller/teacher.Controller");
const { Authentication } = require("../middleware/Authentication");
const { validateRole } = require("../middleware/validateRole");

const teacherRoute = express.Router();

//* teacher login

teacherRoute.post("/login", TeacherLogin);

//* Task which is assigned by Teacher

teacherRoute.get(
  "/task/assigned",
  Authentication,
  validateRole("teacher"),
  taskCreatedByTeacher
);

//* Task by ID
teacherRoute.get(
  "/task/view/:id",
  Authentication,
  validateRole("teacher"),
  getAssignedTaskById
);

//* teacher dashboard details
teacherRoute.get(
  "/details",
  Authentication,
  validateRole("teacher"),
  teacherDashboardDetails
);

module.exports = {
  teacherRoute,
};
