import axios from "axios";

export const Axiosinstance = axios.create({
    baseURL: 'http://localhost:8081'
  });