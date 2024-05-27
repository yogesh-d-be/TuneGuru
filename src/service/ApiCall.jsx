import axios from "axios";
import { API_URL } from "./Helper";

export const commonrequest = async (methods, url, body, header) => {
  let config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  //axios

  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// export const getUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("userdbtoken");
//       if (!token) {
//         throw new Error("No token found");
//       }
      
//       const response = await axios.get(`${API_URL}/customer/profile`, {
//         headers: {
//           "x-auth-token": token,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error("Failed to fetch user profile: " + error.message);
//     }
// };
