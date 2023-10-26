const { UserModel } = require("../model/User.model")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const getDataURI = require("../utils/getDataURI")
const cloudinary = require("cloudinary")
const { StudentModel } = require("../model/Student.model")

// to register user
exports.userSignUp = async(req,res) => {
    console.log(req.body)
    const file = req.file
    const fileURI = getDataURI(file)
    console.log(req.body)
    
   

    try {
        const mycloud=await cloudinary.v2.uploader.upload(fileURI.data.content,{
            resource_type:"image"
        })
            
        const newUser=await UserModel({...req.body,avatar:mycloud.url});
        await newUser.save()
        res.status(200).send({
            msg:"SignUp Success"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.userLogin = async(req,res) => {
    const {email,password} = req.body;
    try {
        const getuserData=await UserModel.findOne({email}).select("+password");
        if(getuserData && getuserData.email ){
            const result= await bcrypt.compare(password,getuserData.password)
            const geneRatedToken=await getuserData.jwtToken()
           if(result){
            res.status(200).send({msg:"User login Successfully",token:geneRatedToken,role:getuserData.role,userdetails:getuserData})
           }else{
            res.status(404).send({msg:"Wrong Password,Please try again!"})
           }
        }else{  
            res.status(404).send({msg:"No Account Found Associated with this email"})
        }

        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}



// get my details

exports.getUserDetails =async(req,res)=>{
    const userId  = req.body.userid
            try {
                const userData = await StudentModel.findOne({_id:userId})
                res.status(200).send({msg:"User Details Successfully Fetched",data:userData})
            } catch (error) {
                res.status(501).send({msg:error.message})
            }
}