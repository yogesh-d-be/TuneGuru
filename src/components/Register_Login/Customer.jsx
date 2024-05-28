import React, { useContext, useState } from "react";
import tuneImage from "../../assests/images/Tuneguru.jpeg";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerfunction } from "../../service/Api";


import { StoreContext } from "../StoreContext";

function Customer() {

    const { openLoginModal, closeLoginModal, loginModalOpen } = useContext(StoreContext)

    const gradientStyle = {
        backgroundImage: "linear-gradient(to right top, #9b346f, #9b4187, #954f9f, #8a5eb6, #776dcb, #5e7bd6, #3f87de, #0093e2, #009dda, #00a5cb, #00aab8, #25aea5)"
    };

    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        mobilenumber: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, mobilenumber, address } = inputData;
        if (username === "") {
            toast.error("Enter Your Username!");
        } else if (email === "") {
            toast.error("Enter Your Email");
        } else if (!email.includes("@")) {
            toast.error("Enter a Valid Email");
        } else if (mobilenumber === "") {
            toast.error("Enter Your Mobile Number");
        } else if (mobilenumber.length !== 10) {
            toast.error("Enter a Valid Mobile Number");
        } else if (address === "") {
            toast.error("Enter Your Address");
        } else {
            try {
                const response = await registerfunction(inputData);
                if (response.status === 200) {
                    setInputData({
                        username: "",
                        email: "",
                        mobilenumber: "",
                        address: ""
                    });
                    openLoginModal();
                } else {
                    toast.error(response.response.data.error);
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("Registration failed. Please try again.");
            }
        }
    }

    return (
        <>
            {loginModalOpen && <LoginModal isOpen={loginModalOpen} closeModal={closeLoginModal} />}
            <div className="flex justify-around" style={gradientStyle}>
                <img src={tuneImage} alt="tuneguru employees" className="h-screen w-[50%] mo:w-[100%] ta:w-[100%] de:w-[100%] des_search:w-[60%] bg-cover" />
                <form className="border-1 border-black w-[30%] h-[400px] translate-y-1/4 rounded-2xl mo:w-[70%] mo:absolute mo:top-14 mo:h-[60%] ta:w-[60%] ta:absolute ta:top-14 de:w-[50%] de:absolute de:top-14 des_search:w-[40%]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.581)" }}>
                    <div className="border-b-2 border-solid border-black">
                        <h1 className="font-bold text-2xl mb-3 mt-4 ml-8 text-white">SignUp</h1>
                    </div>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} value={inputData.username} className="border border-black rounded-lg pl-2 h-8 w-3/4 mt-4 ml-6 mo:w-3/4" /><br />
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={inputData.email} className="border border-black rounded-lg pl-2 h-8 w-3/4 mt-6 ml-6 mb-1 mo:w-3/4" /><br />
                    <input type="number" name="mobilenumber" placeholder="Enter Mobile No" onChange={handleChange} value={inputData.mobilenumber} className="border border-black rounded-lg pl-2 h-8 w-3/4 mt-6 ml-6 mb-6 mo:w-3/4" /><br />
                    <input type="text" name="address" placeholder="Enter Address" onChange={handleChange} value={inputData.address} className="border border-black rounded-lg pl-2 h-8 w-3/4 mt-1 ml-6 mb-6 mo:w-3/4" /><br />
                    <button className="px-4 py-2 bg-blue-900 mb-2 text-white font-medium rounded-lg ml-6" onClick={handleSubmit}>Proceed</button><br />
                    <p className="ml-8 mb-4 text-white">Already have an account?<Link to="" onClick={openLoginModal} className="text-red-700 font-semibold text-lg">LogIn</Link></p>
                </form>
                {/* <ToastContainer /> */}
            </div>
        </>
    )
}

export default Customer;
