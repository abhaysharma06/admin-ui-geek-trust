import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://dev.localhost:3000`,
});

axiosInstance.defaults.withCredentials = true;
