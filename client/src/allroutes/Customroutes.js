import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdminDashboard } from "../components/Dashboard/AdminDashboard";
import { StudentDashboard } from "../components/Dashboard/StudentDashboard";
import { TeacherDashboard } from "../components/Dashboard/TeacherDashboard";
import { StudentGroup } from "../components/StudentsComponents/StudentGroup";
import { TeacherStudent } from "../components/TeacherComponents/TeacherStudent";
import { TeacherStudentKnowmore } from "../components/TeacherComponents/TeacherStudentKnowmore";
import { TeacherTask } from "../components/TeacherComponents/TeacherTask";
import { TeacherDashboardContent } from "../components/TeacherComponents/TeacherDashboardContent";

import { TeacherCompleteTaskView } from "../components/TeacherComponents/TeacherCompleteTaskView";
import { TeacherPendingTaskView } from "../components/TeacherComponents/TeacherPendingTaskView";
import { AdminStudent } from "../components/AdminComponents/AdminStudent";
import { AdminTeacher } from "../components/AdminComponents/AdminTeacher";
import { AdminStudentKnowmore } from "../components/AdminComponents/AdminStudentKnowmore";
import { AdminTeacherKnowmore } from "../components/AdminComponents/AdminTeacherKnowmore";
import { StudentChat } from "../components/StudentsComponents/StudentChat";
import { StudentTaskView } from "../components/StudentsComponents/StudentTaskView";
import { StudentTask } from "../components/StudentsComponents/StudentTask";
import { StudentTeacher } from "../components/StudentsComponents/StudentTeacher";
import { StudentDashboardContent } from "../components/StudentsComponents/StudentDashboardContent";
import { StudentTeacherKnowmore } from "../components/StudentsComponents/StudentTeacherKnowmore";
import { AdminDashboardContent } from "../components/AdminComponents/AdminDashboardContent";
import { useSelector } from "react-redux";
import { useRedirectUser } from "../customhooks/useRedirectUser";
import { Apply, Register } from "../components/Login/Register";
import { TeacherNewStudent } from "../components/TeacherComponents/TeacherNewStudent";
import { StudentLogin } from "../components/Login/StudentLogin";
import { TeacherLogin } from "../components/Login/TeacherLogin";
import About from "../components/LandingPage/About/About";
import Home from "../components/LandingPage/Home/Home";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/Profile/EditProfile";
import Waiting from "../components/Waiting/Waiting";


export const Customroutes = () => {
    const state = useSelector(state => state.user);
    const navigate = useNavigate()
    const redirectUser =useRedirectUser()

    useEffect(()=>{
        redirectUser()
    },[state])
    return (
        <Routes>
            {/* Apply */}
           
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/waiting" element={<Waiting />} />
            {/* Login AND Register */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/cancel" element={<Profile />} />
            <Route path="/update" element={<Profile />} />
            <Route path="/studentlogin" element={
                <>
                    <StudentLogin />
                </>
            } />
             <Route path="/teacherlogin" element={
                <>
                    <TeacherLogin />
                </>
            } />

            {/* Admin Dashboard and Componets */}
            <Route path="/admindashboard" element={<><AdminDashboard /><AdminDashboardContent /></>} />
            <Route path="/adminstudent" element={<><AdminDashboard /><AdminStudent /></>} />
            <Route path="/adminteacher" element={<><AdminDashboard /><AdminTeacher /></>} />
            <Route path="/adminstudentknowmore/:id" element={<><AdminDashboard /><AdminStudentKnowmore /></>} />
            <Route path="/adminteacherknowmore/:id" element={<><AdminDashboard /><AdminTeacherKnowmore /></>} />

            {/* User/Students Dashboard and Components */}
            <Route path="/studentdashboard" element={
                <>
                    <StudentDashboard />
                    <StudentDashboardContent />
                </>
            } />
            <Route path="/studentteacher" element={
                <>
                    <StudentDashboard />
                    <StudentTeacher />
                </>
            } />
            <Route path="/studentteacherknowmore" element={
                <>
                    <StudentDashboard />
                    <StudentTeacherKnowmore />
                </>
            } />
            <Route path="/studenttask" element={
                <>
                    <StudentDashboard />
                    <StudentTask />
                </>
            } />
            <Route path="/studenttaskview" element={
                <>
                    <StudentDashboard />
                    <StudentTaskView />
                </>
            } />
            <Route path="/studentchat" element={
                <>
                    <StudentDashboard />
                    <StudentChat />
                </>
            } />
            <Route path="/studentgroup" element={
                <>
                    <StudentDashboard />
                    <StudentGroup />
                </>
            } />

            {/* Teachers Dashboard and Components */}
            <Route path="/teacherdashboard" element={<><TeacherDashboard /><TeacherDashboardContent /></>} />
            <Route path="/teacherstudent" element={<><TeacherDashboard /><TeacherStudent /></>} />
            <Route path="/teacherNewStudent" element={<><TeacherDashboard /><TeacherNewStudent/></>} />
            <Route path="/teacherstudentknowmore" element={<><TeacherDashboard /><TeacherStudentKnowmore /></>} />
            <Route path="/teachertask" element={<><TeacherDashboard /><TeacherTask /></>} />
            <Route path="/teachercompletetaskview" element={<><TeacherDashboard /><TeacherCompleteTaskView /></>} />
            <Route path="/teacherpendingtaskview" element={<><TeacherDashboard /><TeacherPendingTaskView /></>} />


        </Routes>
    )
}