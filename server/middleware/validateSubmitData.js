export const validateSubmitTaskData = (req,res,next) =>{
    const  { attachedLink, taskID,} = req.body || {}
        if(!task || !assignedTo || !assignedBy || !attachedLink) {
            return res.status(404).send({msg:"All Input fields are required"})
        }
        next()
}