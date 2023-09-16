const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs")


const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    avatar: {type:String,default:""},
    password: { type: String, required: true },
    role: { type: String, default: "student" },
    course: {
        type: String,
        required: true
    },
    branch : {
        type:String,required:true
    },
    proof: { 
        type:String,
        required:true
    },
    contact : {
        type:String,
        required:true
    },
    studentId : {
        type:String,
        required:true
    },
    dob :{
        type:String,
        required:true
    },
    isVerified : {
        type:Boolean,
        default:false
    },
    country: {
        type:String,
        required:true
    },
    state:  {
        type:String,
        required:true
    }

},{
    timestamps: true

})


// method to generate token 
studentSchema.methods = {
    jwtToken() {
        return JWT.sign({ id: this._id, email: this.email }, process.env.SECRET, {
            expiresIn: '24h'
        })
    }
}

// to hash password before saving it
studentSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})

const StudentModel = mongoose.model("student", studentSchema) // USER MODEL

module.exports = {StudentModel }