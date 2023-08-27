export const validateSubmitTaskData = (req,res,next) =>{
    const  { title, description,deadline} = req.body || {}
        if(!title || !description || !deadline ) {
            return res.status(404).send({msg:"All Input fields are required"})
        }
        next()
}