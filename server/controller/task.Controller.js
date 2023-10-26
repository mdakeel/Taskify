const AssignedTask = require("../model/AssignedTask");
const { TaskModel } = require("../model/Task.model");

// to create a task
exports.createTask =async(req,res)=> {
    const {title,description,assigned,userid,deadline,maxpoint}  = req.body;
    
    try {
        const createdTask = await TaskModel({title,description,createdBy:userid,deadline,maxpoint})
        await createdTask.save();
        if(assigned?.length >= 1) {
            for(let studentID of assigned){
                const assignTask = await AssignedTask({task:createdTask._id,assignedTo:studentID,assignedBy:userid})
                await assignTask.save()
            }
        }

        res.status(200).send({msg:"Task has been created Successfully"})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}


// get task of specific user
exports.getTaskofStudent = async(req,res) => {
    const {userid} = req.body
    try {
            const taskofStudent = await AssignedTask.find({assignedTo:userid}).populate("task").populate("assignedBy");
            res.status(200).send({msg:"Student Task Fetched Successfully",data:taskofStudent})
    } catch (error) {
            res.status(500).send({msg:error.message})

    }
}


// submit task
exports.submitTask = async(req,res)=>{
        const {taskid,userid,attachedLink} = req.body;
        if(!attachedLink) return res.status(404).json({msg:"Attached link not found"})
        try {
            const taskDetails = await AssignedTask.findOneAndUpdate({_id:taskid},{
                attachedLink,
                submitStatus:true
            });
            res.status(200).send({msg:"Task Updated Successfully",taskDetails})

        } catch (error) {
                res.status(500).send({msg:error.message})            
        }
}