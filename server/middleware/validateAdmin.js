import { UserModel } from "../model/User.model";

export const validateAdmin =async(req,res,next)=>{
    const userid  = req.body.id || "";

    try {
        const resp = await UserModel.findOne({_id:userid});
        if(!resp) res.status(404).send({msg:"user not found"})
        if(resp && resp.role == "admin"){
            next()
        }else{
            res.status(404),send({msg:"You are not allowed to perform this action"})
        }
        
    } catch (error) {
        
    }
}