const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

const teacherSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar : {type: String, required: true},
    password: { type: String, required: true },
    roletitle : {type:String,required:true},
    role: { type: String, default: "teacher" },
    qualification: {
        type: String,
        default: "other"
    },
    age:{type:Number,required:true},
    bio: { type: String, default: "" },
    contact:{
        type:String,
        required:true
    }
})
// method to generate token 
teacherSchema.methods = {
    jwtToken() {
        return JWT.sign({ id: this._id, email: this.email }, process.env.SECRET, {
            expiresIN: '24h'
        })
    }
}

// to hash password before saving it
teacherSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})

const TeacherModel = mongoose.model("teacher", teacherSchema) // USER MODEL

module.exports = TeacherModel