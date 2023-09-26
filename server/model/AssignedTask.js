const mongoose = require("mongoose");

const MyTaskSchema = mongoose.Schema({
    task: {
        type: mongoose.Types.ObjectId,
        ref: "task"
    },
    submitDate: {
        type: Date,
        default:Date.now()
    },

    points: {
        type: Number,
        default: 0
    },
    evalStatus: {
        type: Boolean,
        default: false
    },

    assignedBy: {
        type: mongoose.Types.ObjectId,
        ref: "teacher"
    },
    assignedTo: {
        type: mongoose.Types.ObjectId,
        ref: "student"
    },
    attachedLink : {
        type:String,
        default:""
    },
    submitStatus : {
        type:Boolean,
        default:false
    }

},{timestamps: true})

const AssignedTask = mongoose.model("mytask", MyTaskSchema) // USER MODEL

module.exports = AssignedTask;