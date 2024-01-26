import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://geektrust.s3-ap-southeast-1.amazonaws.com/`,
});

axiosInstance.defaults.withCredentials = true;
