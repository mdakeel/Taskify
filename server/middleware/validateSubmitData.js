export const validateSubmitTaskData = (req,res,next) =>{
        if(!task || !assignedTo || !assignedBy) {
            return res.status(404).send({msg:"All Input fields are required"})
        }
        next()
}