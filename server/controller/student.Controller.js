const { StudentModel } = require("../model/Student.model");
const getDataURI = require("../utils/getDataURI")
const cloudinary = require("cloudinary")



// to register student
exports.studentRegister = async(req,res) => {
    const { name,email,password,studentId,contact,course,branch,dob,country,state} = req.body;
    if(!name || !email || !password  || !studentId  || !contact || !course || !branch  || !dob) {
           return res.status(404).send({msg:"All Input Fields are required"})
     }
     console.log(req)
     console.log(req.file)
    const file = req.file
    const fileURI = getDataURI(file)
    
    try {
        const mycloud=await cloudinary.v2.uploader.upload(fileURI.data.content,{
            resource_type:"image"
        })
            
        const newStudent=await StudentModel({ name,email,password,studentId,country,state,contact,course,branch,dob,proof:mycloud.url} );
        await newStudent.save()
        res.status(200).send({
            msg:"You have been registered successfully"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}


// get all the unverified students

exports.unverifiedStudents=async(req,res)=>{
    try {
        const allStudents= await StudentModel.find({isVerified:false}).select("-password");
        res.status(200).send({msg:"Data Fetched Successfully",data:allStudents})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}


// verify student 

exports.verifyStudents = async(req,res) =>  {
    const studentId = req.params.studentId
    try {
        const studentData= await StudentModel.findOne({isVerified:false,_id:studentId})
        studentData.isVerified = true;
        await studentData.save();
        res.status(200).send({msg:"Student has been verified Successfully"})

    } catch (error) {
        res.status(501).send({msg:error.message})
        
    }
}