import React, { useState } from "react";
import { updateUserProfile } from "../../service/Api"; // Import API function to update user profile


function EditProfile({ profile, fetchProfile, setEditing}) {

   

    const [formData, setFormData] = useState({
        username: profile.username || "",
        email: profile.email || "",
        mobilenumber: profile.mobilenumber || "",
        address: profile.address || "",
    });

   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateUserProfile(formData); // Send updated data to the server
            if (response.status === 200) {
                // If update is successful, fetch updated profile data
                fetchProfile();
                setEditing(false); // Close the edit profile mode
            } else {
                // Handle update failure
                console.error("Failed to update profile:", response.data.error);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="flex flex-col mo:bg-blue-200 mo:h-screen">
            <h1 onClick={()=>setEditing(false)} className="font-semibold text-lg cursor-pointer mo:mt-8"><span className="font-bold">&lt;&lt;</span>Edit Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mo:w-[80%] mo:ml-[10%] " >
                <label className="flex flex-col mt-4">
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className=" h-[40px] rounded-xl mt-1 border-none  bg-gray-200 ta:bg-gray-300"
                    />
                </label>
                <label className="flex flex-col mt-4">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className=" h-[40px] rounded-xl mt-1 border-none  bg-gray-200 ta:bg-gray-300"
                    />
                </label>
                <label className="flex flex-col mt-4">
                    Mobile Number:
                    <input
                        type="text"
                        name="mobilenumber"
                        value={formData.mobilenumber}
                        onChange={handleChange}
                        className=" h-[40px] rounded-xl mt-1 border-none  bg-gray-200 ta:bg-gray-300"
                    />
                </label>
                <label className="flex flex-col mt-4">
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className=" h-[40px] rounded-xl mt-1 border-none  bg-gray-200 ta:bg-gray-300"
                    />
                </label>
                <button type="submit" className="mt-8 px-4 py-2 bg-blue-500 w-40 rounded-2xl ml-4 text-white font-semibold">Update</button>
            </form>
        </div>
    );
}

export default EditProfile;
