// // export default Profile;
// import React, { useState, useEffect, useRef } from "react";
// import {toast } from 'react-toastify';
// import { Link, useNavigate } from "react-router-dom";

// import { customerProfile, deleteUserProfile } from "../../service/Api";
// import 'react-toastify/dist/ReactToastify.css';
// import EditProfile from "./EditProfile";
// import '../Home/Navbar.css'

// function Profile({ handleLogout }) {
//     const navigate = useNavigate();
//     const [profile, setProfile] = useState({});
//     const [editing, setEditing] = useState(false); // State to manage whether editing mode is enabled
//     const [isMobProfile, setMobProfile] = useState(false)
//     const [profileShow, setProfileShow] = useState(false)
//     const inputRef = useRef(null);
//     const [profilePic, setProfilePic] = useState()

//     const handleProfile = () =>{
//         if(profileShow === true){
//             setProfileShow(false)
//         }
//         else{
//             setProfileShow(true)
//         }
//     }

//     useEffect(() => {
//         if (window.innerWidth < 550) {
//             setMobProfile(true);
//         }
//             else {
//                 setMobProfile(false);
//             }
        
//     }, []);
//     const fetchProfile = async () => {
//         try {
//             const response = await customerProfile();
//             if (response.data.success) {
//                 setProfile(response.data.data);
//             } else {
//                 toast.error("Failed to load profile!");
//                 console.log(response.response.data.error);
//             }
//         } catch (error) {
//             toast.error("Error fetching profile");
//             console.error("Error:", error);
//         }
//     };

//     useEffect(() => {
//         fetchProfile();
//     }, []);

//     const userDetails = [
//         {
//             label: "Username",
//             data: profile.username
//         },
//         {
//             label: "Email",
//             data: profile.email
//         },
//         {
//             label: "Mobile Number",
//             data: profile.mobilenumber
//         },
//         {
//             label: "Address",
//             data: profile.address
//         }
//     ];

//     const handleEdit = () => {
//         setEditing(true); // Enable editing mode
//     };

//     const handleDeleteAccount = async () => {
//         try {
//             const response = await deleteUserProfile();
//             if (response && response.status === 200) {
//                 toast.success("Account successfully deleted");
//                 // Delay navigation to allow the toast to be visible
//                 setTimeout(() => {
//                     handleLogout();
//                     navigate('/customer/register');
//                 }, 2000); // 2 seconds delay
//             } else {
//                 toast.error("Failed to delete your account!");
//                 console.log(response?.data?.error);
//             }
//         } catch (error) {
//             console.error("Error deleting account:", error);
//             toast.error("Failed to delete account");
//         }
//     };

//     const handleProfileClick = () =>{
//         inputRef.current.click();
//     }

//     const handleProfilePic = (event) =>{
//         const file = event.target.files[0];
//         console.log(file)
//         setProfilePic(event.target.files[0])
//     }

//     return (
//         <>
//             {/* <ToastContainer /> */}
//             <div className=" flex mo:flex mo:flex-col">
                
               
//                 {/* <div className="w-[25%] flex flex-col items-center border-r border-gray-400 h-[40vw]">
//                     <div className="flex flex-row bg-blue-500 w-full h-[25%] z-10">
                        
//                     <div className="flex flex-col items-center mt-[25%] w-full">
//                         <img src={require('../../assests/Icons/profile.png')} alt="profile" className="w-32 border-4 border-white rounded-full flex flex-col justify-center items-center"/>
//                        <div className="bg-blue-200 flex flex-col items-center w-full h-[400px]">
                        
                       
//                     <p className="text-xl font-semibold mt-2">Hi {profile.username}</p>
//                     <p>pr</p>
//                     <p>kk</p>
//                     <p>ll</p>
//                     </div>
//                     </div>
//                     </div>
//                     </div> */}
//          {!isMobProfile &&   ( <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
//   <div className="h-[25%] nav-c w-full flex justify-center items-end">
//     <div onClick={handleProfileClick} className="cursor-pointer absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full ">
//      {profilePic ?<div className="flex flex-col bg-blue-100 rounded-[44%]"> <img src={URL.createObjectURL(profilePic)} className="h-32 w-32 rounded-[50%]"/>
//      <button className="bg-blue-100">Upload</button></div>: <img id="profilepic"
//         src={require('../../assests/Icons/profile.png')}
//         alt="profile"
//         className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[110px]"
//       />}
//       <input type="file"  ref={inputRef} onChange={handleProfilePic} className="hidden"/>
//     </div>
//   </div>
//   <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
//     <div className="text-center">
//         <div>
//       <p className={`text-xl font-semibold ${profilePic ? "mt-10":""}`}>{profile.username}</p>
      
//       </div>
//       <div className="mt-6">
//       <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
//       <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
//       <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/mybookings">My Bookings</Link></div>
//       <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
      
//       </div>
//     </div>
//   </div>
  
// </div>)}
// {(isMobProfile && !profileShow && <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
// <div className="h-[25%] nav-c w-full flex justify-center items-end">
//   <div className="absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full ">
//     <img id="profilepic"
//       src={require('../../assests/Icons/profile.png')}
//       alt="profile"
//       className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[110px]"
//     />
//   </div>
// </div>
// <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
//   <div className="text-center">
//     <Link onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer">{profile.username}</Link>
    
//     <div className="mt-6">
//     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
//     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
//     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/cart">My Bookings</Link></div>
//     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
//     <button onClick={handleDeleteAccount} className="mt-6 py-2 border-2 w-48 bg-red-500 rounded-xl cursor-pointer text-white font-bold border-gray-400">Delete My Account</button>
//     </div>
//   </div>
// </div>

// </div>)
// }

// {isMobProfile && profileShow && !editing&&(

// <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative mo:w-full">
// <div className="h-[50%] nav-c w-full flex flex-col justify-center items-center">
//   <div className=" flex items-center justify-center  z-10 bg-white rounded-full ">
//     <img id="profilepic"
//       src={require('../../assests/Icons/profile.png')}
//       alt="profile"
//       className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[80px]"
//     />
    
//   </div>
//   <p onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer text-white mb-6">Hi {profile.username}</p>
// </div>
// <div className="h-[50%] bg-blue-200 w-full flex justify-center items-start pt-16 ">
//   <div className="text-center relative flex justify-center items-center w-full">
    
    
//     <div id="profile" className="bg-gray-400 py-3 px-6 rounded-2xl  absolute ">
//         <div onClick={handleProfile} className="flex items-start font-bold text-xl cursor-pointer">&lt;&lt;</div>
//         {userDetails.map((detail, index) => (
//             <div key={index} className="flex flex-col pt-3 ">
//                 <div className="flex items-center">
//                 <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3"/><p className="de:flex de:flex-col ta:flex ta:flex-col mo:text-sm"><strong>{detail.label} :</strong> {detail.data}</p>
//                 </div>
//             </div>
//         ))}
//         <button onClick={handleEdit} className="bg-blue-500 mt-4  py-2 px-3 mb-4 flex items-center justify-center  rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2"/>Edit Profile</button>
//     </div>
//     {isMobProfile && profileShow && editing && (
        
//         <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>
//     )}
//   </div>
// </div>

// </div>


        
//       )}


//                 {!isMobProfile && <div className="flex flex-col w-[75%] items-center">
//                         <h1 className="font-bold text-3xl mt-4 mo:hidden">Welcome {profile.username}</h1>
//                        { !editing ? <div className="flex flex-col justify-center top-[30%] absolute bg-gray-400 px-28 py-8 rounded-3xl  shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none mo:bg-transparent mo:shadow-none mo:hidden">
//                 <div className="">
//                     {userDetails.map((detail, index) => (
//                         <div key={index} className="flex flex-col pt-3 ">
//                             <div className="flex items-center">
//                             <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3"/><p className="de:flex de:flex-col ta:flex ta:flex-col"><strong>{detail.label} :</strong> {detail.data}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="w-48 pt-7 flex flex-col justify-center items-center">
//                 <button onClick={handleEdit} className="bg-blue-500  py-2 px-3 mb-4 flex items-center justify-center  rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2"/>Edit Profile</button>
//                 <button onClick={handleDeleteAccount} className="py-2 px-3 bg-red-500 text-white font-semibold rounded-3xl">Delete My Account</button>
//                 </div>
                
//             </div>:  <div className="flex flex-col justify-center top-[22%] absolute bg-gray-400 px-28 py-8 rounded-3xl  shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none">
//                 <div className="">
//                 <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>
//                 </div>
//                 <div className="w-48 pt-7 flex flex-col justify-center items-center">
//                 </div>
                
//             </div>
            
//             }
//             </div>}
//             </div>
           
//             {editing&&<EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>}
            
//         </>
//     );
// }

// export default Profile;
import React, { useState, useEffect, useRef } from "react";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import { customerProfile, deleteUserProfile } from "../../service/Api";
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from "./EditProfile";
import '../Home/Navbar.css';
import { API_URL } from "../../service/Helper";


function Profile({ handleLogout }) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [editing, setEditing] = useState(false);
    const [isMobProfile, setMobProfile] = useState(false);
    const [profileShow, setProfileShow] = useState(false);


    // Profile pic
    const inputRef = useRef(null);
    const [profilePic, setProfilePic] = useState(null);
    const [picEdit, setPicEdit] = useState(false)

    const handleProfile = () => {
        setProfileShow(!profileShow);
    };

    const handleEditPic = () =>{
        setPicEdit(!picEdit)
    }

    

    useEffect(() => {
        if (window.innerWidth < 550) {
            setMobProfile(true);
        } else {
            setMobProfile(false);
        }
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await customerProfile();
            if (response.data.success) {
                setProfile(response.data.data);
            } else {
                toast.error("Failed to load profile!");
                console.log(response.response.data.error);
            }
        } catch (error) {
            toast.error("Error fetching profile");
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const userDetails = [
        {
            label: "Username",
            data: profile.username
        },
        {
            label: "Email",
            data: profile.email
        },
        {
            label: "Mobile Number",
            data: profile.mobilenumber
        },
        {
            label: "Address",
            data: profile.address
        }
    ];

    const handleEdit = () => {
        setEditing(true);
    };

    const handleDeleteAccount = async () => {
        try {
            const response = await deleteUserProfile();
            if (response && response.status === 200) {
                toast.success("Account successfully deleted");
                setTimeout(() => {
                    handleLogout();
                    navigate('/customer/register');
                }, 2000);
            } else {
                toast.error("Failed to delete your account!");
                console.log(response?.data?.error);
            }
        } catch (error) {
            console.error("Error deleting account:", error);
            toast.error("Failed to delete account");
        }
    };

    useEffect(() => {
        fetchProfile(); // Fetch updated profile after image upload
    }, [profilePic]); // Trigger on profilePic change

    // useEffect(() => {
    //     if (profilePic === null) {
    //         fetchProfile(); // Fetch updated profile when profilePic becomes null
    //     }
    // }, [profilePic]);

    const handleProfileClick = () => {
        inputRef.current.click();
    };

    const handleProfilePic = (event) => {
        const file = event.target.files[0]; // Retrieve the file from event
        console.log(file); // Ensure file is logged correctly
        setProfilePic(file); // Set profilePic state with the file
    };

    const handleProfilePicUpload = async () => {
        const formData = new FormData();
        formData.append('userPic', profilePic); // Changed to profilePic

        try {
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
                },
            };
            const response = await axios.post(API_URL+'/customer/upload-profile-pic', formData, config);

            if (response.data.message) {
                toast.success(response.data.message);
                    fetchProfile();
                  
                    setProfilePic(false);
               
                setTimeout(() => {
                    window.location.reload();
    
                }, 4000);
               
            } else {
                toast.error("Failed to upload profile picture!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleProfilePicDelete = async () => {
        const formData = new FormData();
        formData.append('userPic', profilePic); // Changed to profilePic

       
            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
                },
            };
           
            try {

                const response = await axios.post(API_URL+'/customer/delete-profile-pic', formData, config);
            if (response.data.message) {
                
                toast.success(response.data.message);
                fetchProfile();
                setProfilePic(false);
                
                setTimeout(() => {
                    window.location.reload();
    
                }, 4000);
                
            } else {
                toast.error("Failed to delete profile picture!");
            }
        } catch (error) {

            if(error.response && error.response.status === 409){
                toast.error("User profile picture already deleted")
            }
            else{
                toast.error("An error occurred while deleting the profile picture.")
            }
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="flex mo:flex mo:flex-col">
                {!isMobProfile && (
                    <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
                        <div className="h-[25%] nav-c w-full flex justify-center items-end">
                            <div  className="cursor-pointer absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full">
                                {profilePic ? (
                                    <div className="flex flex-col bg-blue-100 rounded-[40%]">
                                        <img src={URL.createObjectURL(profilePic)} onClick={handleProfileClick} className="h-36 w-32 rounded-[50%]" alt="profile" />
                                       
                                    </div>
                                ) : (
                                    <div className="flex">
                                    <img
                                        src={profile.userPic ? `${API_URL}/images/${profile.userPic}` : require('../../assests/Icons/profile.png')}
                                        alt="profile"
                                        onClick={handleProfileClick}
                                        className="w-32 h-[140px] border-2 border-white rounded-[50%] pb-1 ta:w-28 mo:w-[110px] relative"
                                    />
                                    <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
                                    </div>
                                )}
                                 {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Upload</button> */}
                                <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
                            </div>
                        </div>
                       
                        <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
                        
                            <div className="text-center">
                                <div className="">
                                    {
                                        picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Update</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
                                    }
                                    {
                                        profilePic ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Upload</button>: ""
                                    }
                                </div>
                                <div>
                                    <p className={`text-xl font-semibold ${profilePic ? "mt-4" : "mt-4"}`}>{profile.username}</p>
                                </div>
                                <div className="mt-6">
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/mybookings">My Bookings</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isMobProfile && !profileShow && (
                    <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
                        <div className="h-[25%] nav-c w-full flex justify-center items-end">
                            <div  className="cursor-pointer absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full">
                            {profilePic ? (
                                    <div className="flex flex-col bg-blue-100 rounded-[40%]">
                                        <img src={URL.createObjectURL(profilePic)} onClick={handleProfileClick} className=" w-28 rounded-[50%]" alt="profile"/>
                                        
                                    </div>
                                ) : (
                                    <div className="flex">
                                    <img
                                        src={profile.userPic ? `${API_URL}/images/${profile.userPic}` : require('../../assests/Icons/profile.png')}
                                        alt="profile"
                                        onClick={handleProfileClick}
                                        className="w-32 h-[140px] border-2 border-white rounded-[50%] pb-1 ta:w-28 mo:w-[110px] relative"
                                    />
                                    <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
                                    </div>
                                )}
                                 {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Upload</button> */}
                                <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
                            </div>
                        </div>
                        <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
                            <div className="text-center ">
                            <div className={`${profilePic?"mb-2":"mb-4"}`}>
                            {
                                        picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Update</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
                                    }
                                    {
                                        profilePic ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Upload</button>: ""
                                    }
                                </div>
                                <Link onClick={handleProfile} className="text-xl font-semibold cursor-pointer ">{profile.username}</Link>
                                <div className="mt-6">
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/mybookings">My Bookings</Link></div>
                                    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
                                    <button onClick={handleDeleteAccount} className="mt-6 py-2 border-2 w-48 bg-red-500 rounded-xl cursor-pointer text-white font-bold border-gray-400">Delete My Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isMobProfile && profileShow && !editing && (
                    <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative mo:w-full">
                        <div className="h-[50%] nav-c w-full flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center z-10 bg-white rounded-full ">
                                <img id="profilepic"
                                    src={profile.userPic ? `/uploads/${profile.userPic}` : require('../../assests/Icons/profile.png')}
                                    alt="profile"
                                    className="w-32 border-2 border-white rounded-full pb-1 ta:w-28 mo:w-[80px]"
                                />
                                 <div>
                                    {
                                        profilePic ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Upload</button>: ""
                                    }
                                </div>
                            </div>
                            <p onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer text-white mb-6">Hi {profile.username}</p>
                        </div>
                        <div className="h-[50%] bg-blue-200 w-full flex justify-center items-start pt-16 ">
                            <div className="text-center relative flex justify-center items-center w-full">
                                <div id="profile" className="bg-gray-400 py-3 px-6 rounded-2xl absolute ">
                                    <div onClick={handleProfile} className="flex items-start font-bold text-xl cursor-pointer">&lt;&lt;</div>
                                    {userDetails.map((detail, index) => (
                                        <div key={index} className="flex flex-col pt-3 ">
                                            <div className="flex items-center">
                                                <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3" /><p className="de:flex de:flex-col ta:flex ta:flex-col mo:text-sm"><strong>{detail.label} :</strong> {detail.data}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={handleEdit} className="bg-blue-500 mt-4 py-2 px-3 mb-4 flex items-center justify-center rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2" />Edit Profile</button>
                                </div>
                                {isMobProfile && profileShow && editing && (
                                    <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {!isMobProfile && (
                    <div className="flex flex-col w-[75%] items-center">
                        <h1 className="font-bold text-3xl mt-4 mo:hidden">Welcome {profile.username}</h1>
                        {!editing ? (
                            <div className="flex flex-col justify-center top-[30%] absolute bg-gray-400 px-28 py-8 rounded-3xl shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none mo:bg-transparent mo:shadow-none mo:hidden">
                                <div className="">
                                    {userDetails.map((detail, index) => (
                                        <div key={index} className="flex flex-col pt-3 ">
                                            <div className="flex items-center">
                                                <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3" /><p className="de:flex de:flex-col ta:flex ta:flex-col"><strong>{detail.label} :</strong> {detail.data}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-48 pt-7 flex flex-col justify-center items-center">
                                    <button onClick={handleEdit} className="bg-blue-500 py-2 px-3 mb-4 flex items-center justify-center rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2" />Edit Profile</button>
                                    <button onClick={handleDeleteAccount} className="py-2 px-3 bg-red-500 text-white font-semibold rounded-3xl">Delete My Account</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center top-[22%] absolute bg-gray-400 px-28 py-8 rounded-3xl shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none">
                                <div className="">
                                    <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />
                                </div>
                                <div className="w-48 pt-7 flex flex-col justify-center items-center">
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {editing && <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />}
            
        </>
    );
}

export default Profile;
