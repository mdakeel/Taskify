const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/user.route");
const connectDatabase = require("./config/db");
const { adminRoute } = require("./routes/admin.route");
const { taskRoute } = require("./routes/task.route");
const { teacherRoute } = require("./routes/teacher.route");
require("dotenv").config()

const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/user",userRoute)  // user route
app.use("/admin",adminRoute) //admin route
app.use("/task",taskRoute) // taskRoute
app.use("/teacher",teacherRoute) // teacher route

connectDatabase() // connecting to database

app.listen(process.env.PORT,()=>{
    console.log("Server Started on PORT NO:",process.env.PORT)
})