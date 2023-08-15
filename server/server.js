const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/user.route");
const connectDatabase = require("./config/db");
require("dotenv").config()

const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route

connectDatabase() // connecting to database

app.listen(process.env.PORT,()=>{
    console.log("Server Started on PORT NO:",process.env.PORT)
})