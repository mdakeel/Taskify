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
