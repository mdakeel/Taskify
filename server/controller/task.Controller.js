const AssignedTask = require("../model/AssignedTask");
const { TaskModel } = require("../model/Task.model");

// to create a task
exports.createTask =async(req,res)=> {
    const {title,description,assigned,userid,deadline }  = req.body;
    
    try {
        const createdTask = await TaskModel({title,description,createdBy:userid,deadline})
        await createdTask.save();
        if(assigned?.length >= 1) {
            for(let studentID of assigned){
                const assignTask = await AssignedTask({task:createdTask._id,assignedTo:studentID,assinedBy:userid})
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
            const taskofStudent = await AssignedTask.find({assignedTo:userid});
            res.status(200).send({msg:"Student Task Fetched Successfully",data:taskofStudent})
    } catch (error) {
            res.status(500).send({msg:error.message})

    }
}