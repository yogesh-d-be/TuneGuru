import axios from 'axios';
import { commonrequest } from "./ApiCall";
import { API_URL } from "./Helper";

export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${API_URL}/customer/register`,data)
}

export const sendOtpFunction = async(data)=>{
    return await commonrequest("POST",`${API_URL}/customer/sendotp`,data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${API_URL}/customer/login`,data)
}

//Profile data get, edit, delete

export const customerProfile = async () =>{
    const token = localStorage.getItem("userdbtoken");
    return await axios.get(`${API_URL}/customer/get`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
};


// Other API functions...


export const updateUserProfile = async (data) => {
    const token = localStorage.getItem("userdbtoken");
    return await axios.put(`${API_URL}/customer/put`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
};

export const deleteUserProfile = async () => {
    const token = localStorage.getItem("userdbtoken");
    try {
        const response = await axios.delete(`${API_URL}/customer/delete`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }
}


export const deleteProfilePic = async () => {
    const token = localStorage.getItem("userdbtoken");
    try {
        const response = await axios.delete(`${API_URL}/customer/delete-profile-pic`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }

};

export const updateProfilePic = async (formData) => {
    const token = localStorage.getItem("userdbtoken");
    try {
        const response = await axios.post(`${API_URL}/customer/upload-profile-pic`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }
};
