import React, { useContext } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Home/Navbar'
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Login from "./components/Register_Login/LoginModal";
import Customer from "./components/Register_Login/Customer";
import Profile from './components/Profile/Profile';
import AC from "./components/Services/AC/AC";
import Fridge from "./components/Services/Fridge/Fridge";
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
import Footer from '../src/components/Footer/Footer'
import WashingMachine from "./components/Services/Washing_Machine/Washing_Machine";
import TV from "./components/Services/TV/TV";
import MixerGrinder from "./components/Services/Mixer&Grinder/Mixer_Grinder";


function App() {
  
  const location = useLocation();
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
          <Route path='/washing_machine_repair' element={<WashingMachine/>}/>
          <Route path="/tv_repair" element={<TV/>} />
          <Route path="/mixer&grinder_repair" element={<MixerGrinder/>} />
           {/*<Route path="/inverter_repair&service" element={<InverterRepair />} />
          <Route path="/electrician_installation" element={<ElectricianInstallation />} />
          <Route path="/electrician_repair" element={<ElectricianRepair />} />
          <Route path="/plumber_installation" element={<PlumberInstallation />} />
          <Route path="/plumber_repair" element={<PlumberRepair />} />
          <Route path="/carpenter_installation" element={<CarpenterInstallation />} />
          <Route path="/carpenter_repair" element={<CarpenterRepair />} />
          <Route path="/mobile_repair" element={<MobileRepair />} />
          <Route path="/laptop_service&repair" element={<LaptopServiceRepair />} />
          <Route path="/computer_service&repair" element={<ComputerServiceRepair />} />
          <Route path="/printer_service&repair" element={<PrinterServiceRepair />} />
          <Route path="/kitchen&bathroom_cleaning" element={<KitchenBathroomCleaning />} />
          <Route path="/full_home_cleaning" element={<FullHomeCleaning />} />
          <Route path="/general_pest&rodent_control" element={<GeneralPestControl />} />
          <Route path="/cockroach_pest_control" element={<CockroachPestControl />} />
          <Route path="/mosquito_pest_control" element={<MosquitoPestControl />} />
          <Route path="/car_service&repair" element={<CarServiceRepair />} />
          <Route path="/bike_service&repair" element={<BikeServiceRepair />} />
          <Route path="/water_purifier_service&repair" element={<WaterPurifierServiceRepair />} />
          <Route path="/home_painting" element={<HomePainting />} /> */}

          <Route path='/cart' element={<Cartservices />}/>
          <Route path='/order' element={<PrivateRoute><CartData /></PrivateRoute>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/mybookings" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={< PrivacyPolicy/>} />
        </Routes>
        {location.pathname !== '/customer/register' && <Footer/>}
        
      </div>
      </StoreProvider>
    
  );
}


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(StoreContext);
  return isLoggedIn ? children : <Navigate to="/customer/register" />;
};

export default App;



