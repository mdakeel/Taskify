const TeacherModel = require("../model/Teacher.model");
const { UserModel } = require("../model/User.model");

const validateRole = (role)=> async(req,res,next) => {
    console.log(role)
    const {userid} = req.body;
    try {
        let USERDATA;
        if(role == "teacher") { 
            USERDATA  = await TeacherModel.findOne({_id:userid,role:"teacher"});
        }else if (role == "admin") { 
            USERDATA = await UserModel.findOne({_id,role:"admin"})
        }else if(role == "student") {
            USERDATA = await UserModel.findOne({_id,role:"student"})
        }
        if(USERDATA){
          return  next()
        }else{
            res.status(404).send({msg:"User not Authenticated to perform this action"})
        }
    } catch (error) {
        res.status(500).send({msg:error.messgae})
    }
}

module.exports = {validateRole}