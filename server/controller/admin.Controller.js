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

//get all data