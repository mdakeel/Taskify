const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "teacher"
    },
    deadline: {
        type: Date,
        required: true
    }

})

const TaskModel = mongoose.model("task", taskSchema) // USER MODEL

module.exports = {TaskModel};