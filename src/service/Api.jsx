import { commonrequest } from "./ApiCall";
import { API_URL } from "./Helper";
import apiInstance from '../components/ApiInstance';


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
    // const token = localStorage.getItem("userdbtoken");
    return await apiInstance.get(`/customer/get`,
    //     {
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     }
    // }
);
};


// Other API functions...


export const updateUserProfile = async (data) => {
    // const token = localStorage.getItem("userdbtoken");
    return await apiInstance.put(`/customer/put`, data, 
    //     {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json"
    //     }
    // }
);
};

export const deleteUserProfile = async () => {
    // const token = localStorage.getItem("userdbtoken");
    try {
        const response = await apiInstance.delete(`/customer/delete`,
        //      {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }
    );
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }
}


export const deleteProfilePic = async () => {
    // const token = localStorage.getItem("userdbtoken");
    try {
        const response = await apiInstance.delete(`/customer/delete-profile-pic`, 
        //     {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }
    );
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }

};

export const updateProfilePic = async (formData) => {
    // const token = localStorage.getItem("userdbtoken");
    try {
        const response = await apiInstance.post(`/customer/upload-profile-pic`, formData, 
        //     {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }
    );
        return response; // Return the entire response object
    } catch (error) {
        throw error; // Throw any errors encountered during the deletion process
    }
};


//contact form

export const contactForm = async (contactUser) =>{
    try {
        const response = await apiInstance.post(`/api/contact/form`,contactUser)
        return response;
    } catch (error) {
        throw error; 
    }
}


// Cart Functions