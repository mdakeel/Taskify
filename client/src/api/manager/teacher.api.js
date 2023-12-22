import { Axiosinstance as http } from "../../helpers/axiosInstance";
import toast from "react-hot-toast";
// @GET assignedTask created by teacher

export const getAssignedTask = async (type) => {
  try {
    const data = await http.get(`/teacher/task/assigned?type=${type}`);
    return data.data;
  } catch (error) {
    toast.error("Error while fetching Data");
  }
};

// specific Assigned Task By _id

export const specificTaskById = async (id) => {
  try {
    const data = await http.get(`teacher/task/view/${id}`);
    return data.data;
  } catch (error) {
    console.log({ msg: error.message });
  }
};

// verify student
export const verifyStudent = async (studentId) => {
  try {
    const resp = await http.patch(`/student/verify/${studentId}`);
    toast.success("Student Verified Successfully");
    return resp.data;
  } catch (error) {
    console.log({ Error: error.message });
    toast.error("Error while Verifiying Student, Try Again");
    return {};
  }
};

// cancel student
export const cancelStudent = async (studentId, toast) => {
  try {
    const resp = await http.delete(`/student/cancel/${studentId}`);
    toast.success("Student Request Cancelled Successfully");
    return resp.data;
  } catch (error) {
    console.log({ Error: error.message });
    toast.error("Error while cancelling Student request, Try Again");
    return {};
  }
};

//  teacher/details teacher dashboard details { countofCompletedTask: number,countofPendingTask: number,completedTask: [], pendingTask: []}

export const getTeacherDashboardDetails = async () => {
  try {
    const resp = await http.get("/teacher/details");
    return resp.data;
  } catch (error) {
    console.log("Error", error.message);
    return {
      countofCompletedTask: 0,
      countofPendingTask: 0,
      completedTask: [],
      pendingTask: [],
    };
  }
};

export const declineStudent = async () => { };

export const assignPoint = async (id, payload) => {
  try {
    const resp = await http.patch(`/task/review/${id}`, payload);
    toast.success("Task Reviewed Successfully");
    return resp.data;
  } catch (error) {
    console.log({ Error: error.message });
    toast.error("Error while Evaluating Task, Try Again");
    return {};
  }
};
