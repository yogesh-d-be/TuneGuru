import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginModal from "../Register_Login/LoginModal";
// import NavContext from "./NavContext";
// import Navbar from "./Navbar";
// import ParallaxContext from "./ParallaxContext";
import Parallax from "./Parallax";

import img1 from "../../assests/Icons/electronics.png";
import img2 from "../../assests/Icons/electrician.png";
import img3 from "../../assests/Icons/plumber.png";
import img4 from "../../assests/Icons/carpenter.png";
import img5 from "../../assests/Icons/device.png";
import img6 from "../../assests/Icons/vaccum-cleaner.png";
import img7 from "../../assests/Icons/person.png";
import img8 from "../../assests/Icons/mechanic.png";
import img9 from "../../assests/Icons/technology.png";
import img10 from "../../assests/Icons/paint-roller.png";

import ServiceModal from "./ServiceModal";
import { StoreContext } from "../StoreContext";
import ThrowablesScene from "../ThrowableScenes";
// // Dynamically import ThrowablesScene component
// const ThrowablesScene = React.lazy(() => import("../ThrowableScenes"));
import './Home.css'
import Select  from "react-select";

// import Navbar from "./Navbar";
// import {useLocation} from "react-router-dom";

function Home() {
  
  // const history = unstable_HistoryRouter(); 
const {loginModalOpen, closeLoginModal} = useContext(StoreContext)
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
const navigate = useNavigate();

// // Function to check if an element is in the viewport
// const isInViewport = (element) => {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// // Function to trigger animation after delay
// const triggerAnimation = () => {
//   const throwablesScene = document.getElementById("throwables-scene");
//   if (throwablesScene) {
//     // Here you can trigger the animation for ThrowablesScene
//     console.log("ThrowablesScene is in viewport, triggering animation...");
//   }
// };

// // Effect to add scroll event listener when component mounts
// useEffect(() => {
//   const handleScroll = () => {
//     // Check if ThrowablesScene component is in viewport
//     const throwablesScene = document.getElementById("throwables-scene");
//     if (throwablesScene && isInViewport(throwablesScene)) {
//       // If ThrowablesScene is in viewport, trigger animation after delay
//       setTimeout(triggerAnimation, 2000); // Delay animation by 2 seconds
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   // Clean up event listener when component unmounts
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []); // Empty dependency array means this effect runs only once after mounting

  const openServiceModal = (service) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    setServiceModalOpen(false);
    // history.push("/");
    navigate("/"); // Navigate back to home page without query parameter
  };


  const imagesData = () => {
    const services = [
      {
        src: img1,
        alt: "Image 1",
        line: "Appliances Services",
        queryParam: "_appliances",
        images:[require('../../assests/Icons/air-conditioner.png'),require('../../assests/Icons/fridge.png'),require('../../assests/Icons/washing-machine.png'),require('../../assests/Icons/television.png'),require('../../assests/Icons/blender.png'),require('../../assests/Icons/inventer.png')],
        capt:["AC Repair & Service","Refridgerator Repair","Washing Machine Repair","TV Repair","Mixer & Grinder Repair","Inverter Repair & Service"],
        path:["/ac_repair_service","/fridge_repair","/washing_machine_repair","/tv_repair","/mixer&grinder_repair","/inverter_repair&service"]
      },
      {
        src: img2,
        alt: "Image 2",
        line: "Electrician",
        queryParam: "_electrician",
        images:[require('../../assests/Icons/e_install.png'),require('../../assests/Icons/broken-cable.png')],
        capt:["Electrical Installation","Electrical Repair"],
        path:["/electrician_installation","/electrician_repair"]
      },
      {
        src: img3,
        alt: "Image 3",
        line: "Plumber",
        queryParam: "_plumber",
        images:[require('../../assests/Icons/plumber (2).png'),require('../../assests/Icons/leaking.png')],
        capt:["Plumbing Installation","Plumbing Repair"],
        path:["/plumber_installation","/plumber_repair"]
      },
      {
        src: img4,
        alt: "Image 4",
        line: "Carpenter",
        queryParam: "_carpenter",
        images:[require('../../assests/Icons/carpenter (2).png'),require('../../assests/Icons/carpenter (1).png')],
        capt:["Carpentering Installation","Carpentering Service"],
        path:["/carpenter_installation","/carpenter_repair"]
      },
      {
        src: img5,
        alt: "Image 5",
        line: "Device Services",
        queryParam: "_device_services",
        images:[require('../../assests/Icons/iphone.png'),require('../../assests/Icons/laptop (1).png'),require('../../assests/Icons/computer (1).png'),require('../../assests/Icons/printer.png')],
        capt:["Mobile Repair","Laptop Service & Repair","Computer Service & Repair","Printer Service & Repair"],
        path:["/mobile_repair","/laptop_service&repair","/computer_service&repair","/printer_service&repair"]
      },
      {
        src: img6,
        alt: "Image 6",
        line: "Cleaning Services",
        queryParam: "_cleaning_services",
        images:[require('../../assests/Icons/kitchen.png'),require('../../assests/Icons/mansion.png')],
        capt:["Kitchen & Bathroom Cleaning","Full Home Cleaning"],
        path:["/kitchen&bathroom_cleaning","/full_home_cleaning"]
      },
      {
        src: img7,
        alt: "Image 7",
        line: "Pest Control",
        queryParam: "_pest_control",
        images:[require('../../assests/Icons/pesticide.png'),require('../../assests/Icons/insect.png'),require('../../assests/Icons/insect (1).png')],
        capt:["General Pest & Rodent Control","Cockroach Pest Control","Mosquito Pest Control"],
        path:["/general_pest&rodent_control","/cockroach_pest_control","mosquito_pest_control"]
      },
      {
        src: img8,
        alt: "Image 8",
        line: "Vehicle Services",
        queryParam: "_vehicle_services",
        images:[require('../../assests/Icons/repair-shop.png'),require('../../assests/Icons/bike.png')],
        capt:["Car Service & Repair","Bike Service & Repair"],
        path:["/car_service&repair","/bike_service&repair"]
      },
      {
        src: img9,
        alt: "Image 9",
        line: "Water Purifier",
        queryParam: "_water_purifier",
        images:[require('../../assests/Icons/purified-water.png')],
        capt:["Water Purifier Service & Repair"],
        path:["/water_purifier_service&repair"]
      },
      {
        src: img10,
        alt: "Image 10",
        line: "Painting",
        queryParam: "_painting",
        images:[require('../../assests/Icons/paint.png')],
        capt:["Home Painting"],
        path:["/home_painting"]
      },
    ];
    return services;
  };

  const services = imagesData();



  const [selectedOption, setSelectedOption] = useState('');

  const searchServices = (services) =>{
    return services.flatMap(service=> 
      service.capt.map((caption, index)=>({
        label:caption,
        value:service.path[index],
        image:service.images[index]
      }))
    )
  }

  const search = searchServices(services)

  const handleSearchServiceChange = (option) =>{
    setSelectedOption(option);
    if(option){
      navigate(option.value)
    }
  }
  
  return (
    <>
      {/* {nav} */}
      {/* <ParallaxContext.Provider value={Parallax}>
{parallaxValue}
</ParallaxContext.Provider> */}
      {/* <Login openModal={login} closeModal={closeLogin}/> */}
      {/* <Home openLogin={openLogin} setOpenLogin={setOpenLogin} logoutUser={logoutUser} /> */}
      
     
      
      {loginModalOpen && <LoginModal isOpen={true} closeModal={closeLoginModal} />}
      <Parallax />
      {/* <Appliances/> */}
      <div className="relative w-full h-[700px] mt-12">
  <img src={require('../../assests/images/Service persons2.jpg')} alt="Service persons 3" className="w-full h-[700px]" />
  <div className="absolute top-0 left-0 w-full h-[700px] flex flex-col items-center justify-center backdrop-brightness-50">

   <Select
      value={selectedOption}
      onChange={handleSearchServiceChange}
      options={search} 
      getOptionLabel={(option) => (
        <div className="flex items-center">
          <img src={option.image} alt={option.label} className="w-6 h-6 mr-2" />
          {option.label}
        </div>
      )}
      getOptionValue={(option) => option.value}
      placeholder="Search for services..."
      classNamePrefix="custom-search"
    />
     
  </div>
</div>

      <div className="scroll-element">
        
        <div className="left-52 mt-32 ">
          <h1 className="font-bold text-3xl my-24 flex justify-center mo:my-12 mo:text-[26px] mo:font-bold">
            Experts Care For You
          </h1>
          <div className="flex justify-center  items-center">
            <ul className="flex flex-cols-2 justify-evenly items-center gap-40 ml-8 mo:grid mo:grid-cols-1 mo:gap-y-[10%] ta:grid grid-cols-2 ta:gap-x-[17%] ta:gap-y-[20%] ta:mb-12 de:grid de:grid-cols-2 de:gap-y-[17%]  des_search:gap-20 des_search:flex flex-cols-2 ">
              <li className="list-none">
                <img
                  src={require("../../assests/Icons/customer-service.png")}
                  alt="Customer service"
                  className="w-28 ml-8 mb-8 mo:w-28 ta:w-20 de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl ">
                  Choose from 30+ services
                </span>
                <p className="mo:mt-2 de:text-balance">Choose your services</p>
              </li>
              <li className="list-none ">
                <img
                  src={require("../../assests/Icons/mobile.png")}
                  alt="Form"
                  className="w-28 ml-4 mb-8 mo:w-28 ta:w-20 de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl">
                  Fill Details
                </span>
                <p className="mo:mt-2">
                  <span className="text-balance">
                    Just fill your mandatory information
                  </span>
                </p>
              </li>
              <li className="list-none  ">
                <img
                  src={require("../../assests/Icons/address.png")}
                  alt="Home"
                  className="w-28 ml-4 mb-8 mo:w-28 mo:ml-8 ta:w-20 ta:grid  de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl ">
                  Just click & chill
                </span>
                <p className="mo:mt-2 mo:mb-24 de:text-balance ">
                  Our experts will handle it all
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-green-600 ">
  <h1 className="font-bold text-3xl pt-8 text-white mt-20 mb-16 flex justify-center mo:text-[26px] mo:mb-8 mo:mt-32">
    Home Services Right to You
  </h1>
  <div className="grid justify-items-center">
    <div className="grid justify-items-center mb-8 grid-cols-1 mo:grid-cols-2 ta:grid-cols-3 de:grid-cols-4 des:grid-cols-5 w-full gap-4 pt-8 mo:w-[90%] ta:w-[80%] de:w-[90%] des:w-[80%]">
      {services.map((service, i) => (
  <Link key={i} to={`/?service=${service.queryParam}`} onClick={() => openServiceModal(service)}>
    <div className="rounded-xl hover:shadow-lg hover:scale-105 hover:transition hover:ease-in-out hover:duration-300">
      <img
        src={service.src}
        alt={service.alt}
        className="w-28 bg-teal-900 box-content px-6 py-4 rounded-xl mb-2 mo:w-24 ta:w-24 de:w-28 des_search:w-24 des_xl:w-28"
      />
      <p className="mt-2 text-center text-white font-semibold mb-4">{service.line}</p>
    </div>
  </Link>
))}
    </div>
  </div>
</div>
{serviceModalOpen && <ServiceModal isOpenSevice={serviceModalOpen} closeModalService={closeServiceModal} serviceDetails={selectedService}/>}



       
</div> 
      {/* Suspense for lazy loading */}
      
        {/* Render ThrowablesScene component with overflow-x: hidden */}
        <div style={{overflowX:"hidden"}} className="">
      {/* Other content of the home page */}
     
      <ThrowablesScene  />
    </div>

     
{/* <footer className="bg-blue-900 text-white text-center py-4">
        {/* Footer content */}
        {/* © 2024 TuneGuru. All rights reserved.
      </footer> */} 
    </>
  )
}

export default Home;
