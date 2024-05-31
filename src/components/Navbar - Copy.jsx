import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

function Navbar(){

    const [menu, setMenu] = useState(false)

    return(
        <>
        <div className=" relative flex justify-between h-20 items-center nav ">
           
                <img src= {require('../assests/images/Tuneguru logo.png')} className="w-40 left-0 rounded-lg logo " alt="logo" />
                {/* <div className="menu" onClick={() =>{
                    setMenu(!menu)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    
                </div> */}
            
            <ul className={menu ? "mob" : "desk" } onClick={()=>setMenu(false)}>
                    {/* <li className="flex"><Link to="/" className="no-underline ">Home</Link></li> */}
                <li className=""></li>
                 <li  className="list-none list"><Link to="/" className="no-underline block  px-4 py-2 rounded-md text-white  mr-2 link">Home</Link></li> 
                <li  className="list-none list"><Link to="/services" className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link">Services</Link></li>
                <li  className="list-none list"><Link to="/about" className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link" >About</Link></li>
                <li  className="list-none list"><Link to="/support" className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link">Support</Link></li>
                <li  className="list-none list"><Link to="/register" className="no-underline block px-4 py-2 rounded-md text-white mr-2 link">Register</Link></li>
                <li  className="list-none list"><button className="login"><Link to="/login" className="no-underline block px-4 py-2  rounded-md text-white  bg-orange-600">Login</Link></button></li>
            </ul>
            <button className="menu-icon" onClick={()=>setMenu(!menu)}>
                {menu ? (<MdCancel className="text-white text-3xl cancel-icon animate-cancel" />) : (<RxHamburgerMenu className="text-white text-3xl hammenu-icon animate-hamburger" />) }
            </button>
        </div>
        </>
    )
}

export default Navbar;

