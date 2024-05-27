import React from "react";
import { Modal, Spin } from 'antd';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {userVerify} from '../../service/Api'

function OtpModal({ isOpenOtp, closeOtpModal, email }) {
    const [otp,setOtp] = useState("");
    const [spiner,setSpiner] = useState(false);

    const location =  useLocation();

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
    
        if (otp === "") {
            toast.error("Enter Your OTP");
            return;
        } else if (!/^\d{6}$/.test(otp)) {
            toast.error("Enter Valid OTP");
            return;
        } 
            setSpiner(true)
            const data = {
                otp,
                email}
            
    
            try {
                const response = await userVerify(data);
                
                if (response && response.status === 200) {
                    // setSpiner(false)
                    localStorage.setItem("userdbtoken", response.data.userToken);
                    toast.success(response.data.message);
                    setTimeout(() => {
                        navigate("/");
                    }, 5000);
                } else {
                    toast.error(response.response.data.error || "An error occurred");
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("An error occurred");
            }
            finally {
                setSpiner(false);
                setTimeout(()=>{
                    closeOtpModal();
                },3000)
                
            }
        };
   
    

    const handleCancel = () => {
        // Close OTP modal without using cancel button
        closeOtpModal(false);
    };

    return (
        <Modal
            open={isOpenOtp}
            footer={null}
            maskClosable={true}
            onCancel={handleCancel} // Close OTP modal when clicking outside the modal
            style={{
                
                borderRadius: '25px',
                maxWidth:'400px'
            }}
            centered={true}
            className="custom-modal"
        >
            <form action="">
                <div className="border-b-2 border-solid border-black">
                    <h1 className="font-bold text-2xl mb-3 mt-1 ml-4">OTP</h1>
                </div>
                <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="border border-black rounded-lg pl-2 h-[40px]  w-[50%] mt-8 ml-4"
                    onChange={(e)=>setOtp(e.target.value)}
                />
                <br /><br />
                <button
                    className="px-4 py-2 bg-blue-900 mb-4 text-white font-medium rounded-lg ml-4"
                    onClick={loginUser}
                >
                    Proceed
                    {spiner && <Spin /> }
                </button>
            </form>
            
        </Modal>
    );
}

export default OtpModal;
