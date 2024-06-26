
// import React, { useState, useEffect, useRef, useContext } from "react";
// import { toast } from 'react-toastify';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Modal } from "antd";
// import { customerProfile, deleteUserProfile } from "../../service/Api";
// import 'react-toastify/dist/ReactToastify.css';
// import EditProfile from "./EditProfile";
// import '../Home/Navbar.css';
// import { API_URL } from "../../service/Helper";
// import { StoreContext } from "../StoreContext";


// function Profile({ handleLogout }) {
//     const { setProfilePic: updateProfilePic } = useContext(StoreContext); 
//     const navigate = useNavigate();
//     const [profile, setProfile] = useState({});
//     const [editing, setEditing] = useState(false);
//     const [isMobProfile, setMobProfile] = useState(false);
//     const [profileShow, setProfileShow] = useState(false);
//     const [deleteModal, setDeleteModal] = useState(false);

//     const inputRef = useRef(null);
//     const [profilePic, setProfilePic] = useState(null);
//     const [picEdit, setPicEdit] = useState(false);

//     const [save,setSave] =  useState(false)

//     const handleProfile = () => {
//         setProfileShow(!profileShow);
//     };

//     const handleEditPic = () => {
//         setPicEdit(!picEdit);
//     };

//     useEffect(() => {
//         if (window.innerWidth < 550) {
//             setMobProfile(true);
//         } else {
//             setMobProfile(false);
//         }
//     }, []);

//     useEffect(() => {
//         if (deleteModal) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "visible";
//         }

//         return () => {
//             document.body.style.overflow = "visible";
//         };
//     }, [deleteModal]);

//     useEffect(() => {
//         const storedProfilePic = localStorage.getItem('profilePic');
//         if (storedProfilePic) {
//             updateProfilePic(storedProfilePic);
//             setProfilePic(storedProfilePic);
//         }
//         fetchProfile();
//     }, []);
//     useEffect(() => {
//         return () => {
//             if (profilePic ) {
//                 setTimeout(() => {
//                     window.location.reload();
//                 }, 5000);
              
//             }
//         };
//     }, [profilePic]);

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

//     const userDetails = [
//         {
//             label: "Username",
//             data: profile.username,
//             icon: require('../../assests/Icons/user.png')
//         },
//         {
//             label: "Email",
//             data: profile.email,
//             icon: require('../../assests/Icons/mail (2).png')
//         },
//         {
//             label: "Mobile Number",
//             data: profile.mobilenumber,
//             icon: require('../../assests/Icons/dialpad.png')
//         },
//         {
//             label: "Address",
//             data: profile.address,
//             icon: require('../../assests/Icons/home (1).png')
//         }
//     ];

//     const handleEdit = () => {
//         setEditing(true);
//     };

//     const handleDeleteAccount = async () => {
//         setDeleteModal(true);
//     };

//     const confirmDeleteAccount = async () => {
//         try {
//             const response = await deleteUserProfile();
//             if (response && response.status === 200) {
//                 toast.success("Account successfully deleted");
//                 setTimeout(() => {
//                     handleLogout();
//                     navigate('/customer/register');
//                 }, 2000);
//             } else {
//                 toast.error("Failed to delete your account!");
//                 console.log(response?.data?.error);
//             }
//         } catch (error) {
//             console.error("Error deleting account:", error);
//             toast.error("Failed to delete account");
//         } finally {
//             setDeleteModal(false);
//         }
//     };

//     const cancelDeleteAccount = async () => {
//         setDeleteModal(false);
//     };

//     const handleProfileClick = () => {
//         inputRef.current.click();
//         setSave(true)
//     };

//     const handleProfilePic = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setProfilePic(file);
//         }
//     };

//     const handleProfilePicUpload = async () => {
//         const formData = new FormData();
//         formData.append('userPic', profilePic);

//         try {
//             const config = {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
//                 },
//             };
//             const response = await axios.post(API_URL + '/customer/upload-profile-pic', formData, config);

//             if (response.data.message) {
//                 setProfile(response.data.data);
//                 const profilePicURL = response.data.data.profilePicURL; // Assuming your response structure provides this
//                 localStorage.setItem('profilePic', profilePicURL);
//                 updateProfilePic(profilePicURL);
//                 setProfilePic(profilePicURL);
//             } else {
//                 toast.error("Failed to upload profile picture!");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//         finally{
//             setSave(false)
//         }
        
//     };

//     const handleProfilePicDelete = async () => {
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
//             },
//         };

//         try {
//             const response = await axios.post(API_URL + '/customer/delete-profile-pic', {}, config);
//             if (response.data.message) {
//                 toast.success(response.data.message);
//                 localStorage.removeItem('profilePic');
//                 updateProfilePic(null);
//                 setProfilePic(null);
//                 fetchProfile();
//             } else {
//                 toast.error("Failed to delete profile picture!");
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 409) {
//                 toast.error("User profile picture already deleted");
//             } else {
//                 toast.error("An error occurred while deleting the profile picture.");
//             }
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <>
//             <div className="flex mo:flex mo:flex-col">
//                 {!isMobProfile && (
//                     <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
//                         <div className="h-[25%] nav-c w-full flex justify-center items-end">
//                             <div  className="cursor-pointer absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full">
//                                 {profilePic ? (
//                                     <div className="flex flex-col bg-blue-100 rounded-[40%]">
//                                         <img src={save ? URL.createObjectURL(profilePic) :profilePic} onClick={handleProfileClick} className="h-36 w-32 rounded-[50%]" alt="profile" />
//                                         <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
                                        
//                                     </div>
//                                 ) : (
//                                     <div className="flex">
//                                     <img
//                                         src={profile.userPic ? `${API_URL}/images/${profile.userPic}` : require('../../assests/Icons/profile.png')}
//                                         alt="profile"
//                                         onClick={handleProfileClick}
//                                         className="w-32 h-[140px] border-2 border-white rounded-[50%] pb-1 ta:w-28 mo:w-[110px] relative"
//                                     />
//                                     <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
//                                     </div>
//                                 )}
//                                  {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Save</button> */}
//                                 <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
//                             </div>
//                         </div>
                       
//                         <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
                        
//                             <div className="text-center">
//                                 <div className="">
//                                     {
//                                         picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Save</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
//                                     }
//                                     {
//                                         profilePic && save ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
//                                     }
//                                 </div>
//                                 <div>
//                                     <p className={`text-xl font-semibold ${profilePic ? "mt-4" : "mt-4"}`}>{profile.username}</p>
//                                 </div>
//                                 <div className="mt-6">
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/mybookings">My Bookings</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {isMobProfile && !profileShow && (
//                     <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
//                         <div className="h-[25%] nav-c w-full flex justify-center items-end">
//                             <div  className="cursor-pointer absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full">
//                             {profilePic ? (
//                                     <div className="flex flex-col bg-blue-100 rounded-[40%]">
//                                        <img src={save ? URL.createObjectURL(profilePic) :profilePic} onClick={handleProfileClick} className="h-36 w-32 rounded-[50%]" alt="profile" />
//                                        <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
//                                     </div>
//                                 ) : (
//                                     <div className="flex">
//                                     <img
//                                         src={profile.userPic ? `${API_URL}/images/${profile.userPic}` : require('../../assests/Icons/profile.png')}
//                                         alt="profile"
//                                         onClick={handleProfileClick}
//                                         className="w-32 h-[140px] border-2 border-white rounded-[50%] pb-1 ta:w-28 mo:w-[110px] relative"
//                                     />
//                                     <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
//                                     </div>
//                                 )}
//                                  {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Save</button> */}
//                                 <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
//                             </div>
//                         </div>
//                         <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
//                             <div className="text-center mt-4">
//                             <div className={`${profilePic?"mb-2":"mb-4"}`}>
//                             {
//                                         picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Save</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
//                                     }
//                                     {
//                                         profilePic && save ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
//                                     }
//                                 </div>
//                                 <Link onClick={handleProfile} className="text-xl font-semibold cursor-pointer">{profile.username}</Link>
//                                 <div className="mt-6">
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/mybookings">My Bookings</Link></div>
//                                     <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
//                                     <button onClick={handleDeleteAccount} className="mt-6 py-2 border-2 w-48 bg-red-500 rounded-xl cursor-pointer text-white font-bold border-gray-400">Delete My Account</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {isMobProfile && profileShow && !editing && (
//                     <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative mo:w-full">
//                         <div className="h-[50%] nav-c w-full flex flex-col justify-center items-center">
//                             <div className="flex items-center justify-center z-10 bg-white rounded-full ">
//                                 <img id="profilepic"
//                                     src={profile.userPic ? `${API_URL}/images/${profile.userPic}` : require('../../assests/Icons/profile.png')}
//                                     alt="profile"
//                                     className="w-32 border-2 border-white rounded-full pb-1 ta:w-28 mo:w-[80px]"
//                                 />
//                                  <div>
//                                     {
//                                         profilePic ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
//                                     }
//                                 </div>
//                             </div>
//                             <p onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer text-white mb-14">Hi {profile.username}</p>
//                         </div>
//                         <div className="h-[50%] bg-blue-200 w-full flex justify-center items-start pt-16 ">
//                             <div className="text-center relative flex justify-center items-center w-full">
//                                 <div id="profile" className="bg-gray-400 py-3 px-6 rounded-2xl absolute ">
//                                     <div onClick={handleProfile} className="flex items-start font-bold text-xl cursor-pointer">&lt;&lt;</div>
//                                     {userDetails.map((detail, index) => (
//                                         <div key={index} className="flex flex-col pt-3 ">
//                                             <div className="flex items-center">
//                                                 <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3" /><p className="de:flex de:flex-col ta:flex ta:flex-col mo:text-sm"><strong>{detail.label} :</strong> {detail.data}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                     <button onClick={handleEdit} className="bg-blue-500 mt-4 py-2 px-3 mb-4 flex items-center justify-center rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2" />Edit Profile</button>
//                                 </div>
//                                 {isMobProfile && profileShow && editing && (
//                                     <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {!isMobProfile && (
//                     <div className="flex flex-col w-[75%] items-center">
//                         <h1 className="font-bold text-3xl mt-4 mo:hidden">Welcome {profile.username}</h1>
//                         {!editing ? (
//                             <div className="flex flex-col justify-center top-[30%] absolute bg-gray-400 px-28 py-8 rounded-3xl shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none mo:bg-transparent mo:shadow-none mo:hidden">
//                                 <div className="">
//                                     {userDetails.map((detail, index) => (
//                                         <div key={index} className="flex flex-col pt-3 ">
//                                             <div className="flex items-center">
//                                                 <img src={detail.icon} alt="icon" className="w-10 mr-3" /><p className="de:flex de:flex-col ta:flex ta:flex-col"><strong>{detail.label} :</strong> {detail.data}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="w-48 pt-7 flex flex-col justify-center items-center">
//                                     <button onClick={handleEdit} className="bg-blue-500 py-2 px-3 mb-4 flex items-center justify-center rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2" />Edit Profile</button>
//                                     <button onClick={handleDeleteAccount} className="py-2 px-3 bg-red-500 text-white font-semibold rounded-3xl">Delete My Account</button>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="flex flex-col justify-center top-[22%] absolute bg-gray-400 px-28 py-8 rounded-3xl shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none">
//                                 <div className="">
//                                     <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />
//                                 </div>
//                                 <div className="w-48 pt-7 flex flex-col justify-center items-center">
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//             {editing && <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing} />}
//             <Modal
//             title="Are you sure you want to delete your account?"
//             open={deleteModal}
//             onOk={confirmDeleteAccount}
//             onCancel={cancelDeleteAccount}
//             width={450}
//             okText="Yes"
//             cancelText="No"
//             >
//                  <p>This action cannot be undone.</p>
//             </Modal>
//         </>
//     );
// }

// export default Profile;
import React, { useState, useEffect, useRef, useContext } from "react";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import { customerProfile, deleteUserProfile} from "../../service/Api";
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from "./EditProfile";
import '../Home/Navbar.css';
import { API_URL } from "../../service/Helper";
import { StoreContext } from "../StoreContext";
// import { Modal } from "antd";
import Swal from 'sweetalert2';




function Profile() {

    const {logout} = useContext(StoreContext)
    // const{setProfilePic:updateProfilePic} = useContext(StoreContext)
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [editing, setEditing] = useState(false);
    const [isMobProfile, setMobProfile] = useState(false);
    const [profileShow, setProfileShow] = useState(false);
    const [save, setSave] = useState(false)

   
    // Profile pic
    const inputRef = useRef(null);
    const [profilePic, setProfilePic] = useState(null);
    const [picEdit, setPicEdit] = useState(false)

    const handleProfile = () => {
        setProfileShow(!profileShow);
    };

    const handleEditPic = () =>{
        setPicEdit(!picEdit)
        setSave(true)
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
                    data: profile.username,
                    icon: require('../../assests/Icons/user.png')
                },
                {
                    label: "Email",
                    data: profile.email,
                    icon: require('../../assests/Icons/mail (2).png')
                },
                {
                    label: "Mobile Number",
                    data: profile.mobilenumber,
                    icon: require('../../assests/Icons/dialpad.png')
                },
                {
                    label: "Address",
                    data: profile.address,
                    icon: require('../../assests/Icons/home (1).png')
                }
            ];

    const handleEdit = () => {
        setEditing(true);
    };
    // const handleDeleteAccount = async () => {
    //             setDeleteModal(true);
    //         };

    //         const confirmDeleteAccount = async () => {
    //             try {
    //                 // Delete profile picture first
    //                 try {
    //                     await deleteProfilePic();//without toast notification
    //                 } catch (error) {
    //                     // If profile picture deletion fails, we might still want to proceed with account deletion
    //                     console.error("Error during profile picture deletion, proceeding with account deletion:", error);
    //                 }
            
    //                 // Delete the user profile
    //                 const response = await deleteUserProfile();
    //                 if (response && response.status === 200) {
    //                     toast.success("Account successfully deleted");
    //                     logout();
    //                     setTimeout(() => {
    //                         navigate('/customer/register');
    //                     }, 2000);
    //                 } else {
    //                     toast.error("Failed to delete your account!");
    //                     console.log(response.data.error);
    //                 }
    //             } catch (error) {
    //                 console.error("Error deleting account:", error);
    //                 toast.error("Failed to delete account");
    //             }
    //         };
            
            const deleteProfilePic = async () => {
                if (profile.userPic) {
                    const formData = new FormData();
                    formData.append('userPic', profile.userPic);
            
                    const config = {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
                        },
                    };
            
                    try {
                        await axios.post(API_URL + '/customer/delete-profile-pic', formData, config);
                    } catch (error) {
                        console.error("Error:", error);
                        throw error; // Propagate the error to be handled by the caller
                    }
                }
            };
            

    // const cancelDeleteAccount = async () => {
    //             setDeleteModal(false);
    //         };
    const handleDeleteAccount = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover your account!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            customClass: {
                title: 'swal-title', // Custom class for title
                htmlContainer: 'swal-text', // Custom class for text content
            },
            iconHtml: `<img src="${require('../../assests/gif/delete acount.gif')}" style="height: 164px;" />`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Delete profile picture first
                    try {
                        await deleteProfilePic();
                    } catch (error) {
                        console.error('Error during profile picture deletion:', error);
                        // Proceed with account deletion even if profile picture deletion fails
                    }
    
                    // Delete the user profile
                    const response = await deleteUserProfile();
                    if (response && response.status === 200) {
                        Swal.fire({
                            title: 'Account Deleted!',
                            text: 'Your account has been successfully deleted.',
                            icon: 'success',
                            
                        }).then(() => {
                            logout();
                            setTimeout(() => {
                                navigate('/customer/register');
                            }, 2000);
                        });
                    } else {
                        Swal.fire({
                            title: 'Failed to delete!',
                            text: 'Unable to delete your account.',
                            icon: 'error',
                        });
                    }
                } catch (error) {
                    console.error('Error deleting account:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete your account.',
                        icon: 'error',
                    });
                }
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                  title: 'Cancelled',
                  text: 'Your account data is safe :)',
                  icon: 'error',
                  iconHtml: `<img src="${require('../../assests/gif/login.gif')}" style="width: 264px; height:164px;" />`,
                });
              }
        });
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
        formData.append('userPic', profilePic);

        try {
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('userdbtoken')}`,
                },
            };
            const response = await axios.post(API_URL + '/customer/upload-profile-pic', formData, config);

            if (response.data.message === 'Profile picture uploaded successfully') {
                toast.success(response.data.message);
                
                fetchProfile(); 
                setTimeout(()=>{
                    window.location.reload()
                }, 5000);
            } else {
                toast.error('Failed to upload profile picture!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to upload profile picture!');
        } finally {
            setSave(false);
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
                // updateProfilePic(null)
                setProfilePic(null);
                inputRef.current.value= '';
                fetchProfile();
                
                setTimeout(() => {
                    window.location.reload();
    
                }, 5000);
                
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
                                        <img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-8 mr-2 absolute bottom-0 right-0" onClick={handleEditPic}/>
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
                                 {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Save</button> */}
                                <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
                            </div>
                        </div>
                       
                        <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
                        
                            <div className="text-center">
                                <div className="">
                                    {
                                        picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Upload</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
                                    }
                                    {
                                        profilePic && save ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
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
                                 {/* <button onClick={handleProfilePicUpload} className="bg-blue-100 pt-2">Save</button> */}
                                <input type="file" accept="image/*" ref={inputRef} onChange={handleProfilePic} className="hidden" />
                            </div>
                        </div>
                        <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
                            <div className="text-center ">
                            <div className={`${profilePic?"mb-2":"mb-4"}`}>
                            {
                                        picEdit?<div className="mt-6 duration-500 transition-all" onClick={handleEditPic}><button onClick={handleProfileClick} className=" px-3 py-1 bg-green-600 text-white font-semibold rounded-xl">Upload</button> <button onClick={handleProfilePicDelete} className="ml-2 px-3 py-1 bg-red-600 text-white font-semibold rounded-xl">Remove</button></div>  :""
                                    }
                                    {
                                        profilePic && save ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
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
                                        profilePic ?  <button onClick={handleProfilePicUpload  } className={`mt-6 px-3 py-2 bg-green-700 text-white font-semibold rounded-xl`}>Save</button>: ""
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
                                                <img src={detail.icon} alt="icon" className="w-10 mr-3" /><p className="de:flex de:flex-col ta:flex ta:flex-col"><strong>{detail.label} :</strong> {detail.data}</p>
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
            {/* <Modal
            title="Are you sure you want to delete your account?"
            open={deleteModal}
            onOk={confirmDeleteAccount}
            onCancel={cancelDeleteAccount}
            centered
            width={450}
            okText="Yes"
            cancelText="No"
            className="mx-4"
            >
            </Modal> */}
        </>
    );
}

export default Profile;