import { axiosInstance } from "../../config/axoisInstance";
import { apiStateHandler } from "../main.api";

const getMembers = async () => {
  const apiCall = () => axiosInstance.get(`/adminui-problem/members.json`);
  return await apiStateHandler(apiCall);
};

export { getMembers };
