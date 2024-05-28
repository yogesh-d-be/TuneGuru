// export default Profile;
import React, { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

import { customerProfile, deleteUserProfile } from "../../service/Api";
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from "./EditProfile";
import '../Home/Navbar.css'

function Profile({ handleLogout }) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [editing, setEditing] = useState(false); // State to manage whether editing mode is enabled
    const [isMobProfile, setMobProfile] = useState(false)
    const [profileShow, setProfileShow] = useState(false)

    const handleProfile = () =>{
        if(profileShow === true){
            setProfileShow(false)
        }
        else{
            setProfileShow(true)
        }
    }

    useEffect(() => {
        if (window.innerWidth < 550) {
            setMobProfile(true);
        }
            else {
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
        setEditing(true); // Enable editing mode
    };

    const handleDeleteAccount = async () => {
        try {
            const response = await deleteUserProfile();
            if (response && response.status === 200) {
                toast.success("Account successfully deleted");
                // Delay navigation to allow the toast to be visible
                setTimeout(() => {
                    handleLogout();
                    navigate('/customer/register');
                }, 2000); // 2 seconds delay
            } else {
                toast.error("Failed to delete your account!");
                console.log(response?.data?.error);
            }
        } catch (error) {
            console.error("Error deleting account:", error);
            toast.error("Failed to delete account");
        }
    };

    return (
        <>
            {/* <ToastContainer /> */}
            <div className=" flex mo:flex mo:flex-col">
                
               
                {/* <div className="w-[25%] flex flex-col items-center border-r border-gray-400 h-[40vw]">
                    <div className="flex flex-row bg-blue-500 w-full h-[25%] z-10">
                        
                    <div className="flex flex-col items-center mt-[25%] w-full">
                        <img src={require('../../assests/Icons/profile.png')} alt="profile" className="w-32 border-4 border-white rounded-full flex flex-col justify-center items-center"/>
                       <div className="bg-blue-200 flex flex-col items-center w-full h-[400px]">
                        
                       
                    <p className="text-xl font-semibold mt-2">Hi {profile.username}</p>
                    <p>pr</p>
                    <p>kk</p>
                    <p>ll</p>
                    </div>
                    </div>
                    </div>
                    </div> */}
         {!isMobProfile &&   ( <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
  <div className="h-[25%] nav-c w-full flex justify-center items-end">
    <div className="absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full ">
      <img
        src={require('../../assests/Icons/profile.png')}
        alt="profile"
        className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[110px]"
      />
    </div>
  </div>
  <div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
    <div className="text-center">
        <div>
      <p className="text-xl font-semibold mt-2">{profile.username}</p>
      
      </div>
      <div className="mt-6">
      <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
      <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
      <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/cart">My Bookings</Link></div>
      <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
      
      </div>
    </div>
  </div>
  
</div>)}
{(isMobProfile && !profileShow && <div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative des_xl:w-[400px] des_search:w-[400px] de:w-[370px] ta:w-[350px] mo:w-full">
<div className="h-[25%] nav-c w-full flex justify-center items-end">
  <div className="absolute flex items-center justify-center top-[110px] z-10 bg-white rounded-full ">
    <img
      src={require('../../assests/Icons/profile.png')}
      alt="profile"
      className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[110px]"
    />
  </div>
</div>
<div className="h-[75%] bg-blue-100 w-full flex justify-center items-start pt-16">
  <div className="text-center">
    <Link onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer">{profile.username}</Link>
    
    <div className="mt-6">
    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/">Home</Link></div>
    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/services">Services</Link></div>
    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/cart">My Bookings</Link></div>
    <div className="mt-6 py-2 border-2 w-48 bg-orange-500 rounded-xl cursor-pointer text-white font-bold border-gray-400"><Link to="/support">Support</Link></div>
    <button onClick={handleDeleteAccount} className="mt-6 py-2 border-2 w-48 bg-red-500 rounded-xl cursor-pointer text-white font-bold border-gray-400">Delete My Account</button>
    </div>
  </div>
</div>

</div>)
}

{isMobProfile && profileShow && !editing&&(

<div className="w-[25%] border-r border-gray-400 h-screen flex flex-col items-center relative mo:w-full">
<div className="h-[50%] nav-c w-full flex flex-col justify-center items-center">
  <div className=" flex items-center justify-center  z-10 bg-white rounded-full ">
    <img
      src={require('../../assests/Icons/profile.png')}
      alt="profile"
      className="w-32 border-2  border-white rounded-full pb-1 ta:w-28 mo:w-[80px]"
    />
    
  </div>
  <p onClick={handleProfile} className="text-xl font-semibold mt-2 cursor-pointer text-white mb-6">Hi {profile.username}</p>
</div>
<div className="h-[50%] bg-blue-200 w-full flex justify-center items-start pt-16 ">
  <div className="text-center relative flex justify-center items-center w-full">
    
    
    <div id="profile" className="bg-gray-400 py-3 px-6 rounded-2xl  absolute ">
        <div onClick={handleProfile} className="flex items-start font-bold text-xl cursor-pointer">&lt;&lt;</div>
        {userDetails.map((detail, index) => (
            <div key={index} className="flex flex-col pt-3 ">
                <div className="flex items-center">
                <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3"/><p className="de:flex de:flex-col ta:flex ta:flex-col mo:text-sm"><strong>{detail.label} :</strong> {detail.data}</p>
                </div>
            </div>
        ))}
        <button onClick={handleEdit} className="bg-blue-500 mt-4  py-2 px-3 mb-4 flex items-center justify-center  rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2"/>Edit Profile</button>
    </div>
    {isMobProfile && profileShow && editing && (
        
        <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>
    )}
  </div>
</div>

</div>


        
      )}


                {!isMobProfile && <div className="flex flex-col w-[75%] items-center">
                        <h1 className="font-bold text-3xl mt-4 mo:hidden">Welcome {profile.username}</h1>
                       { !editing ? <div className="flex flex-col justify-center top-[30%] absolute bg-gray-400 px-28 py-8 rounded-3xl  shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none mo:bg-transparent mo:shadow-none mo:hidden">
                <div className="">
                    {userDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col pt-3 ">
                            <div className="flex items-center">
                            <img src={require('../../assests/Icons/profile.png')} alt="" className="w-12 mr-3"/><p className="de:flex de:flex-col ta:flex ta:flex-col"><strong>{detail.label} :</strong> {detail.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-48 pt-7 flex flex-col justify-center items-center">
                <button onClick={handleEdit} className="bg-blue-500  py-2 px-3 mb-4 flex items-center justify-center  rounded-3xl font-semibold text-white w-40"><img src={require('../../assests/Icons/pen.png')} alt="edit" className="w-6 mr-2"/>Edit Profile</button>
                <button onClick={handleDeleteAccount} className="py-2 px-3 bg-red-500 text-white font-semibold rounded-3xl">Delete My Account</button>
                </div>
                
            </div>:  <div className="flex flex-col justify-center top-[22%] absolute bg-gray-400 px-28 py-8 rounded-3xl  shadow-black shadow-xl de:w-[400px] de:px-20 ta:px-8 ta:text-sm ta:bg-inherit ta:shadow-none">
                <div className="">
                <EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>
                </div>
                <div className="w-48 pt-7 flex flex-col justify-center items-center">
                </div>
                
            </div>
            
            }
            </div>}
            </div>
           
            {editing&&<EditProfile profile={profile} fetchProfile={fetchProfile} setEditing={setEditing}/>}
            
        </>
    );
}

export default Profile;
