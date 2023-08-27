export const validateTeacherRegister = (req,res,next) =>{
    const { task,contact,age,qualification,roletitle,name,email,avatar,password} = req.body || {}
    if(!task || !contact || !age || !qualification || !roletitle || !name || !email || !password || !avatar) {
        return res.status(404).send({msg:"All Input fields are required"})
    }
    next()
}