import React, {useState} from "react";
import tuneImage from "../assests/images/Tuneguru.jpeg";
import { Link } from "react-router-dom";
import Login from "./Login";
import LoginModal from "./LoginModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import { registerfunction } from "../service/Api";
function Customer(){
    const gradientStyle = {
        backgroundImage: "linear-gradient(to right top, #9b346f, #9b4187, #954f9f, #8a5eb6, #776dcb, #5e7bd6, #3f87de, #0093e2, #009dda, #00a5cb, #00aab8, #25aea5)"
    };
    const [login,setLogin] = useState(false)

    const openLogin = () =>{
        setLogin(true);
    }

    const closeLogin = () =>{
        setLogin(false)
    }


    //Signup process

     const [inputData,setInputData] = useState({
        username:"",
        mobilenumber:"",
        address:""
    });

    //setInput value

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setInputData({...inputData,[name]:value})
    }

    //register data
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {username,mobilenumber,address} = inputData;
        console.log("form sub")
        if(username ===""){
            toast.error("Enter Your Username!")
        }
        else if(mobilenumber ===""){
            toast.error("Enter Your Mobile Number")
        }
        else if(mobilenumber.length !==10){
            toast.error("Enter Valid Mobile Number")
        }
        else if(address ===""){
            toast.error("Enter Your Address")
        }
        else{
            try {
                const response = await registerfunction(inputData);
                console.log(response);
            } catch (error) {
                console.error("Error:", error.response.data);
                toast.error("Failed to register. Please check your data.");
        }
    }
    }
    // cosnt [userName,setUserName] =useState()
    // cosnt [mobileNumber,setMobileNumber] =useState()
    // cosnt [address,setAddress] =useState()

    return(
        <>
        
         <Login/>
         {login && <LoginModal isOpen={login} closeModal={closeLogin}/>}
        <div className="flex justify-around" style={gradientStyle} >
        <img src={tuneImage} alt="tuneguru employees" className="h-screen w-[50%]  mo:w-[100%] ta:w-[100%]  de:w-[100%] des_search:w-[60%] bg-cover "/>
        <form  className="border-1 border-black w-[30%] h-[350px] top-2/4 translate-y-1/2 rounded-2xl mo:w-[70%] mo:absolute mo:top-14 mo:h-[350px] ta:w-[60%] ta:absolute ta:top-14  de:w-[50%] de:absolute de:top-14 des_search:w-[40%] mo:h-80"
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.581)"
        }}>
        <div className="border-b-2 border-solid border-black" >
       <h1 className="font-bold text-2xl mb-3 mt-4 ml-4 text-white" >SignUp</h1>
       </div>

       <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-4 ml-4 mo:w-3/4"></input><br/> 
       <input type="number" name="mobilenumber" placeholder="Enter Mobile No" onChange={handleChange} className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-6 ml-4 mb-6 mo:w-3/4"></input><br/> 
       <input type="text" name="address" placeholder="Enter Address" onChange={handleChange} className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-1 ml-4 mb-6 mo:w-3/4"></input><br/> 
       <button  className="px-4 py-2 bg-blue-900 mb-2 text-white font-medium rounded-lg ml-4" onClick={handleSubmit}>Proceed</button><br/>
       <p className="ml-6 mb-4 text-white">Already have an account?<Link to="" onClick={openLogin} className=" text-red-700 font-semibold text-lg">LogIn</Link></p>
       </form>
       <ToastContainer />
        </div>
        </>
    )
}

export default Customer;
