const { TaskModel } = require("../model/Task.model")
const TeacherModel  =  require("../model/Teacher.model")
const  { UserModel } = require("../model/User.model")


// get all user data
exports.getAllUser=async(req,res)=>{
        try {
            const allUser= await UserModel.find({role:"student"}).select("-password");
            res.status(200).send({msg:"All Students Data Fetched Successfully",data:allUser})
        } catch (error) {
            res.status(501).send({msg:error.message})
        }
}

//get all teacher data

exports.getAllTeacher=async(req,res)=>{
    try {
        const allUser= await TeacherModel.find().select("-password");
        res.status(200).send({msg:"All Teacher Data Fetched Successfully",data:allUser})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// get all Task Data

exports.getAllTask=async(req,res)=>{
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

// get single Teacher Data

exports.teacherData=async(req,res)=>{
    const _id = req.params._id
    try {
        const singleTeacherData= await TeacherModel.findOne({_id}).select("-password");
        res.status(200).send({msg:"Data Fetched Successfully",data:singleTeacherData})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// get single Student Data

exports.studentData=async(req,res)=>{
    const _id = req.params._id
    try {
        const singleStudentData= await UserModel.findOne({_id,role:"student"}).select("-password");
        res.status(200).send({msg:"Data Fetched Successfully",data:singleStudentData})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}