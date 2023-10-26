import { Axiosinstance as http } from "../../helpers/axiosInstance";

// @GET assignedTask created by teacher

export const getAssignedTask = async (type) => {
  try {
    const data = await http.get(`/teacher/task/assigned?type=${type}`);
    return data.data;
  } catch (error) {
    console.log({ msg: error.message });
  }
};

// @GET Specific Assigned task by _id

export const specificTaskById =async(id)=>{
  try {
    const data = await http.get(`teacher/task/view/${id}`);
    return data.data;
  } catch (error) {
    console.log({ msg: error.message });
  }
}

// verify student
export const verifyStudent =async(studentId) => {
    try {
        const resp = await http.patch(`/student/verify/:verifyStudent`);
        return resp.data
    } catch (error) {
        console.log({"Error":error.message})
    }   
}
