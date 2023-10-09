import { createSlice } from "@reduxjs/toolkit";

const initialState={teachersData:[],studentsData:[],tasksData:[],viewTeacherData:{},viewStudentData:{}}

const adminSlice=createSlice({
    name:'admin',
    initialState:initialState,
    reducers:{
        teacherData(state,action){
            return {...state,teachersData:action.payload}
        },
        setViewTeacherData(state,action){
            return {...state,viewTeacherData:action.payload}
        },
        studentData(state,action){
            return {...state,studentsData:action.payload}
        },
        setViewStudentData(state,action){
            return {...state,viewStudentData:action.payload}
        },
        
    },
})

export const {teacherData,setViewTeacherData,studentData,setViewStudentData}=adminSlice.actions

export default adminSlice.reducer

// get all teachers data
export const getTeacherData=()=>{
    return async(dispatch)=> {
            try {
                const resp =  await fetch("http://localhost:8081/admin/teachers");
                const {data} = await resp.json()
                dispatch(teacherData(data))
                console.log("TeacherData",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}

// get single teachers data
export const getSingleTeacherData=(id)=>{
    return async(dispatch)=> {
            try {
                const resp =  await fetch(`http://localhost:8081/admin/teacher/${id}`);
                const {data} = await resp.json()
                dispatch(setViewTeacherData(data))
                console.log("singleTeacherData",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}

// get all students data
export const getStudentsData=()=>{
    return async(dispatch)=> {
            try {
                const resp =  await fetch("http://localhost:8081/student/all");
                const {data} = await resp.json()
                dispatch(studentData(data))
                console.log("students",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}


// get single student data
export const getSingleStudentData=(id)=>{
    return async(dispatch)=> {
            try {
                const resp =  await fetch(`http://localhost:8081/admin/student/${id}`);
                const {data} = await resp.json()
                dispatch(setViewStudentData(data))
                console.log("singleStudentData",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}