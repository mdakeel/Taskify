const express = require("express");
const { createTask, getTaskofStudent, submitTask } = require("../controller/task.Controller");
const { validateRole} = require("../middleware/validateRole");
const { getAllTask } = require("../controller/admin.Controller");
const { Authentication } = require("../middleware/Authentication");
const { TaskValidation } = require("../middleware/TaskValidation");
const { TaskModel } = require("../model/Task.model");
const { validateTaskOwnerShip } = require("../middleware/validateTaskOwnership");

const taskRoute = express.Router();


// create A Task
taskRoute.post("/create",Authentication,validateRole("teacher"),TaskValidation,createTask)

// get task of specific student using student id
taskRoute.get("/",Authentication,getTaskofStudent)

// to submit task required: attachedLink,userid,(id:task id as param)
taskRoute.post("/submit/:id",Authentication,validateTaskOwnerShip,submitTask)


module.exports = {
    taskRoute
}

