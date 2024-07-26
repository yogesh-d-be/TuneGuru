import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Home/Navbar'
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";

import Login from "./components/Register_Login/LoginModal";
import Customer from "./components/Register_Login/Customer";

import Profile from './components/Profile/Profile';


import AC from "./components/Services/AC";
import Fridge from "./components/Services/Fridge";
import Cartservices from "./components/Cart/Cartservices";
import CartData from "./components/Cart/CartData";
import EditProfile from "./components/Profile/EditProfile";
import { StoreContext, StoreProvider } from "./components/StoreContext";
import Verify from "./components/Bookings/Verify";
import MyBookings from "./components/Bookings/MyBookings";
import ContactForm from "./components/Contact/Contact";
import Mender from "./components/Mender/Mender";
import TermsAndConditions from "./components/Footer/Terms";
import PrivacyPolicy from "./components/Footer/Privacy";


function App() {
  
  
  return (
      <StoreProvider>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<PrivateRoute><ContactForm /></PrivateRoute>} />
          <Route path='/mender' element={<PrivateRoute><Mender /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/customer/register' element={<Customer  />} />
          <Route path='/customer/mender' element={<Mender/>} />
          {/* <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} /> */}
          {/* <Route path='/profile/edit' element={<PrivateRoute><EditProfile /></PrivateRoute>} /> */}
           <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} /> 
           <Route path='/profile/edit' element={<EditProfile />} /> 
          <Route path='/ac_repair_service' element={<AC />}/>
          <Route path='/fridge_repair' element={<Fridge />}/>
          <Route path='/cart' element={<Cartservices />}/>
          <Route path='/order' element={<PrivateRoute><CartData /></PrivateRoute>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/mybookings" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={< PrivacyPolicy/>} />
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



