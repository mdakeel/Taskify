exports.TaskValidation = (req,res,next) =>{
    const  { title, description,deadline,assigned} = req.body || {}
        if(!title || !description || !deadline || !assigned) {
            return res.status(404).send({msg:"All Input fields are required"})
        }
        next()
}