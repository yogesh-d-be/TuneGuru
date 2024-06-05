// import React, { useEffect, useState } from "react";
// import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Home/Navbar'
// import Home from "./components/Home/Home";
// import Services from "./components/Services/Services";
// import About from "./components/About/About";
// import Support from "./components/Support/Support";
// import Login from "./components/Register_Login/LoginModal";
// import Customer from "./components/Register_Login/Customer";
// import Mender from "./components/Register_Login/Mender";
// import Profile from './components/Profile/Profile';
// import LoginModal from "./components/Register_Login/LoginModal";
// import { Spin } from 'antd';
// import AC from "./components/Services/AC";
// import Fridge from "./components/Services/Fridge";
// import Cartservices from "./components/Cart/Cartservices";
// import CartData from "./components/Cart/CartData";
// import Admin from "./components/admin";
// import EditProfile from "./components/Profile/EditProfile";
// import { AuthProvider,AuthContext } from "./components/Register_Login/Auth";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is authenticated on page load
//     const checkAuthStatus = () => {
//       const token = localStorage.getItem("userdbtoken");
//       if (token) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     };

//     checkAuthStatus(); // Check authentication status on page load

//     // Listen for storage events to handle changes in authentication status in other tabs/windows
//     const handleStorageChange = (event) => {
//       if (event.key === "userdbtoken") {
//         checkAuthStatus();
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const logoutUser = () => {
//     localStorage.removeItem("userdbtoken");
//     setIsLoggedIn(false);
//   };

//   const handleLogout = async () => {
//     try {
//       logoutUser();
//       // setIsLoggedIn(false);
//       toast.success("Logout Successfully");
//       navigate('/'); // Navigate to the home page after logout
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Error logging out");
//     }
//   };

//   const [loginModalOpen, setLoginModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setLoginModalOpen(true);
//   };

//   const closeLoginModal = () => {
//     setLoginModalOpen(false);
//   };

//   return (
//     <AuthProvider>
//     <div className="App">
//       <ToastContainer />
//       <Navbar openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <Routes>
//         <Route path='/' element={<Home openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal}/>} />
//         {/* <Route path='/services' element={isLoggedIn ? <Services /> : <Navigate to="/customer/register" />} /> */}
//         <Route path='/services' element= {<Services/> } />
//         <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to="/customer/register" />} />
//         <Route path='/support' element={isLoggedIn ? <Support /> : <Navigate to="/customer/register" />} />
//         <Route path='/mender' element={isLoggedIn ? <Mender /> : <Navigate to="/customer/register" />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/customer/register' element={<Customer openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal} />} />
//         {/* <Route path='/profile' element={isLoggedIn ? <Profile /> : <Navigate to="/customer/register" />} /> */}
//         <Route path='/profile' element={<Profile handleLogout={handleLogout} /> } />
//         <Route path='/profile/edit' element={<EditProfile /> } />
//         <Route path='/ac_repair_service' element={<AC openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal}/>}/>
//         <Route path='/fridge_repair' element={<Fridge openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal}/>}/>
//         <Route path='/cart' element={<Cartservices/>}/>
//         <Route path='/order' element={<CartData/>}/>
//         <Route path="/admin" element={<Admin/>}/>
//       </Routes>
      
//     </div>
//     </AuthProvider>
//   );
// }

// export default App;


import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Home/Navbar'
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Support from "./components/Support/Support";
import Login from "./components/Register_Login/LoginModal";
import Customer from "./components/Register_Login/Customer";
import Mender from "./components/Register_Login/Mender";
import Profile from './components/Profile/Profile';


import AC from "./components/Services/AC";
import Fridge from "./components/Services/Fridge";
import Cartservices from "./components/Cart/Cartservices";
import CartData from "./components/Cart/CartData";
import EditProfile from "./components/Profile/EditProfile";
import { StoreContext, StoreProvider } from "./components/StoreContext";
import Verify from "./components/Verify";


function App() {
  
  return (
      <StoreProvider>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path='/support' element={<PrivateRoute><Support /></PrivateRoute>} />
          <Route path='/mender' element={<PrivateRoute><Mender /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/customer/register' element={<Customer  />} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/profile/edit' element={<PrivateRoute><EditProfile /></PrivateRoute>} />
          <Route path='/ac_repair_service' element={<AC />}/>
          <Route path='/fridge_repair' element={<Fridge />}/>
          <Route path='/cart' element={<Cartservices />}/>
          <Route path='/order' element={<PrivateRoute><CartData /></PrivateRoute>}/>
          <Route path="/verify" element={<Verify/>}/>
        </Routes>
        
      </div>
      </StoreProvider>
    
  );
}


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(StoreContext);
  return isLoggedIn ? children : <Navigate to="/customer/register" />;
};

export default App;



// import React, { useEffect, useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar'
// import Home from "./components/Home";
// import Services from "./components/Services";
// import About from "./components/About";
// import Support from "./components/Support";
// import Login from "./components/LoginModal";
// import Customer from "./components/Customer";
// import Mender from "./components/Mender";
// import Profile from './components/Profile';
// import LoginModal from "./components/LoginModal";
// import { Spin } from 'antd';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null); // Define userData state

//   const navigate = useNavigate();
//   const Spin = () => <Spin/>;
//   // Function to check if the user is logged in
//   const userValid = () => {
//     let token = localStorage.getItem("userdbtoken");
//     if (token) {
//       setIsLoggedIn(true);
//       // Fetch user data from an API or local storage
//       // For example:
//       // fetchUserData();
//     } else {
//       setIsLoggedIn(false);
//       // Check if the current path is not already the registration page
//       if (window.location.pathname !== '/customer/register') {
//         // Redirect to the registration page
//         navigate("/customer/register");
//       }
//     }
//   };

//   useEffect(() => {
//     userValid();
//   }, []);

//   // Function to fetch user data from an API or local storage
//   // const fetchUserData = () => {
//   //   // Example: Fetch user data from an API
//   //   // fetch('api/userdata')
//   //   //   .then(response => response.json())
//   //   //   .then(data => setUserData(data))
//   //   //   .catch(error => console.error('Error fetching user data:', error));

//   //   // Example: Fetch user data from local storage
//   //   const savedUserData = JSON.parse(localStorage.getItem('userData'));
//   //   if (savedUserData) {
//   //     setUserData(savedUserData);
//   //   }
//   // };

//   const logoutUser = () => {
//     localStorage.removeItem("userdbtoken");
//     setIsLoggedIn(false);
//     setUserData(null); // Clear userData when logging out
//   };

//   const handleLogout = async () => {
//     try {
//       await logoutUser(); // Call logout service function
//       localStorage.removeItem("userdbtoken");
//       setIsLoggedIn(false);
//       setUserData(null); // Clear userData when logging out
//       // Show success toast notification
//       toast.success("Logout Successfully");
//       setTimeout(() => {
//         window.location.reload(); // Reload the window after 1500 milliseconds
//       }, 1500);
//     } catch (error) {
//       console.error("Error:", error);
//       // Show error toast notification
//       toast.error("Error logging out");
//     }
//   };

//   const [loginModalOpen, setLoginModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setLoginModalOpen(true);
//   };

//   const closeLoginModal = () => {
//     setLoginModalOpen(false);
//   };

//   return (
//     <div className="App">
//       <Navbar openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <Routes>
//         <Route path='/' element={<Home/>} />
        
//         <Route path='/services' element={<Services isLoggedIn={isLoggedIn}/>} />
//         <Route path='/about' element={<About isLoggedIn={isLoggedIn}/>} />
//         <Route path='/support' element={<Support isLoggedIn={isLoggedIn}/>} />
//         <Route path='/login' element={<Login isLoggedIn={isLoggedIn}/>} />
//         <Route path='/customer/register' element={<Customer openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal} />} />
//         <Route path='/mender' element={<Mender isLoggedIn={isLoggedIn}/>} />
//         {/* Pass userData as prop to Profile component */}
//          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
//       </Routes>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar'
// import Home from "./components/Home";
// import Services from "./components/Services";
// import About from "./components/About";
// import Support from "./components/Support";
// import Login from "./components/LoginModal";
// import Customer from "./components/Customer";
// import Mender from "./components/Mender";
// import Profile from './components/Profile';
// import LoginModal from "./components/LoginModal";
// import { Spin } from 'antd';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userValid = () => {
//       let token = localStorage.getItem("userdbtoken");
//       if (token) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
        
//       }
//     };

//     userValid();
//   }, []);

//   const logoutUser = () => {
//     localStorage.removeItem("userdbtoken");
//     setIsLoggedIn(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       localStorage.removeItem("userdbtoken");
//       setIsLoggedIn(false);
//       toast.success("Logout Successfully");
//       setTimeout(() => {
//         window.location.reload();
//       }, 1500);
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Error logging out");
//     }
//   };

//   const [loginModalOpen, setLoginModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setLoginModalOpen(true);
//   };

//   const closeLoginModal = () => {
//     setLoginModalOpen(false);
//   };

//   return (
//     <div className="App">
//       <Navbar openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/services' element={isLoggedIn ? <Services /> : <Navigate to="/customer/register" />} />
//         <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to="/customer/register" />} />
//         <Route path='/support' element={isLoggedIn ? <Support /> : <Navigate to="/customer/register" />} />
//         <Route path='/mender' element={isLoggedIn ? <Mender /> : <Navigate to="/customer/register" />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/customer/register' element={<Customer openLoginModal={openLoginModal} loginModalOpen={loginModalOpen} closeLoginModal={closeLoginModal} />} />
//         <Route path='/profile' element={isLoggedIn ? <Profile /> : <Navigate to="/customer/register" />} />
//       </Routes>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;

