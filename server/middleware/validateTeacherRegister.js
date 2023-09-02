exports.validateTeacherRegister = (req,res,next) =>{
    const { contact,age,qualification,roletitle,name,email,avatar,password} = req.body || {}
    if(!contact || !age || !qualification || !roletitle || !name || !email || !password || !avatar) {
        return res.status(404).send({msg:"All Input fields are required"})
    }
    next()
}