const AssignedTask = require("../model/AssignedTask");

exports.validateTaskOwnerShip =async(req,res,next)=>{
    // user id through authentication middleware
    const userID= req.body.userid;
    const taskId = req.params.id
    if(userID){
        const taskDetails = await AssignedTask.findOne({_id:taskId})
        if(taskDetails){
            if ( taskDetails.assignedTo == userID){
                req.body.taskid = taskId
                next()
            }else{
                res.status(404).send({msg:"You don't have access to this task"})
            }
        }else{
            res.status(404).send({msg:"Task not found"})
        }
    }else{
        res.status(200).send({msg:"You are not authenticated"})
    }
}