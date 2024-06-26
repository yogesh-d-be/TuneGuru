import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


import "./Navbar.css";
import { StoreContext } from "../StoreContext";
import { toast } from "react-toastify";
import { API_URL } from "../../service/Helper";
import Swal from 'sweetalert2';
import "../Home/Navbar.css"
import logoutPic from "../../assests/Icons/logout.png"
import infoPic from "../../assests/gif/login-animate.gif"
function Navbar() {
//   const { isLoggedIn, handleLogout, openLoginModal, getTotalItems, profilePic, setProfilePic } = useContext(StoreContext);
//   const navigate = useNavigate();


//   useEffect(() => {
//       // Retrieve profilePic from localStorage on component mount
//       const storedProfilePic = localStorage.getItem('profilePic');
//       if (storedProfilePic) {
//           setProfilePic(storedProfilePic);
//       }
//   }, [setProfilePic]);

  
// const quantity = getTotalItems();
//   const [menu, setMenu] = useState(false);
//   const [selectMenu, setSelectMenu] = useState("")
//   const [dropdown, setDropdown] = useState(false);
//   const [prevScroll, setPrevScroll] = useState(false);
const {isLoggedIn,  logout, openLoginModal, getTotalItems, loadUserDetails, profilePic} = useContext(StoreContext)

  const navigate = useNavigate()
  
const quantity = getTotalItems();
  const [menu, setMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState("")
  const [dropdown, setDropdown] = useState(false);
  const [prevScroll, setPrevScroll] = useState(false);

  // const [profilePic,setProfilePic] =useState(null)
 
  useEffect(() => {
    if (isLoggedIn) {
      loadUserDetails();
     
    }
  }, [isLoggedIn,loadUserDetails]);

  useEffect(()=>{
   
  },[profilePic])

  // const [profilePic,setProfilePic] =useState(null)
 
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     loadUserDetails();
     
  //   }
  // }, [isLoggedIn,loadUserDetails]);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     fetchProfile();
  //   }
  // }, [isLoggedIn]);

  // const fetchProfile = async () => {
  //   let config = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`
  //     },
  //   }
  //   try {
  //     const response = await axios.get(`${API_URL}/customer/profile`,config );
  //     if (response.data.success) {
  //       setProfilePic(response.data.data.userPic);
  //       console("home",profilePic)
  //     } else {
  //       toast.error("Failed to load profile picture!");
  //       console.log(response.response.data.error);
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching profile picture");
  //     console.error("Error:", error);
  //   }
  // };
  prevScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

    const handleMenuOpen = (e) => {
    
      setMenu(!menu);
     
      setPrevScroll(!prevScroll);
    };
  
   

const confirmLogOut = async () => {
    try {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You want to logout from the account',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!',
            cancelButtonText: 'No, cancel',
            customClass: {
                title: 'swal-title', // Custom class for title
                htmlContainer: 'swal-text', // Custom class for text content
            },
            iconHtml: `<img src="${logoutPic}" style="width: 64px; height: 64px;" />` // Replace with your custom webp icon and adjust size as needed
        });

        if (result.isConfirmed) {
            await logout(); // Call the logout function
            Swal.fire({
                title: 'Logged Out!',
                text: 'You have been successfully logged out.',
                icon: 'success',
            }).then(() => {
                navigate('/customer/register'); // Redirect to login page
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: 'Cancelled',
                text: 'Your account is still logged in :)',
                icon: 'info',
                iconHtml: `<img src="${infoPic}" style="width: 204px; height: 164px;" />`, // Use infoPic for info icon
            });
            
        }
    } catch (error) {
        console.error('Error logging out:', error);
        Swal.fire({
            title: 'Error!',
            text: 'Failed to logout your account.',
            icon: 'error',
        });
    }
    
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
                src={profilePic ? `${API_URL}/images/${profilePic}` : require("../../assests/Icons/profile.png")}
                alt="profile"
                className={`${profilePic ?"rounded-[50%] w-[40px] h-[40px] cursor-pointer des_xl:w-[40px] des_xl:h-[45px] des_2xl:[40px] des_2xl:h-[40px] des_search:absolute des_search:top-3 des_search:right-16 des_search:w-[40px] des_search:h-[43px] de:absolute de:top-3 de:right-16 de:w-[37px] de:h-[42px] ta:absolute ta:top-3 ta:right-8 ta:w-[35px] ta:h-[40px] mo:absolute mo:top-3 mo:right-6 mo:w-[32px] mo:h-[38px]" :"w-[70px] cursor-pointer des_xl:w-[60px] des_2xl:[80px] des_search:absolute des_search:top-3 des_search:right-16 des_search:w-[45px] de:absolute de:top-3 de:right-16 de:w-[45px] ta:absolute ta:top-3 ta:right-8 ta:w-[40px] mo:absolute mo:top-3 mo:right-6 mo:w-[37px]"}`}
              />
            </span>
            
              <div className="absolute top-full right-0 bg-white shadow-md p-2 rounded-md  hidden drop-menu des_search:mt-[50px]  de:mt-[50px] ta:mt-[45px] mo:mt-[45px] mo:p-1">
              <div className="w-28 flex flex-col gap-2 items-center justify-center">
              <div className="py-2 w-full border-b border-gray-300 flex justify-center pb-2">
                  <Link to="/profile" >My profile</Link>
                </div>
              {/* <div className="py-2 w-full border-b border-gray-300 flex justify-center pb-2">
                  <Link to="/mybookings" >My Bookings</Link>
                </div> */}
                <div className="w-full py-2 flex justify-center">
                <button
                  onClick={confirmLogOut}
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
        <div>
      <img src={require('../../assests/gif/Robot Logo.gif')} alt="robot" className="h-8 absolute left-3 mo:left-0 mo:top-3 mo:ml-4 mo:z-10 ta:left-0 ta:top-3 ta:ml-4 ta:z-10 de:left-0 de:top-3 de:ml-4 de:z-10 des_search:left-0 des_search:top-3 des_search:ml-4 des_search:z-10" />
        <img
          src={require("../../assests/images/Tuneguru logo1.png")}
          className="logo cursor-pointer"
          alt="logo"
          onClick={()=>navigate("/")}
        />
        </div>
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
                to="/contactus"
                onClick={()=>setSelectMenu("support")}
                className={`no-underline block px-4 py-2 rounded-md text-white  mr-2 link ${selectMenu === "support"?"active":""}`}
              >
                Contact
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
