import axios from "axios";

export const Axiosinstance = axios.create({
    baseURL: 'http://localhost:8081'
  });

  Axiosinstance.defaults.headers.authorization = `bearer ${localStorage.getItem("token")}`