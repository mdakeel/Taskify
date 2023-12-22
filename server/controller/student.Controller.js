const { StudentModel } = require("../model/Student.model");
const getDataURI = require("../utils/getDataURI");
const cloudinary = require("cloudinary");
const sendMail = require("../utils/sendMail");
const { registerMail, requestApproved } = require("../utils/msgMail");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

// to register student
exports.studentRegister = async (req, res) => {
  const {
    name,
    email,
    password,
    studentId,
    contact,
    course,
    branch,
    dob,
    country,
    state,
  } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    !studentId ||
    !contact ||
    !course ||
    !branch ||
    !dob
  ) {
    return res.status(404).send({ msg: "All Input Fields are required" });
  }
  console.log(req);
  console.log(req.file);
  const file = req.file;
  const fileURI = getDataURI(file);

  try {
    const mycloud = await cloudinary.v2.uploader.upload(fileURI.data.content, {
      resource_type: "image",
    });

    const newStudent = await StudentModel({
      name,
      email,
      password,
      studentId,
      country,
      state,
      contact,
      course,
      branch,
      dob,
      proof: mycloud.url,
    });
    await newStudent.save();
    sendMail(
      email,
      registerMail(name),
      "Confirmation of Your Request for Student Portal Access - Taskify"
    );
    res.status(200).send({
      msg: "You have been registered successfully",
    });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

// get all the unverified students

exports.unverifiedStudents = async (req, res) => {
  try {
    const allStudents = await StudentModel.find({ isVerified: false }).select(
      "-password"
    );
    res
      .status(200)
      .send({ msg: "Data Fetched Successfully", data: allStudents });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

// verify student

exports.verifyStudents = async (req, res) => {
  const studentId = req.params.studentId;
  try {
    const studentData = await StudentModel.findOne({ _id: studentId });
    studentData.isVerified = true;
    await studentData.save();
    sendMail(
      studentData.email,
      requestApproved(studentData.name),
      "Student Portal Access Granted"
    );
    res.status(200).send({ msg: "Student has been verified Successfully" });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

// cancel student approve
exports.cancelStudent = async (req, res) => {
  const studentID = req.params.studentId;
  try {
    const studentOne = await StudentModel.findOneAndDelete({ _id: studentID })
    sendMail(
      studentOne.email,
      'Your request to join student portal has been cancelled, please talk with your admin to know the details or mail at help@jamia.com',
      "Student Portal Request Cancelled"
    );
    res.status(200).send({ msg: "Student portal access cancelled successfully" })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

// get student by id

exports.getStudentById = async (req, res) => {
  const _id = req.params._id;
  try {
    const singleStudentData = await StudentModel.findOne({ _id }).select(
      "-password"
    );
    res
      .status(200)
      .send({ msg: "Data Fetched Successfully", data: singleStudentData });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

// to login student

// to login user
exports.studentLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getuserData = await StudentModel.findOne({ email }).select(
      "+password"
    );
    if (getuserData && getuserData.isVerified == false) {
      res
        .status(401)
        .send({ message: "Application in pending", status: "pending" });
    }

    if (getuserData && getuserData.email) {
      const result = await bcrypt.compare(password, getuserData.password);
      const geneRatedToken = await getuserData.jwtToken();
      if (result) {
        res.status(200).send({
          msg: "User login Successfully",
          token: geneRatedToken,
          role: getuserData.role,
          userdetails: getuserData,
        });
      } else {
        res.status(404).send({ msg: "Wrong Password,Please try again!" });
      }
    } else {
      res
        .status(404)
        .send({ msg: "No Account Found Associated with this email" });
    }
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

// GET ALL VERIFIED STUDENTS

exports.getallStudents = async (req, res) => {
  try {
    const allUser = await StudentModel.find({ isVerified: true }).select(
      "-password"
    );
    res
      .status(200)
      .send({ msg: "All Students Data Fetched Successfully", data: allUser });
  } catch (error) {
    res.status(501).send({ msg: error.message, series: "serioesly" });
  }
};
