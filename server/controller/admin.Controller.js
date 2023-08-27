import { TaskModel } from "../model/Task.model";
import TeacherModel from "../model/Teacher.model";
import { UserModel } from "../model/User.model"


// get all user data
export const getAllUser=async(req,res)=>{
        try {
            const allUser= await UserModel.find();
            res.status(200).send({msg:"All User Data Fetched Successfully",data:allUser})
        } catch (error) {
            res.status(501).send({msg:error.message})
        }
}

//get all teacher data

export const getAllTeacher=async(req,res)=>{
    try {
        const allUser= await TeacherModel.find();
        res.status(200).send({msg:"All Teacher Data Fetched Successfully",data:allUser})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// get all Task Data

export const getAllTask=async(req,res)=>{
    try {
       const allUser= await TaskModel.find();
       res.status(200).send({msg:"All Tasks Data Fetched Successfully",data:allUser})
   } catch (error) {
       res.status(501).send({msg:error.message})
   }
}



// to register teacher
exports.teacherSignup = async(req,res) => {
    try {
        const newUser=await TeacherModel(req.body);
        await newUser.save()
        res.status(200).send({
            msg:"SignUp Success"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.teacherLogin = async(req,res) => {
    const {email,password} = req.body;
    try {
        const getuserData=await TeacherModel.findOne({email}).select("+password");
        if(getuserData && getuserData.email ){
            const result= await bcrypt.compare(password,getuserData.password)
            const geneRatedToken=await getuserData.jwtToken()
           if(result){
            res.status(200).send({msg:"User login Successfully",token:geneRatedToken,role:getuserData.role})
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

