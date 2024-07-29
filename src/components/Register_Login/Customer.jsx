import React, { useContext, useEffect, useState } from "react";
import tuneImage from "../../assests/images/Tuneguru.jpeg";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "./LoginModal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerfunction } from "../../service/Api";
import { StoreContext } from "../StoreContext";

function Customer() {

    const { openLoginModal, closeLoginModal, loginModalOpen } = useContext(StoreContext);
    const location = useLocation();
    const gradientStyle = {
        backgroundImage: "linear-gradient(to right top, #9b346f, #9b4187, #954f9f, #8a5eb6, #776dcb, #5e7bd6, #3f87de, #0093e2, #009dda, #00a5cb, #00aab8, #25aea5)",
        overflow: 'hidden' // Ensure no overflow
    };

    useEffect(() => {
        if (location.pathname === '/customer/register') {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"; // Ensure overflow is enabled for other routes
        }

        // Cleanup the effect on component unmount or route change
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [location.pathname]);

    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        mobilenumber: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

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
    };

    return (
        <>
            {loginModalOpen && <LoginModal isOpen={loginModalOpen} closeModal={closeLoginModal} />}
            <div className="relative overflow-hidden" style={gradientStyle}>
                <img src={tuneImage} alt="tuneguru employees" className="h-screen w-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <form className="border border-black w-full max-w-md h-[400px] bg-black bg-opacity-60 rounded-2xl p-4 mx-5"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.581)" }}>
                        <div className="border-b-2 border-solid border-black mb-4">
                            <h1 className="font-bold text-2xl text-white">SignUp</h1>
                        </div>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={inputData.username} className="border border-black rounded-lg pl-2 h-10 w-full mb-4" />
                        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={inputData.email} className="border border-black rounded-lg pl-2 h-10 w-full mb-4" />
                        <input type="number" name="mobilenumber" placeholder="Enter Mobile No" onChange={handleChange} value={inputData.mobilenumber} className="border border-black rounded-lg pl-2 h-10 w-full mb-4" />
                        <input type="text" name="address" placeholder="Enter Address" onChange={handleChange} value={inputData.address} className="border border-black rounded-lg pl-2 h-10 w-full mb-4" />
                        <button className="px-4 py-2 bg-blue-900 ring-blue-900 text-white font-medium rounded-lg w-full mb-4 hover:bg-blue-600  hover:ring-blue-900  transition-all duration-300 ease-in-out" onClick={handleSubmit}>Proceed</button>
                        <p className="text-white text-center">Already have an account?<Link to="#" onClick={openLoginModal} className="text-red-700 font-semibold">LogIn</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Customer;
