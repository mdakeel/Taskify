const { createSlice } = require("@reduxjs/toolkit");



const studentSlice = createSlice({
    name:"student",
    initialState: { mytask:[],viewTask:{}},
    reducers:{
            setmyTask(state,action){
                return {...state,mytask:action.payload}
            },
            setviewTask(state,action) {
                return {...state,viewTask:action.payload}
            }
    }
})


const {setmyTask,setviewTask} = studentSlice.actions;

export default studentSlice.reducer


// get all task data
export const getTask=()=>{
    return async(dispatch)=> {
            try {
                const resp =  await fetch("http://localhost:8081/task",{
                    headers: {
                        "authorization":`bearer ${localStorage.getItem("token")}`
                    }
                });
                const {data} = await resp.json()
                dispatch(setmyTask(data))
                console.log("task data",data)

            } catch (error) {
                console.log({"error":error.message})
            }
    }
}

