import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdminDashboard } from "../components/dashboards/AdminDashboard";
import { StudentDashboard } from "../components/dashboards/StudentDashboard";
import { TeacherDashboard } from "../components/dashboards/TeacherDashboard";
import { StudentGroup } from "../components/students/StudentGroup";
import { TeacherStudent } from "../components/teacher/TeacherStudent";
import { TeacherStudentKnowmore } from "../components/teacher/TeacherStudentKnowmore";
import { TeacherTask } from "../components/teacher/TeacherTask";
import { TeacherDashboardContent } from "../components/teacher/TeacherDashboardContent";

import { TeacherCompleteTaskView } from "../components/teacher/TeacherCompleteTaskView";
import { TeacherPendingTaskView } from "../components/teacher/TeacherPendingTaskView";
import { AdminStudent } from "../components/admincomponent/AdminStudent";
import { AdminTeacher } from "../components/admincomponent/AdminTeacher";
import { AdminStudentKnowmore } from "../components/admincomponent/AdminStudentKnowmore";
import { AdminTeacherKnowmore } from "../components/admincomponent/AdminTeacherKnowmore";
import { StudentChat } from "../components/students/StudentChat";
import { StudentTaskView } from "../components/students/StudentTaskView";
import { StudentTask } from "../components/students/StudentTask";
import { StudentTeacher } from "../components/students/StudentTeacher";
import { StudentDashboardContent } from "../components/students/StudentDashboardContent";
import { StudentTeacherKnowmore } from "../components/students/StudentTeacherKnowmore";
import { AdminDashboardContent } from "../components/admincomponent/AdminDashboardContent";
import { useSelector } from "react-redux";
import { useRedirectUser } from "../customhooks/useRedirectUser";
import { Apply, Register } from "../components/Login/Register";
import { TeacherNewStudent } from "../components/teacher/TeacherNewStudent";
import { StudentLogin } from "../components/Login/StudentLogin";
import { TeacherLogin } from "../components/Login/TeacherLogin";
import About from "../components/LandingPage/About/About.jsx";
import Home from "../components/LandingPage/Home/Home";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/Profile/EditProfile";
import { NewStudent } from "../components/NewStudent/NewStudent";
import Waiting from "../components/Waiting/Waiting";
import TaskPage from "../pages/Teacher/TaskPage";
import { TeacherLayout } from "../Layout/TeacherLayout";


export const Customroutes = () => {
    const state = useSelector(state => state.user);
    const navigate = useNavigate()
    const redirectUser = useRedirectUser()

    useEffect(() => {
        redirectUser()
    }, [state])
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
            <Route path="/task/:id" element={
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
            <Route path="/newstudent" element={<><TeacherDashboard /><TeacherNewStudent /></>} />
            <Route path="/details/:id" element={<><TeacherDashboard /><NewStudent /></>} />
            <Route path="/teacherstudentknowmore" element={<><TeacherDashboard /><TeacherStudentKnowmore /></>} />
            <Route path="/teachertask" element={<><TeacherDashboard /><TeacherTask /></>} />
            <Route path="/teacher/task/view/:id" element={<TeacherLayout><TeacherCompleteTaskView /></TeacherLayout>} />
            <Route path="/teacherpendingtaskview" element={<><TeacherDashboard /><TeacherPendingTaskView /></>} />
            <Route path="/teacher/taskpage" element={<TeacherLayout><TaskPage /></TeacherLayout>} />

        </Routes>
    )
}