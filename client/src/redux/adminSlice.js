import { createSlice } from "@reduxjs/toolkit";

const initialState={teachersData:[],studentsData:[],tasksData:[]}

const adminSlice=createSlice({
    name:'admin',
    initialState:initialState,
    reducers:{
        teacherData(state,action){
            return {...state,teachersData:action.payload}
        }
        
    },
})

export const {teacherData}=adminSlice.actions

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