exports.signupValidator = (req,res,next) =>{
    const {email,password,username} = req.body;

    if(req.body && email && password && username){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}