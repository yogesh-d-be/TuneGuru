// import React, { useState } from "react";
// // Image imports
// import ACI from '../../assests/images/AC.jpg';
// import ProfessionalTeamImage from '../../assests/images/professional-team.jpg';
// // FontAwesomeIcon import
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // FontAwesome icons import
// import { faAnglesUp, faAnglesDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons';



// function AC() {
//   // State for selected AC type and detail show
//   const [selectedType, setSelectedType] = useState("Split");
//   const [detailShow, setDetailShow] = useState("");

//   // Function to handle type select
//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//   };

//   // Function to toggle detail show
//   const toggle = (box) => {
//     if (detailShow === box) {
//       setDetailShow(""); // Close if already open
//     } else {
//       setDetailShow(box); // Open
//     }
//   };

//   // Function to scroll to hello
//   const scrollToHello = () => {
//     const helloDiv = document.getElementById('hello');
//     if (helloDiv) {
//       helloDiv.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const serviceType = [{
//     s_type: "Service",
//     s_img:
//   },{

//   },{

//   }]

//   const serviceOptions = [
//     {
//       type: "Split",
//       name: "Power Saver AC Service",
//       price: 599,
//       description:
//         "Cleaning of AC with Foam and water jet by a TuneGuru professional for better cooling and lower power consumption",
//       image: require('../../assests/images/AC Foam jet.jpeg'),
//       details: [
//         "Cleaning of AC filters, cooling coil, drain tray and other parts",
//         "Gas pressure check, if required",
//         "Cleaning of the outdoor unit with water jet for split AC, if possible",
//       ],
//     },
//     {
//       type: "Split",
//       name: "AC Service Lite",
//       price: 439,
//       description:
//         "Basic cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption",
//       image: require('../../assests/images/AC clean.jpeg'),
//       details: [
//         "Cleaning of AC filters, cooling coil, drain tray and other parts",
//         "Gas pressure check, if required",
//         "Cleaning of the outdoor unit with water jet for split AC, if possible",
//       ],
//     },
//     {
//       type: "Window",
//       name: "Power Saver AC Repair",
//       price: 599,
//       description:
//         "Cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption",
//       image: require('../../assests/images/AC service.jpg'),
//       details: [],
//     },
//   ];

//   return (
//     <>
//       {/* AC repair and service section */}
//       <div className="relative w-full">
//         <img src={ACI} alt="AC" className="w-full h-[620px]" />
//         <div className="absolute top-0 left-0 flex justify-center h-full items-center w-full backdrop-brightness-50 flex-col">
//           <h1 className="text-5xl font-bold text-white mb-12 mo:text-3xl">AC Repair and Service</h1>
//           <p className="text-white text-xl font-medium mb-12 mo:text-lg">Kick back and chill, we will take care of it</p>
//           <button onClick={scrollToHello} className="text-xl font-semibold bg-yellow-500 text-black px-4 py-2 rounded-3xl">Get Started</button>
//         </div>
//       </div>

//       {/* AC service section */}
//       <div id="hello" className="relative w-full mt-20">
//         <img src={ProfessionalTeamImage} alt="professional-team" className="w-full h-[350px] mt-12" />
//         <div className="top-1/2 left-0 w-full transform -translate-y-1/3 flex justify-center">
//           <div className="bg-white w-[80%] h-[700px] flex justify-around rounded-3xl drop-shadow-2xl">
//             {/* Select a service section */}
//             <div className="border h-max mt-8 rounded-xl bg-blue-400">
//               <h1 className="mt-4 mb-4 font-medium text-xl ml-4 w-full">Select a service</h1>
//               <div className="flex m-4">
//                 {/* AC service options */}
//                 <div className="flex flex-wrap flex-col hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300">
//                   <img src={require('../../assests/images/AC service.jpg')} alt="AC service" className="w-24 h-28 rounded-xl mr-6 ml-4" />
//                   <p className="text-center text-sm">Service</p>
//                 </div>
//                 <div className="flex flex-wrap flex-col hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300">
//                   <img src={require('../../assests/images/AC Repair.jpeg')} alt="AC Repair" className="w-24 h-28 rounded-xl mr-6" />
//                   <p className="text-center text-sm">Repair</p>
//                 </div>
//                 <div className="flex flex-wrap flex-col hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300">
//                   <img src={require('../../assests/images/AC install.jpg')} alt="AC install" className="w-24 h-28 rounded-xl mr-6" />
//                   <p className="text-center w-24 text-sm">Installation & Uninstallation</p>
//                 </div>
//               </div>
//             </div>

//             {/* AC Service & Maintenance Plans */}
//             <div className="mt-16 w-[50%]">
//               <h1 className="text-3xl font-semibold flex justify-center">AC Service & Maintenance Plans</h1>
//               <h1 className="text-center text-xl font-semibold mt-6 mb-8">Select the type of Air Conditioner</h1>
//               <div className="flex justify-center">
//                 <button onClick={() => handleTypeSelect("Split")} className={`px-10 py-2 font-medium border-2 border-blue-300 mr-4 focus:bg-blue-900 ${selectedType === "Split" ? "border border-blue-500 bg-blue-900 text-white" : ""}`}>Split AC</button>
//                 <button onClick={() => handleTypeSelect("Window")} className={`px-6 py-2 border-2 font-medium border-blue-300 focus:bg-blue-900 ${selectedType === "Window" ? "border border-blue-500 text-white" : ""}`}>Window AC</button>
//               </div>
//               {/* Render service details based on selected type */}
//               {selectedType && (
//                 <div className="mt-12 w-[90%]">
//                   <h1 className="text-2xl font-medium">Service</h1>
//                   {/* Split AC Service */}
//                   {selectedType === "Split" && (
//                     <>
//                       {/* Power Saver AC Service */}
//                       <div onClick={() => toggle("1")} className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl" dir="ltr" style={{ flexWrap: 'wrap' }}>
//                         <div className="border-e-2 border-black mr-4" style={{ flexBasis: '50%' }}>
//                           <p className="text-green-700 mb-2">30 DAYS WARRANTY</p>
//                           <h1 className="font-semibold text-base mb-1">Power Saver AC Service</h1>
//                           <p className="text-pretty w-[90%] text-sm">Cleaning of AC with Foam and water jet by a TuneGuru professional for better cooling and lower power consumption</p>
//                         </div>
//                         <p className="flex flex-row items-center mr-12 ml-4 font-semibold text-lg" style={{ flexBasis: '10%' }}>&#x20B9;599</p>
//                         <button className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-4 rounded-md text-blue-900" style={{ flexBasis: '10%' }}>Add</button>
//                         {/* Toggle dropdown */}
//                         <button onClick={() => toggle("1")}>
//                           {detailShow === "1" ? (
//                             <FontAwesomeIcon icon={faAnglesUp} beat size="lg" style={{ color: "#000000" }} className="ml-8" />
//                           ) : (
//                             <FontAwesomeIcon icon={faAnglesDown} bounce size="lg" style={{ color: "#000000" }} className="ml-8" />
//                           )}
//                         </button>
//                         {/* Dropdown content */}
//                         {detailShow === "1" && (
//                           <div className="mt-6 ml-14 flex flex-col">
//                             <img src={require('../../assests/images/AC Foam jet.jpeg')} alt="AC clean" className="w-[40%] mx-auto" />
//                             <ul className="flex flex-col">
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Cleaning of AC filters, cooling coil, drain tray and other parts</li>
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Gas pressure check, if required</li>
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Cleaning of the outdoor unit with water jet for split AC, if possible</li>
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                       {/* AC service lite */}
//                       <div onClick={() => toggle("2")} className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl" dir="ltr" style={{ flexWrap: 'wrap' }}>
//                         <div className="border-e-2 border-black mr-4" style={{ flexBasis: '50%' }}>
//                           <p className="text-green-700 mb-2">30 DAYS WARRANTY</p>
//                           <h1 className="font-semibold text-base mb-1">AC Service Lite</h1>
//                           <p className="text-pretty w-[90%] text-sm">Basic cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption</p>
//                         </div>
//                         <p className="flex flex-row items-center mr-12 ml-4 font-semibold text-lg" style={{ flexBasis: '10%' }}>&#x20B9;439</p>
//                         <button className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-4 rounded-md text-blue-900" style={{ flexBasis: '10%' }}>Add</button>
//                         {/* Toggle dropdown */}
//                         <button onClick={() => toggle("2")}>
//                           {detailShow === "2" ? (
//                             <FontAwesomeIcon icon={faAnglesUp} beat size="lg" style={{ color: "#000000" }} className="ml-8" />
//                           ) : (
//                             <FontAwesomeIcon icon={faAnglesDown} bounce size="lg" style={{ color: "#000000" }} className="ml-8" />
//                           )}
//                         </button>
//                         {/* Dropdown content */}
//                         {detailShow === "2" && (
//                           <div className="mt-6 ml-14 flex flex-col">
//                             <img src={require('../../assests/images/AC clean.jpeg')} alt="AC clean" className="w-[40%] mx-auto" />
//                             <ul className="flex flex-col">
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Cleaning of AC filters, cooling coil, drain tray and other parts</li>
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Gas pressure check, if required</li>
//                               <li className="w-[90%] mx-auto mt-3 text-sm "><FontAwesomeIcon icon={faSquareCheck} size="lg" style={{ color: "#054d0a" }} className="mr-1" />Cleaning of the outdoor unit with water jet for split AC, if possible</li>
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                     </>
//                   )}
//                   {/* Window AC Service */}
//                   {selectedType === "Window" && (
//                     <div className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl" dir="ltr">
//                       <div className="border-e-2 border-black mr-8">
//                         <p className="text-green-700 mb-2">30 DAYS WARRANTY</p>
//                         <h1 className="font-semibold mb-1">Power Saver AC Repair</h1>
//                         <p className="text-pretty w-[90%] text-sm">Cleaning of AC with water jet by a TuneGuru professional for better cooling and lower power consumption</p>
//                       </div>
//                       <p className="flex flex-row items-center mr-16 font-semibold text-lg">&#x20B9;599</p>
//                       <button className="flex flex-row items-center border-2 border-blue-900 px-4 py-2 h-8 rounded-md text-blue-900">Add</button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AC;

import React, { useState, useEffect, useContext } from "react";
// Image imports
import ACI from '../../assests/images/AC.jpg';
import ProfessionalTeamImage from '../../assests/images/professional-team.jpg';
// FontAwesomeIcon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FontAwesome icons import
import { faAnglesUp, faAnglesDown, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import AC_RATE_CARD from "./Ac_Rate_Card";
import '../Home/Navbar.css'
import LoginModal from "../Register_Login/LoginModal";


import Cartservices from "../Cart/Cartservices";

import { StoreContext } from "../StoreContext";



function AC() {

  const { openLoginModal, closeLoginModal, loginModalOpen, cartItems, addToCart, removeFromCart, AllServiceDetails,updateCartItemQuantity  } = useContext(StoreContext)
  // State for selected AC type and detail show
  const [selectedType, setSelectedType] = useState("Split");
  const [detailShow, setDetailShow] = useState("");
  const [acRateCard, setAcRateCard] = useState(false)
 

  // const [cartItems, setCartItems] = useState({});

  // const addToCart = (itemId) => {
  //   if (!cartItems[itemId]) {
  //     setCartItems((prev) => ({ ...prev, [itemId]: 1 }));// new entry of service
  //   } else {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //already clicked service
  //   }
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };



  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  // Function to handle type select
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    console.log("selected")
  };

  //Rate card open & close

  const openRateCard = () =>{
    setAcRateCard(true)
  }

  const closeRateCard = () =>{
    setAcRateCard(false)
  }

 

  // Function to toggle detail show
  const toggle = (box) => {
    if (detailShow === box) {
      setDetailShow(""); // Close if already open
    } else {
      setDetailShow(box); // Open
    }
  };


//ADD TO CART 
// const addToCart = () =>{
//   let cart = JSON.parse(localStorage.getItem('cart')) //if already available cart

//   if(cart){
//     let itemInCart = cart.find(item => item.serviceData.serviceId === serviceData,serviceId)
//     if(itemInCart){
//       cart = cart.map(item =>{
//         if(item.serviceData.serviceId === serviceData,serviceId){
//           return{
//             ...item,
//             quantity: item.quantity + count
//           }
//         }
//         else{
//           return item;
//         }
//       })
//       localStorage.setItem('cart',JSON.stringify(cart))// localstroage update
//     }
//     else{//seperate item added not the same service
//       cart = [
//         ...cart,
//         {
//           serviceData,
//           quantity:count
//         }
//       ]
//       localStorage.setItem('cart',JSON.stringify(cart)) //save in local storage different service
//     }
//   }
//   else{
//     cart = [{
//       serviceData,
//       quantity: count
//     }]

//     localStorage.setItem('cart',JSON.stringify(cart))
//   }
// }


  // Function to scroll to hello
  const scrollToHello = () => {
    const helloDiv = document.getElementById('hello');
    if (helloDiv) {
      helloDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = () =>{
    const serviceDiv = document.getElementById('service');
    if(serviceDiv){
      serviceDiv.scrollIntoView({behavior:'smooth'})
    }
  }

  const scrollToRepair = () =>{
    const repairDiv = document.getElementById('repair');
    if(repairDiv){
      repairDiv.scrollIntoView({behavior:'smooth'})
    }
  }

  const scrollToinstall = () =>{
    const installDiv = document.getElementById('install');
    if(installDiv){
      installDiv.scrollIntoView({behavior:'smooth'})
    }
  }

  const serviceType = [{
    s_type: ["Service"],
    s_img:[require('../../assests/images/AC service.jpg')],
    s_scroll:scrollToService
},{
  s_type: ["Repair & Gas fill"],
  s_img:[require('../../assests/images/AC Repair.jpeg')],
  s_scroll:scrollToRepair
},{
  s_type: ["Installation & Uninstallation"],
  s_img:[require('../../assests/images/AC install.jpg')],
  s_scroll:scrollToinstall
}]



  
  
  return (
    <>
     {/* <div style={{ position: "relative", width: 500, height: 500 }}>
      <DraggableRectangle />
    </div> */}
    {loginModalOpen && <LoginModal isOpen={true} closeModal={closeLoginModal} />}
      {/* AC repair and service section */}
      <div className="relative w-full">
        <img src={ACI} alt="AC" className="w-full h-[620px]" />
        <div className="absolute top-0 left-0 flex justify-center h-full items-center w-full backdrop-brightness-50 flex-col">
          <h1 className="text-5xl font-bold text-white mb-12 mo:text-3xl">
            AC Repair and Service
          </h1>
          <p className="text-white text-xl font-medium mb-12 mo:text-lg">
            Kick back and chill, we will take care of it
          </p>
          <button
            onClick={scrollToHello}
            className="text-xl font-semibold bg-yellow-500 text-black px-4 py-2 rounded-3xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* AC service section */}
      <div  className="w-full mt-12 relative">
        
        <img
          src={ProfessionalTeamImage}
          alt="professional-team"
          className="w-full h-[350px] mt-12 "
        />
      
        <div className="top-1/2 left-0 w-full transform flex justify-center ">
          {/* whole div */}
          <div id="hello" className="bg-white w-[90%]  flex justify-around rounded-3xl drop-shadow-2xl des:w-[90%] de:flex de:flex-col ta:flex ta:flex-col mo:w-full mo:flex mo:flex-col mo:m-auto">
            {/* Select a service section */}
            <div id="select" className="border h-max mt-8 rounded-xl bg-blue-400 bg-fixed  des_xl:w-[35%] de:w-[80%] de:ml-[10%] ta:w-[80%] ta:ml-[10%] mo:w-[90%] mo:ml-[5%]">
              <h1 className="mt-4 mb-4 font-medium text-xl ml-4 w-full ">
                Select a service
              </h1>
              <div className="flex m-4 des_search:flex des_search:flex-col de:flex de:justify-around ta:box-content ">
                {/* AC service options */}
                {serviceType.map((option, index) => (
                  <div
                    key={index}
                    onClick={option.s_scroll}
                    className="flex flex-wrap flex-col hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300 ta:flex ta:justify-center ta:mx-auto mo:mx-auto "
                  >
                    <img
                      src={option.s_img}
                      alt={option.s_type}
                      className="w-24 h-28 rounded-xl mr-6 ml-4 des_xl:w-20 des_xl:ml-3 des_search:mt-3 des_search:mb-1 ta:w-20 ta:ml-3 mo:w-16 mo:ml-3b mo:flex mo:justify-center mo:items-center"
                    />
                    <p className="text-center  text-sm w-[130px] mt-1 des_xl:w-[100px] des_search:mb-1  ta:text-[12px] ta:text-center ta:w-[110px] mo:text-[12px] mo:text-center mo:w-[90px]">{option.s_type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AC Service & Maintenance Plans */}
            <div id="ac_div" className="mt-16 w-[52%] overflow-auto des_xl:w-[58%] des_search:w-[62%] de:ml-[5%] de:w-[90%] ta:w-[95%] ta:ml-[5%] mo:w-[96%] mo:ml-2" style={{maxHeight:"80vh"}}>
              <h1 className="text-3xl font-semibold flex justify-center ta:text-2xl mo:text-xl ">
                AC Service & Maintenance Plans
              </h1>
              <h1 className="text-center text-xl font-semibold mt-6 mb-8 ta:text-lg mo:text-base">
                Select the type of Air Conditioner
              </h1>
              <div className="flex justify-center ">
                <button
                  onClick={() => handleTypeSelect("Split")}
                  className={`px-10 py-2 font-medium border-2 mr-4 mo:px-8 mo:py-2 mo:text-sm ${
                    selectedType === "Split"
                      ? "border border-blue-500 bg-blue-900 text-white"
                      : ""
                  }`}
                >
                  Split AC
                </button>
                <button
                  onClick={() => handleTypeSelect("Window")}
                  className={`px-6 py-2 border-2 font-medium mo:px-4 mo:py-2  ${
                    selectedType === "Window"
                      ? "border border-blue-500 bg-blue-900 text-white"
                      : ""
                  }`}
                >
                  Window AC
                </button>
              </div>

              {/* Render service details based on selected type */}

              {selectedType && (
                <div  className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                  <h1 id="service" className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">Service</h1>
                  
                  {/* Split AC Service */}
                    {AllServiceDetails[0].serviceOptions
                      .filter((option) => option.a_type === selectedType && option.a_category === "Service" )
                      .map((service, index) => (
                        <div
                          key={index}
                          // onClick={() => toggle(service.a_name)}
                          className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl m-auto  ta:justify-start mo:mx-auto"
                          dir="ltr"
                          style={{ flexWrap: "wrap" }}
                        >
                          <div
                            className="border-e-2 border-black mr-4 des_xl:basis-[45%] de:m-auto ta:m-auto mo:mr-2"
                            style={{ flexBasis: "50%" }}
                          >
                            <p className="text-green-700 mb-2 ta:text-sm mo:text-sm">30 DAYS WARRANTY</p>
                            <h1 className="font-semibold text-base mb-1 mo:text-sm">
                              {service.a_name}
                            </h1>
                            <p className="text-pretty w-[90%] text-sm des_xl:w-[85%] ta:w-[85%] ta:text-[12px] ta:mb-2 mo:text-[11px]">
                              {service.a_description}
                            </p>
                          </div>

                          {/* this two div used to price , add button and icon in next colum in same row in mo, ta view*/}
                          {/* <div className="mb-6 w-full">
                          <div className="ta:flex ta:flex-row mb-1 ta:absolute ta:left-12 ta:justify-evenly"> */}
                          <div className="flex flex-row items-center w-9 mr-12 ml-4 des_xl:mr-6 des_search:mr-6 ta:mr-6 ta:ml-2 mo:mr-6 mo:ml-0">
                          <p
                            className=" font-semibold text-lg  ta:text-base ta:m-auto mo:text-[15px] "
                            style={{ flexBasis: "10%" }}
                          >
                            &#x20B9;{service.a_price}
                          </p>
                          </div>

                          {/* cart button */}
                        
                          {!cartItems[service.id] ? (
          <button
            className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-20 rounded-md text-blue-900 transition-transform duration-300 ease-in-out des_xl:basis-[15%] ta:w-15 ta:text-sm ta:m-auto mo:w-15 mo:text-sm mo:px-3 mo:py-2"
            style={{ flexBasis: "10%" }}
            onClick={() => addToCart(service.id)}
          >
            Add
          </button>
        ) : (
          <div className=" w-[63px] text-sm text-left mo:h-[25px]">
            <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
              <button onClick={()=>removeFromCart(service.id)} className="px-2 py-1  font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
              <div className="border-x-2 border-blue-900 pl-1  py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{cartItems[service.id]}</div>
              <button onClick={() => addToCart(service.id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
            </div>
          </div>
        )}


                          {/* Toggle dropdown */}

                          <button onClick={() => toggle(service.a_name)}>
                            {detailShow === service.a_name ? (
                              <FontAwesomeIcon
                                icon={faAnglesUp}
                                beat
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4 mo:mx-auto mo:ml-8"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faAnglesDown}
                                bounce
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4  mo:mx-auto mo:ml-8"
                              />
                            )}
                          </button>
                          {/* </div>  this  div used to price , add button and icon in next colum in same row in mo, ta view */}
                          {/* </div> */}
                          {/* Dropdown content */}

                          {detailShow === service.a_name && (
                            <div className="mt-6 ml-14 flex flex-col transition-height duration-300 ease-in-out ta:m-auto ta:mt-3 mo:m-auto mo:mt-3">
                            
                              <img
                                src={service.a_image}
                                alt="AC clean"
                                className="w-[40%] mx-auto ta:w-[40%]"
                              />
                              <ul className="flex flex-col ta:flex ta:justify-start ta:w-[97%] mo:w-[97%]">
                                {service.a_details.map((detail, index) => (
                                  <li
                                    key={index}
                                    className="w-[90%] mx-auto mt-3 text-sm ta:text-xs  "
                                  >
                                    <FontAwesomeIcon
                                      icon={faSquareCheck}
                                      size="lg"
                                      style={{ color: "#054d0a" }}
                                      className="mr-1"
                                    />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                              </div>
                            
                          )}
                        </div>
                      ))}



                      {/* Repair & gas fill*/}

                      <h1 id="repair" className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">Repair & Gas Fill</h1>
                    
                    {/* Split AC Service */}
                    {AllServiceDetails[0].repairOptions
                      .filter((option) => option.a_type === selectedType && option.a_category === "Repair & Gas fill")
                      .map((service, index) => (
                        <div
                          key={index}
                          // onClick={() => toggle(service.a_name)}
                          className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl m-auto  ta:justify-start mo:mx-auto"
                          dir="ltr"
                          style={{ flexWrap: "wrap" }}
                        >
                          <div
                            className="border-e-2 border-black mr-4 des_xl:basis-[45%] de:m-auto ta:m-auto mo:mr-2"
                            style={{ flexBasis: "50%" }}
                          >
                            <p className="text-green-700 mb-2 ta:text-sm mo:text-sm">30 DAYS WARRANTY</p>
                            <h1 className="font-semibold text-base mb-1 mo:text-sm">
                              {service.a_name}
                            </h1>
                            <p className="text-pretty w-[90%] text-sm des_xl:w-[85%] ta:w-[85%] ta:text-[12px] ta:mb-2 mo:text-[11px]">
                              {service.a_description}
                            </p>
                          </div>

                          {/* this two div used to price , add button and icon in next colum in same row in mo, ta view*/}
                          {/* <div className="mb-6 w-full">
                          <div className="ta:flex ta:flex-row mb-1 ta:absolute ta:left-12 ta:justify-evenly"> */}
                          <div className="flex flex-row items-center w-9 mr-12 ml-4 des_xl:mr-6 des_search:mr-6 ta:mr-6 ta:ml-2 mo:mr-6 mo:ml-0">
                          <p
                            className=" font-semibold text-lg  ta:text-base ta:m-auto mo:text-[15px] "
                            style={{ flexBasis: "10%" }}
                          >
                            &#x20B9;{service.a_price}
                          </p>
                          </div>

                          {/* <Add_To_Cart/> */}
                          {!cartItems[service.id] ? (
          <button
            className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-20 rounded-md text-blue-900 transition-transform duration-300 ease-in-out des_xl:basis-[15%] ta:w-15 ta:text-sm ta:m-auto mo:w-15 mo:text-sm mo:px-3 mo:py-2"
            style={{ flexBasis: "10%" }}
            onClick={() => addToCart(service.id)}
          >
            Add
          </button>
        ) : (
          <div className=" w-[63px] text-sm text-left mo:h-[25px]">
            <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
              <button onClick={() => removeFromCart(service.id)} className="px-2 py-1  font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
              <div className="border-x-2 border-blue-900 pl-1  py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{cartItems[service.id]}</div>
              <button onClick={() => addToCart(service.id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
            </div>
          </div>
        )}
                          {/* Toggle dropdown */}

                          <button onClick={() => toggle(service.a_name)}>
                            {detailShow === service.a_name ? (
                              <FontAwesomeIcon
                                icon={faAnglesUp}
                                beat
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4 mo:mx-auto mo:ml-8"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faAnglesDown}
                                bounce
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4  mo:mx-auto mo:ml-8"
                              />
                            )}
                          </button>
                          {/* </div>  this  div used to price , add button and icon in next colum in same row in mo, ta view */}
                          {/* </div> */}
                          {/* Dropdown content */}

                          {detailShow === service.a_name && (
                            <div className="mt-6 ml-14 flex flex-col transition-height duration-300 ease-in-out ta:m-auto ta:mt-3 mo:m-auto mo:mt-3">
                            
                              <img
                                src={service.a_image}
                                alt="AC clean"
                                className="w-[40%] mx-auto ta:w-[40%]"
                              />
                              <ul className="flex flex-col ta:flex ta:justify-start ta:w-[97%] mo:w-[97%]">
                                {service.a_details.map((detail, index) => (
                                  <li
                                    key={index}
                                    className="w-[90%] mx-auto mt-3 text-sm ta:text-xs  "
                                  >
                                    <FontAwesomeIcon
                                      icon={faSquareCheck}
                                      size="lg"
                                      style={{ color: "#054d0a" }}
                                      className="mr-1"
                                    />
                                    {detail}
                                  </li>
                                ))}
                                {/* show rate card */}
                                <li onClick={openRateCard} className="text-sm mt-3 mb-4 text-blue-800 cursor-pointer">Show Rate Card For Spare Parts</li>
                              </ul>
                              </div>
                            
                          )}
                        </div>
                      ))}


                      {/* Installation & Uninstallation */}

                      <h1 id="install" className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">Installation & Uninstallation</h1>
                    
                    {/* Split AC Service */}
                    {AllServiceDetails[0].installOptions
                      .filter((option) => option.a_type === selectedType && option.a_category === "Installation & Uninstallation")
                      .map((service, index) => (
                        <div
                          key={index}
                          // onClick={() => toggle(service.a_name)}
                          className="mt-6 flex flex-row items-center shadow-2xl px-6 py-4 bg-gray-100 rounded-xl m-auto  ta:justify-start mo:mx-auto"
                          dir="ltr"
                          style={{ flexWrap: "wrap" }}
                        >
                          <div
                            className="border-e-2 border-black mr-4 des_xl:basis-[45%] de:m-auto ta:m-auto mo:mr-2"
                            style={{ flexBasis: "50%" }}
                          >
                            <p className="text-green-700 mb-2 ta:text-sm mo:text-sm">30 DAYS WARRANTY</p>
                            <h1 className="font-semibold text-base mb-1 mo:text-sm">
                              {service.a_name}
                            </h1>
                            <p className="text-pretty w-[90%] text-sm des_xl:w-[85%] ta:w-[85%] ta:text-[12px] ta:mb-2 mo:text-[11px]">
                              {service.a_description}
                            </p>
                          </div>

                          {/* this two div used to price , add button and icon in next colum in same row in mo, ta view*/}
                          {/* <div className="mb-6 w-full">
                          <div className="ta:flex ta:flex-row mb-1 ta:absolute ta:left-12 ta:justify-evenly"> */}
                          <div className="flex flex-row items-center w-9 mr-12 ml-4 des_xl:mr-6 des_search:mr-6 ta:mr-6 ta:ml-2 mo:mr-6 mo:ml-0">
                          <p
                            className=" font-semibold text-lg  ta:text-base ta:m-auto mo:text-[15px] "
                            style={{ flexBasis: "10%" }}
                          >
                            &#x20B9;{service.a_price}
                          </p>
                          </div>

                          {/* <Add_To_Cart/> */}
                          {!cartItems[service.id] ? (
          <button
            className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-20 rounded-md text-blue-900 transition-transform duration-300 ease-in-out des_xl:basis-[15%] ta:w-15 ta:text-sm ta:m-auto mo:w-15 mo:text-sm mo:px-3 mo:py-2"
            style={{ flexBasis: "10%" }}
            onClick={() => addToCart(service.id)}
          >
            Add
          </button>
        ) : (
          <div className=" w-[63px] text-sm text-left mo:h-[25px]">
            <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
              <button onClick={() => removeFromCart(service.id)} className="px-2 py-1  font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
              <div className="border-x-2 border-blue-900 pl-1  py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{cartItems[service.id]}</div>
              <button onClick={() => addToCart(service.id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
            </div>
          </div>
        )}

                          {/* Toggle dropdown */}

                          <button onClick={() => toggle(service.a_name)}>
                            {detailShow === service.a_name ? (
                              <FontAwesomeIcon
                                icon={faAnglesUp}
                                beat
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4 mo:mx-auto mo:ml-8"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faAnglesDown}
                                bounce
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex  ta:flex-col ta:ml-4  mo:mx-auto mo:ml-8"
                              />
                            )}
                          </button>
                          {/* </div>  this  div used to price , add button and icon in next colum in same row in mo, ta view */}
                          {/* </div> */}
                          {/* Dropdown content */}

                          {detailShow === service.a_name && (
                            <div className="mt-6 ml-14 flex flex-col transition-height duration-300 ease-in-out ta:m-auto ta:mt-3 mo:m-auto mo:mt-3">
                            
                              <img
                                src={service.a_image}
                                alt="AC clean"
                                className="w-[40%] mx-auto ta:w-[40%]"
                              />
                              <ul className="flex flex-col ta:flex ta:justify-start ta:w-[97%] mo:w-[97%]">
                                {service.a_details.map((detail, index) => (
                                  <li
                                    key={index}
                                    className="w-[90%] mx-auto mt-3 text-sm ta:text-xs  "
                                  >
                                    <FontAwesomeIcon
                                      icon={faSquareCheck}
                                      size="lg"
                                      style={{ color: "#054d0a" }}
                                      className="mr-1"
                                    />
                                    {detail}
                                  </li>
                                ))}
                                {/* show rate card */}
                                <li onClick={openRateCard} className="text-sm mt-3 mb-4 text-blue-800 cursor-pointer">Show Rate Card For Spare Parts</li>
                              </ul>
                              </div>
                            
                          )}
                        </div>
                      ))}


                      
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {acRateCard && <AC_RATE_CARD isOpenCard={acRateCard} closeCard = {closeRateCard} />}
        
      </>
    );
  }

  export default AC;