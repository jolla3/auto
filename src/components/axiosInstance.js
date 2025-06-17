

//src/utils/axiosInstance.js
import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://sch3ccs.pythonanywhere.com/api/admin/dashboard",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstance;
