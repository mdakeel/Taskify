const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/user.route");
const connectDatabase = require("./config/db");
const { adminRoute } = require("./routes/admin.route");
require("dotenv").config()

const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/user",userRoute)  // user route
app.use("/admin",adminRoute) //admin route

connectDatabase() // connecting to database

app.listen(process.env.PORT,()=>{
    console.log("Server Started on PORT NO:",process.env.PORT)
})