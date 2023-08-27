export const validateSubmitTaskData = (req,res,next) =>{
    const  { attachedLink, task,assignedTo,assignedBy} = req.body || {}
        if(!task || !assignedTo || !assignedBy || !attachedLink) {
            return res.status(404).send({msg:"All Input fields are required"})
        }
        next()
}