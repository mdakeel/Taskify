import axios from "axios";

export const Axiosinstance = axios.create({
  baseURL: 'http://localhost:8082'
});


Axiosinstance.interceptors.request.use((config) => {
  // Add a custom field to the headers
  config.headers.authorization = `bearer ${localStorage.getItem("token")}`

  return config;
}, (error) => {
  return Promise.reject(error);
});
