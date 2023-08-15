import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Register } from "../components/Register";
import { AdminDashboard } from "../components/Dashboard/AdminDashboard";
import { Students, StudentsDashboard } from "../components/Dashboard/StudentDashboard";
import { Teachers, TeachersDashboard } from "../components/Dashboard/TeacherDashboard";
import { Navbar } from "../components/Navbar";
import { STeacher } from "../components/StudentsCom/S.Teacher";
import { SDashboard } from "../components/StudentsCom/S.Dashboard";
import { STask } from "../components/StudentsCom/S.Task";
import { SMessage } from "../components/StudentsCom/S.Message";
import { SGroup } from "../components/StudentsCom/S.Group";
import { STKnowmore } from "../components/StudentsCom/S.T.Knowmore";
import { STaskView } from "../components/StudentsCom/S.T.View";
import { TStudent } from "../components/TeachersCom/T.Student";
import { TSKnowmore } from "../components/TeachersCom/T.S.Knowmore";
import { TTask } from "../components/TeachersCom/T.Task";
import { TDashboard } from "../components/TeachersCom/T.Dashboard";

import { CTaskView } from "../components/TeachersCom/T.C.T.View";
import { PTaskView } from "../components/TeachersCom/T.P.T.View";
import { ADashboard } from "../components/AdminCom/A.Dashboard";
import { AStudent } from "../components/AdminCom/A.Student";
import { ATeacher } from "../components/AdminCom/A.Teacher";
import { ASKnowmore } from "../components/AdminCom/A.S.Knowmore";
import { ATKnowmore } from "../components/AdminCom/A.T.Knowmore";


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
            <Route path="/admindashboard" element={<><AdminDashboard /><ADashboard /></>} />
            <Route path="/astudent" element={<><AdminDashboard /><AStudent /></>} />
            <Route path="/ateacher" element={<><AdminDashboard /><ATeacher /></>} />
            <Route path="/asknowmore" element={<><AdminDashboard /><ASKnowmore /></>} />
            <Route path="/atknowmore" element={<><AdminDashboard /><ATKnowmore /></>} />

            {/* User/Students Dashboard and Components */}
            <Route path="/studentdashboard" element={
                <>
                    <StudentsDashboard />
                    <SDashboard />
                </>
            } />
            <Route path="/steacher" element={
                <>
                    <StudentsDashboard />
                    <STeacher />
                </>
            } />
            <Route path="/stknowmore" element={
                <>
                    <StudentsDashboard />
                    <STKnowmore />
                </>
            } />
            <Route path="/stask" element={
                <>
                    <StudentsDashboard />
                    <STask />
                </>
            } />
            <Route path="/staskview" element={
                <>
                    <StudentsDashboard />
                    <STaskView />
                </>
            } />
            <Route path="/smessage" element={
                <>
                    <StudentsDashboard />
                    <SMessage />
                </>
            } />
            <Route path="/sgroup" element={
                <>
                    <StudentsDashboard />
                    <SGroup />
                </>
            } />

            {/* Teachers Dashboard and Components */}
            <Route path="/teacherdashboard" element={<><TeachersDashboard /><TDashboard /></>} />
            <Route path="/tstudent" element={<><TeachersDashboard /><TStudent /></>} />
            <Route path="/tsknowmore" element={<><TeachersDashboard /><TSKnowmore /></>} />
            <Route path="/ttask" element={<><TeachersDashboard /><TTask /></>} />
            <Route path="/ctaskview" element={<><TeachersDashboard /><CTaskView /></>} />
            <Route path="/ptaskview" element={<><TeachersDashboard /><PTaskView /></>} />


        </Routes>
    )
}