const mongoose = require("mongoose");

const MyTaskSchema = mongoose.Schema({

    task: {
        type: mongoose.Types.ObjectId,
        ref: "task"
    },
    submitDate: {
        type: Date,
        required: true
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
        ref: "user"
    }

})

const MyTaskModel = mongoose.model("mytask", MyTaskSchema) // USER MODEL

module.exports = MyTaskModel;