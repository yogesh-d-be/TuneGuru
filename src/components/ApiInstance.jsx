import axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../service/Helper';



const apiInstance = axios.create({
    baseURL: API_URL
  });

  apiInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("userdbtoken");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      console.error("Request Error", error);
      return Promise.reject(error);
    }
  );

  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data.Message === "Token expired") {
        localStorage.clear();
        window.location.href = '/';
        // toast.info("Your session expired, please log in again.");
        Swal.fire({
          // title: "Good job!",
          text: "Your session expired, please log in again.",
          icon: "info"
        });
      }
      return Promise.reject(error);
    }
  );

 

  export default apiInstance;