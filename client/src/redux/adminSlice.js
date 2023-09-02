import { createSlice } from "@reduxjs/toolkit";

const initialState={teachersData:[],studentsData:[],tasksData:[],viewTeacherData:{}}

const adminSlice=createSlice({
    name:'admin',
    initialState:initialState,
    reducers:{
        teacherData(state,action){
            return {...state,teachersData:action.payload}
        },
        setViewTeacherData(state,action){
            return {...state,viewTeacherData:action.payload}
        }
        
    },
})

export const {teacherData,setViewTeacherData}=adminSlice.actions

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