const express = require("express");
const { createTask, getTaskofStudent } = require("../controller/task.Controller");


const taskRoute = express.Router();


// create A Task
taskRoute.post("/create",createTask)

// get task of specif student using student id
taskRoute.get("/",getTaskofStudent)