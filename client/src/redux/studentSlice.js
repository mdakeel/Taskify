import { Axiosinstance } from "../helpers/axiosInstance";

const { createSlice,current } = require("@reduxjs/toolkit");



const studentSlice = createSlice({
    name:"student",
    initialState: { mytask:[],viewTask:{}},
    reducers:{
            setmyTask(state,action){
                return {...state,mytask:action.payload}
            },
            setviewTask(state,action) {
                const id = action.payload;
                const details = current(state).mytask.filter((el)=>el._id === id)
                return {...state,viewTask:{...details[0]}}
            }
    }
})


export const {setmyTask,setviewTask} = studentSlice.actions;

export default studentSlice.reducer


// get all task data
export const getTask=()=>{
    return async(dispatch)=> {
            try {
                const resp =  await Axiosinstance.get("/task")
                const {data} = await resp.data
                dispatch(setmyTask(data))
                console.log("task data",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}

