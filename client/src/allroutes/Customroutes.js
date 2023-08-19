import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../../../../taskify/client/src/pages/HomePage";
import { Register } from "../components/Register";
import { AdminDashboard } from "../components/Dashboard/AdminDashboard";
import { StudentDashboard } from "../components/Dashboard/StudentDashboard";
import { TeacherDashboard } from "../components/Dashboard/TeacherDashboard";
import { StudentGroup } from "../components/StudentsCom/StudentGroup";
import { TeacherStudent } from "../components/TeachersCom/TeacherStudent";
import { TeacherStudentKnowmore } from "../components/TeachersCom/TeacherStudentKnowmore";
import { TeacherTask } from "../components/TeachersCom/TeacherTask";
import { TeacherDashboardContent } from "../components/TeachersCom/TeacherDashboardContent";

import { TeacherCompleteTaskView } from "../components/TeachersCom/TeacherCompleteTaskView";
import { TeacherPendingTaskView } from "../components/TeachersCom/TeacherPendingTaskView";
import { AdminStudent } from "../components/AdminCom/AdminStudent";
import { AdminTeacher } from "../components/AdminCom/AdminTeacher";
import { AdminStudentKnowmore } from "../components/AdminCom/AdminStudentKnowmore";
import { AdminTeacherKnowmore } from "../components/AdminCom/AdminTeacherKnowmore";
import { StudentChat } from "../components/StudentsCom/StudentChat";
import { StudentTaskView } from "../components/StudentsCom/StudentTaskView";
import { StudentTask } from "../components/StudentsCom/StudentTask";
import { StudentTeacher } from "../components/StudentsCom/StudentTeacher";
import { StudentDashboardContent } from "../components/StudentsCom/StudentDashboardContent";
import { StudentTeacherKnowmore } from "../components/StudentsCom/StudentTeacherKnowmore";
import { AdminDashboardContent } from "../components/AdminCom/AdminDashboardContent";


export const Customroutes = () => {
    return (
        <Routes>
            {/* Login AND Register */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={
                <>
                    <Register />
                </>
            } />

            {/* Admin Dashboard and Componets */}
            <Route path="/admindashboard" element={<><AdminDashboard /><AdminDashboardContent /></>} />
            <Route path="/adminstudent" element={<><AdminDashboard /><AdminStudent /></>} />
            <Route path="/adminteacher" element={<><AdminDashboard /><AdminTeacher /></>} />
            <Route path="/adminstudentknowmore" element={<><AdminDashboard /><AdminStudentKnowmore /></>} />
            <Route path="/adminteacherknowmore" element={<><AdminDashboard /><AdminTeacherKnowmore /></>} />

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
            <Route path="/teacherstudentknowmore" element={<><TeacherDashboard /><TeacherStudentKnowmore /></>} />
            <Route path="/teachertask" element={<><TeacherDashboard /><TeacherTask /></>} />
            <Route path="/teachercompletetaskview" element={<><TeacherDashboard /><TeacherCompleteTaskView /></>} />
            <Route path="/teacherpendingtaskview" element={<><TeacherDashboard /><TeacherPendingTaskView /></>} />


        </Routes>
    )
}