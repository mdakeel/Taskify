const jwt=require("jsonwebtoken");
const { StudentModel } = require("../model/Student.model");
const StudentAuthenticaion=async(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded=await jwt.verify(token,process.env.SECRET)
        if(decoded?.id.length>0){
            req.body.userid=decoded.id;
            const studentData= await StudentModel.findOne({_id:decoded.id});
            if(studentData && studentData.isVerified){
                next()  
            }else{
                res.status(404).send({msg:"Your application is in pending for approval"})
            }
            
        }else{
            res.status(404).send({"msg":"token Exprired"})
        }
    }else{
        res.status(404).send({"msg":"User is not Authenticated",token})
    }
}

module.exports={StudentAuthenticaion}