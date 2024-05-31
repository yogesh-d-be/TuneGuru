import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


import "./Navbar.css";
import { StoreContext } from "../StoreContext";
import { toast } from "react-toastify";


function Navbar() {
const {isLoggedIn,  handleLogout, openLoginModal, getTotalItems} = useContext(StoreContext)

  
  
const quantity = getTotalItems();
  const [menu, setMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState("")
  const [dropdown, setDropdown] = useState(false);
  const [prevScroll, setPrevScroll] = useState(false);
 


  prevScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

    const handleMenuOpen = (e) => {
    
      setMenu(!menu);
     
      setPrevScroll(!prevScroll);
    };
  
    

  // const searchClick = (e) => {
  //   e.stopPropagation();
  //   setMenu(true);
  // };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleRegister = () =>{
    handleMenuOpen();
    toast.info("You are already registered..!")
  }
  

 // Function to handle logout
//  const handleLogoutClick = () => {
//   handleLogout(); // Call the handleLogout function passed from the ParentComponent
//   setMenu(false); // Close the menu after logout
// };

const renderAuthButton = () => {
  if (isLoggedIn) {
    return (
        <div className="des_search:absolute des_search:top-0 des_search:right-0 des_search:w-[80px] de:absolute de:top-0 de:right-0 de:w-[80px] ta:absolute ta:top-0 ta:right-0 ta:w-[80px] mo:absolute mo:top-0 mo:right-0 mo:w-[50px]">
          <div className="relative drop ">
            <span
              
              className="no-underline block  rounded-md text-white mr-2"
            >
              <img
                src={require("../../assests/Icons/profile.png")}
                alt="profile"
                className="w-[70px] cursor-pointer des_xl:w-[60px] des_2xl:[80px] des_search:absolute des_search:top-3 des_search:right-16 des_search:w-[45px] de:absolute de:top-3 de:right-16 de:w-[45px] ta:absolute ta:top-3 ta:right-8 ta:w-[40px] mo:absolute mo:top-3 mo:right-6 mo:w-[37px]"
              />
            </span>
            
              <div className="absolute top-full right-0 bg-white shadow-md p-2 rounded-md  hidden drop-menu des_search:mt-[50px]  de:mt-[50px] ta:mt-[45px] mo:mt-[45px] mo:p-1">
              <div className="w-28 flex flex-col gap-2 items-center justify-center">
              <div className="py-2 w-full border-b border-gray-300 flex justify-center pb-2">
                  <Link to="/profile" >My profile</Link>
                </div>
                <div className="w-full py-2 flex justify-center">
                <button
                  onClick={handleLogout}
                  className="no-underline block px-4 py-2 rounded-md text-white bg-red-500 mo:w-[70px] mo:px-2 mo:py-1"
                >
                  Logout
                </button>
                </div>
                </div>
              </div>
            
          </div>

          </div>
)} 
else {
    return (
      <button
        onClick={openLoginModal}
        className="login no-underline px-4 py-2  rounded-md text-white  bg-orange-600 flex justify-center right-[50%] des_search:absolute des_search:top-3 des_search:right-12 de:absolute de:top-3 de:right-12 ta:absolute ta:top-3 ta:right-8 mo:absolute mo:top-3 mo:right-3 mo:px-3 mo:py-2 mo:text-sm"
      >
        Login
      </button>
    );
  }
};


  return (
    <>
      <div className="relative flex justify-between h-20 items-center nav z-20">
        <img
          src={require("../../assests/images/Tuneguru logo.png")}
          className="logo"
          alt="logo"
        />
        <div className="nav-items ">
         
          <ul className={menu ? "mob open" : "desk"}  onClick={handleMenuOpen}>
            {/* <li className="list-none list">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 p-1 border-2 border-black outline-none rounded-2xl "
                onClick={searchClick}
              />
            </li> */}
            <li  className={`list-none list des_search:mt-[3%] de:mt-[3%] ta:mt-[100px] mo:mt-[100px] `}>
              <Link
                to="/"
                onClick={()=>setSelectMenu("home")}
                className={`no-underline  block px-4 py-2  text-white  mr-2 link active:bg-blue-700 des_search:mt-12 de:mt-16 ta:mt-16 mo:mt-16 ${selectMenu === "home"?"active":""}`}
              >
                Home
              </Link>
            </li>
            <li  className={`list-none list `}>
              <Link
                to="/services"
                onClick={()=>setSelectMenu("services")}
                className={`no-underline block px-4 py-2  text-white  mr-2 link ${selectMenu === "services"?"active":""}`}
              >
                Services
              </Link>
            </li>
            {/* <li className="list-none list">
              <Link
                to="/about"
                className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link"
              >
                About
              </Link>
            </li> */}
            <li  className={`list-none list `}>
              <Link
                to="/support"
                onClick={()=>setSelectMenu("support")}
                className={`no-underline block px-4 py-2 rounded-md text-white  mr-2 link ${selectMenu === "support"?"active":""}`}
              >
                Support
              </Link>
            </li>
            <li  className={`list-none list nav-item  ta:mb-6 des_xl:mr-4 des_2xl:mr-4 des_search:mb-6 relative drop`}  onClick={toggleDropdown}>
              <Link
                to=""
                onClick={()=>setSelectMenu("register")}
                className={`no-underline block px-4 py-2 rounded-md text-white mr-2 link ${selectMenu === "register"?"active":""}`}
              >
                Register
                </Link>
                <div className="absolute top-full  bg-white opacity-90  shadow-md p-2 rounded-md  hidden drop-menu des_search:mt-[50px] des_search:top-4 des_search:right-72  de:mt-[50px] de:top-4 de:right-[30%] ta:mt-[45px] ta:top-0 ta:right-[28%] mo:mt-[45px] mo:p-1 mo:top-0 mo:right-[28%]">
              <div className="w-36 flex flex-col gap-2 items-center justify-center des_search:w-52 de:w-44 mo:w-40">
              {!isLoggedIn ? <div className="py-4 w-full  flex justify-center pb-2 ">
                  <Link to="/customer/register" onClick={handleMenuOpen}><p className="text-black text-sm hover:text-blue-900 hover:font-semibold des_search:text-base">Register as customer</p></Link>
                </div>: <div className="py-4 w-full  flex justify-center pb-2 ">
                  <Link  onClick={handleRegister}><p className="text-black text-sm hover:text-blue-900 hover:font-semibold des_search:text-base">Register as customer</p></Link>
                </div>}
                <div className="w-full py-4 flex justify-center border-t border-gray-300">
                <Link to="/customer/register" onClick={handleMenuOpen}><p className="text-black text-sm hover:text-blue-900 hover:font-semibold des_search:text-base">Register as mender</p></Link>
                </div>
                </div>
              </div>
             
              {/* {dropdown && <Dropdown toggleDropdown={toggleDropdown} handleMenuOpen={handleMenuOpen}/>} */}
            </li>
            
           {!isLoggedIn? (<span id= "cart" className=" ta:mb-6 mr-6 des_search:absolute des_search:right-32 des_search:top-4 de:absolute de:right-32 de:top-4 ta:absolute ta:right-28 ta:top-4 mo:absolute mo:right-16 mo:top-4" >
              <Link
                to="/cart"
                className=" relative"
              >
               <span className=""><img src={require('../../assests/Icons/shopping-cart.png')} alt="shopping-cart" className="w-[97px] des_search:w-[32px] de:w-[32px] ta:w-[32px] mo:w-[28px]"/>
               {(quantity>0) && <span className="absolute top-[-8px] left-6 w-[18px] h-[18px] bg-orange-500 text-white pb-1 rounded-[60%]  flex justify-center items-center text-[12px]  text-center font-semibold">{quantity}</span> }</span>
              </Link>
              
            </span>):( <span id= "cart" className=" ta:mb-6 mr-6 des_search:absolute des_search:right-32 des_search:top-4 de:absolute de:right-32 de:top-4 ta:absolute ta:right-28 ta:top-4 mo:absolute mo:right-16 mo:top-4" >
              <Link
                to="/cart"
                className=" relative"
              >
               <span className=""><img src={require('../../assests/Icons/shopping-cart.png')} alt="shopping-cart" className="w-[97px] des_xl:w-[50px] des_2xl:w-[60px] des_search:w-[32px] de:w-[32px] ta:w-[32px] mo:w-[28px]"/>
               {(quantity>0) && <span className="absolute top-[-8px] left-6 w-[18px] h-[18px] bg-orange-500 text-white pb-1 rounded-[60%]  flex justify-center items-center text-[12px]  text-center font-semibold">{quantity}</span> }</span>
              </Link>
              
            </span>) }
            {/* <li className="list-none list">
              <button
                className="login no-underline block px-4 py-2  rounded-md text-white  bg-orange-600 flex justify-center right-[50%]"
                onClick={openLogin}
              >
                Login
              </button>
            </li> */}
            {/* <li className="list-none list "> */}
               {/* Rest of the Navbar content */}
               <div className="w-[78px] des_2xl:ml-2 des_xl:ml-2">
          {renderAuthButton()}
          </div>
          {/* <Link to="/profile">{isLoggedIn ? <div className="no-underline block px-2 py-1 rounded-md text-white mr-2 link active:bg-blue-700"><img src= {require("../../assests/Icons/profile.png")} alt="profile" className="w-[156px]" /></div> : <button
        onClick={openLoginModal}
         className="login no-underline block px-4 py-2  rounded-md text-white  bg-orange-600 flex justify-center right-[50%]"
      >
        Login
       </button>}</Link> */}
            {/* </li>  */}
          </ul>
          <button className="menu-icon" onClick={handleMenuOpen}>
            {menu ? (
              <MdCancel className="text-white text-3xl cancel-icon animate-cancel" />
            ) : (
              <RxHamburgerMenu className="text-white text-3xl hammenu-icon animate-hamburger" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
