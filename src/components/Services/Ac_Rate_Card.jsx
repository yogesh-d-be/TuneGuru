// import React,{useState, useEffect} from "react";
// import { Modal } from 'antd';
// // FontAwesomeIcon import
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // FontAwesome icons import
// import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

// //when i put function name Ac_rate_card, it shows error: Imported JSX component Ac_rate_card must be in PascalCase or SCREAMING_SNAKE_CASE
// //For PascalCase: AcRateCard

// //For SCREAMING_SNAKE_CASE: AC_RATE_CARD

// function AC_RATE_CARD({isOpenCard,closeCard}){

//     const [showCommon,setShowCommon] = useState(false)
//     const [showElectrical, setShowElectrical] = useState(false)
//     const [showMotors,setShowMotors] = useState(false)
//     const [showService,setShowService] = useState(false)
//     const [showParts,setShowParts] = useState(false)

//     useEffect(() => {
//         // Apply overflow hidden to the body when the modal is open
//         if (isOpenCard) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "visible";
//         }
//         // Revert overflow style when the component is unmounted
//         return () => {
//             document.body.style.overflow = "visible";
//         };
//     }, [isOpenCard]);

//     const [modalWidth, setModalWidth] = useState(getModalWidth());
//     const [modalHeight, setModalHeight] = useState(400); // Initial height

//     useEffect(() => {
//         // Update modal width when window is resized
//         const handleResize = () => {
//             setModalWidth(getModalWidth());
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     // Function to calculate modal width based on window width
//     function getModalWidth() {
//         const windowWidth = window.innerWidth;
//         return windowWidth < 605 ? windowWidth - 50 : 600;
//     }

//     useEffect(()=>{
//         const handleHeight = () =>{
//             setModalHeight(getModalHeight());
//         };

//         window.addEventListener("resize",handleHeight);

//         return () =>{
//             window.removeEventListener("resize",handleHeight)
//         };
//     },[]);

//     function getModalHeight(){
//         const windowWidth = window.innerWidth;
//         return windowWidth < 550 ? 200 : 400;
//     }

//   // Function to toggle1 table show
//     const toggle1 = () =>{
//        setShowCommon (!showCommon)
//     }

//     const toggle2 = () =>{
//        setShowElectrical (!showElectrical)
//     }

//     const toggle3 = () =>{
//        setShowMotors (!showMotors)
//     }

//     const toggle4 = () =>{
//        setShowService (!showService)
//     }

//     const toggle5 = () =>{
//        setShowParts (!showParts)
//     }

//     const common = [
//         {
//             description: "Gas Charging including minor repairs (Split AC)",
//             price: 2499
//         },
//         {
//             description: "Gas Charging including minor repairs (Window AC)",
//             price: 1999
//         },
//         {
//             description: "Service Valve",
//             price: 549
//         },
//         {
//             description: "Condenser Coil - Onsitego (Upto 1 ton)",
//             price: 4499
//         },
//         {
//             description: "Condenser Coil - Onsitego (1-1.5 ton)",
//             price: 5899
//         },
//         {
//             description: "Condenser Coil - Onsitego (1.5-2 ton)",
//             price: 6499
//         },
//         {
//             description: "Cooling Coil - Onsitego (Upto 1 ton)",
//             price: 5999
//         },
//         {
//             description: "Cooling Coil - Onsitego (1-1.5 ton)",
//             price: 5999
//         },
//         {
//             description: "Cooling Coil - Onsitego (1.5-2 ton)",
//             price: 9599
//         },
//         {
//             description: "Compressor - Non Inverter",
//             price: 4999
//         },
//         {
//             description: "Pin Valve",
//             price: 49
//         },
//         {
//             description: "Expansion Valve",
//             price: 899
//         },
//         {
//             description: "Flare Nut",
//             price: 99
//         },
//         {
//             description: "Capillary",
//             price: 249
//         },
//         {
//             description: "Dead Nut",
//             price: 49
//         },
//     ]

//     const electrical =[
//         {
//             description: "Indoor PCB Repair",
//             price: 2499
//         },
//         {
//             description: "Outdoor PCB - Non Inverter Repair",
//             price: 1499
//         },
//         {
//             description: "Outdoor PCB - Inverter Repair",
//             price:2999
//         },
//         {
//             description: "Capacitor 2-5 mfd",
//             price: 499
//         },
//         {
//             description: "Capacitor 10-25 mfd",
//             price: 499
//         },
//         {
//             description: "Capacitor 25-50 mfd",
//             price: 499
//         },
//         {
//             description: "Capacitor 50-60 mfd",
//             price: 499
//         },
//         {
//             description: "Sensor",
//             price: 350
//         },
//     ]

//     const motors = [
//         {
//         description:"Fan Motor - Indoor",
//         price: 1499
//     },
//         {
//         description:"Fan Motor Capacitor",
//         price:399
//     },
//         {
//         description:"Fan Motor - Outdoor",
//         price:1999
//     },
//         {
//         description:"Blower Motor",
//         price:1999
//     },
//         {
//         description:"Swing Motor",
//         price:399
//     },
// ]
//     const servicing = [
//         {
//         description:"Split AC Installation",
//         price:1699
//     },
//         {
//         description:"Window AC Installation",
//         price:899
//     },
//         {
//         description:"Outer Unit Installation",
//         price:749
//     },
//         {
//         description:"Indoor Unit Installation",
//         price:749
//     },
//         {
//         description:"Split AC Un-installation",
//         price:599
//     },
//         {
//         description:"Window AC Un-installation",
//         price:499
//     },
//         {
//         description:"ODU Bracket / Stand",
//         price:749
//     },
//         {
//         description:"Jet Pump Service",
//         price:599
//     },
//         {
//         description:"Pull down service/Chemical Wash",
//         price:1199
//     },
// ]
//     const parts = [
//         {
//         description:"Anti rust coating",
//         price:299
//     },
//         {
//         description:"Fan Blade",
//         price:599
//     },
//         {
//         description:"Fuse",
//         price:99
//     },
//         {
//         description:"Copper Pipe (per mtr)",
//         price:749
//     },
//         {
//         description:"Electric Wire - 4 core (per mtr)",
//         price:149
//     },
//         {
//         description:"Drain Pipe - Flexible or Hard (per mtr)",
//         price:99
//     },
//         {
//         description:"Swing blade",
//         price:399
//     },
//         {
//         description:"Grill Cover",
//         price:1499
//     },
//         {
//         description:"Deodourizer - Activated Carbon Pouch",
//         price:399
//     },
//         {
//         description:"Refurb Compressor - Inverter AC",
//         price:7499
//     },
//         {
//         description:"AC Cover (Window)",
//         price:499
//     },
//         {
//         description:"AC Cover (Split IDU)",
//         price:499
//     },
// ]

//     return(
//         <>
//         <Modal
//                 open={isOpenCard}
//                 footer={null}
//                 width={modalWidth}
//                 maskClosable={true}
//                 onCancel={closeCard}
//                 style={{ borderRadius: "25px", height:modalHeight, }}
//                 centered={true}
//                 className="custom_ac_rate_card"
//             >
//                 <div className="mo:h-max-[100%] mo:top-4">
//                 <div className="relative m-auto mb-8 ">
//                     <h1 className="bg-blue-400 py-3 mt-8 pl-2 font-semibold text-lg w-[551px] ta:w-[482px]  ta:m-auto mo:w-[250px] mo:m-auto" onClick={toggle1}>Commonly Used Parts {showCommon ? (
//                            <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronUp} style={{color: "#000000",} } onClick={toggle1} /></span>
//                           ) : (
//                             <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#000000",} } onClick={toggle1} /></span>
//                           )}</h1>

//                           {/* table */}

//                    { showCommon && <table className="border border-black w-[549px] border-collapse m-auto ta:w-[480px] mo:w-[250px] mo:m-auto">
//                         <thead className="">
//                             <tr>
//                             <th className="border border-black p-2 mo:text-sm mo:p-1">Description</th>
//                             <th className="pl-6 border border-black p-2 mo:text-sm mo:pl-2 mo:p-1">Total Price (incl. of GST)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {common.map((spare,i)=>(
//                              <tr key={i} className="">
//                              <td className="border border-black py-2 pl-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">{spare.description}</td>
//                              <td className="text-center border border-black py-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">&#x20B9;{spare.price}</td>
//                          </tr>

//                         ))

// }</tbody>
//                     </table>
// }
//                 </div>

//                 {/* Electrical Parts */}

//                 <div className="relative m-auto mb-8 ">
//                     <h1 className="bg-blue-400 py-3 mt-8 pl-2 font-semibold text-lg w-[551px] ta:w-[482px]  ta:m-auto mo:w-[250px] mo:m-auto" onClick={toggle2}>Electrical Parts {showElectrical ? (
//                            <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronUp} style={{color: "#000000",} } onClick={toggle2} /></span>
//                           ) : (
//                             <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#000000",} } onClick={toggle2} /></span>
//                           )}</h1>

//                           {/* table */}

//                    { showElectrical && <table className="border border-black w-[549px] border-collapse m-auto ta:w-[480px] mo:w-[250px] mo:m-auto">
//                         <thead className="">
//                             <tr>
//                             <th className="border border-black p-2 mo:text-sm mo:p-1">Description</th>
//                             <th className="pl-6 border border-black p-2 mo:text-sm mo:pl-2 mo:p-1">Total Price (incl. of GST)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {electrical.map((spare,i)=>(
//                              <tr key={i} className="">
//                              <td className="border border-black py-2 pl-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">{spare.description}</td>
//                              <td className="text-center border border-black py-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">&#x20B9;{spare.price}</td>
//                          </tr>

//                         ))

// }</tbody>
//                     </table>
// }
//                 </div>

//                 {/* Motors */}

//                 <div className="relative m-auto  mb-8 ">
//                     <h1 className="bg-blue-400 py-3 mt-8 pl-2 font-semibold text-lg w-[551px] ta:w-[482px]  ta:m-auto mo:w-[250px] mo:m-auto" onClick={toggle3}>Motors{showMotors ? (
//                            <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronUp} style={{color: "#000000",} } onClick={toggle3} /></span>
//                           ) : (
//                             <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#000000",} } onClick={toggle3} /></span>
//                           )}</h1>

//                           {/* table */}

//                    { showMotors && <table className="border border-black w-[549px] border-collapse m-auto ta:w-[480px] mo:w-[250px] mo:m-auto">
//                         <thead className="">
//                             <tr>
//                             <th className="border border-black p-2 mo:text-sm mo:p-1">Description</th>
//                             <th className="pl-6 border border-black p-2 mo:text-sm mo:pl-2 mo:p-1">Total Price (incl. of GST)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {motors.map((spare,i)=>(
//                              <tr key={i} className="">
//                              <td className="border border-black py-2 pl-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">{spare.description}</td>
//                              <td className="text-center border border-black py-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">&#x20B9;{spare.price}</td>
//                          </tr>

//                         ))

// }</tbody>
//                     </table>
// }
//                 </div>

//                 {/* Service & insatll */}

//                 <div className="relative m-auto  mb-8">
//                     <h1 className="bg-blue-400 py-3 mt-8 pl-2 font-semibold text-lg w-[551px] ta:w-[482px]  ta:m-auto mo:w-[250px] mo:m-auto" onClick={toggle4}>Service & Install{showService ? (
//                            <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronUp} style={{color: "#000000",} } onClick={toggle4} /></span>
//                           ) : (
//                             <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#000000",} } onClick={toggle4} /></span>
//                           )}</h1>

//                           {/* table */}

//                    { showService && <table className="border border-black w-[549px] border-collapse m-auto ta:w-[480px] mo:w-[250px] mo:m-auto">
//                         <thead className="">
//                             <tr>
//                             <th className="border border-black p-2 mo:text-sm mo:p-1">Description</th>
//                             <th className="pl-6 border border-black p-2 mo:text-sm mo:pl-2 mo:p-1">Total Price (incl. of GST)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {servicing.map((spare,i)=>(
//                              <tr key={i} className="">
//                              <td className="border border-black py-2 pl-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">{spare.description}</td>
//                              <td className="text-center border border-black py-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">&#x20B9;{spare.price}</td>
//                          </tr>

//                         ))

// }</tbody>
//                     </table>
// }
//                 </div>

//                 {/* Other parts */}

//                 <div className="relative m-auto mb-6 ">
//                     <h1 className="bg-blue-400 py-3 mt-8 pl-2 font-semibold text-lg w-[551px] ta:w-[482px]  ta:m-auto mo:w-[250px] mo:m-auto" onClick={toggle5}>Other Parts {showCommon ? (
//                            <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronUp} style={{color: "#000000",} } onClick={toggle5} /></span>
//                           ) : (
//                             <span className="right-2 absolute m-auto ta:right-8 mo:right-8"><FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#000000",} } onClick={toggle5} /></span>
//                           )}</h1>

//                           {/* table */}

//                    { showParts && <table className="border border-black w-[549px] border-collapse m-auto ta:w-[480px] mo:w-[250px] mo:m-auto">
//                         <thead className="">
//                             <tr>
//                             <th className="border border-black p-2 mo:text-sm mo:p-1">Description</th>
//                             <th className="pl-6 border border-black p-2 mo:text-sm mo:pl-2 mo:p-1">Total Price (incl. of GST)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {parts.map((spare,i)=>(
//                              <tr key={i} className="">
//                              <td className="border border-black py-2 pl-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">{spare.description}</td>
//                              <td className="text-center border border-black py-2 ta:text-sm mo:text-[10px] mo:py-1 mo:pl-1">&#x20B9;{spare.price}</td>
//                          </tr>

//                         ))

// }</tbody>
//                     </table>
// }
//                 </div>
//                 </div>

//             </Modal>
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { rateCards } from "./Rate_Card";
import Fridge from "./Fridge";

const Section = ({ title, show, toggle, data }) => (
  <div className="relative m-auto mb-8">
    <h1
      className="bg-blue-400 py-3 mt-8 pl-4 ml-6 font-semibold text-lg w-full max-w-[602px] ta:w-[460px] ta:m-auto mo:w-[250px] mo:m-auto"
      onClick={toggle}
    >
      {title}
      <span className="right-2 absolute m-auto ta:right-8 mo:right-8">
        <FontAwesomeIcon
          icon={show ? faCircleChevronUp : faCircleChevronDown}
          style={{ color: "#000000" }}
          onClick={toggle}
        />
      </span>
    </h1>

    {show && (
     <div className="overflow-x-auto">
     <table className="border border-black w-full max-w-[600px] border-collapse m-auto ta:w-[460px] mo:w-[250px] mo:m-auto ">
          <thead className="">
            <tr className="">
              <th className="border border-black p-2 mo:text-sm mo:p-1 ">Description</th>
              <th className="border border-black p-2 mo:text-sm mo:p-1 ">Total Price (incl. of GST)</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, itemIndex) => (
              <tr key={itemIndex} className="">
                <td className="border border-black p-2 ta:text-sm mo:text-[10px] ">
                  {item.description.map((desc, descIndex) => (
                    <span key={descIndex} className="py-1 flex flex-col items-start justify-center ta:mb-[5px] ta:py-[5px] ">
                      {desc}
                    </span>
                  ))}
                </td>
                <td className="border border-black p-2 ta:text-sm mo:text-[10px] ">
                  {item.price.map((price, priceIndex) => (
                    <span key={priceIndex} className="py-1 flex flex-col items-center justify-center ">
                      ₹{price}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

function AC_RATE_CARD({ isOpenCard, closeCard }) {
  const [showCommon, setShowCommon] = useState(false);
  const [showElectrical, setShowElectrical] = useState(false);
  const [showMotors, setShowMotors] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showParts, setShowParts] = useState(false);

  const [tableView, setTableView] = useState(false)

  // const [modalWidth, setModalWidth] = useState(getModalWidth());
  // const [modalHeight, setModalHeight] = useState(getModalHeight());

  useEffect(() => {
    if (isOpenCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpenCard]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setModalWidth(getModalWidth());
  //     setModalHeight(getModalHeight());
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // function getModalWidth() {
  //   const windowWidth = window.innerWidth;
  //   return windowWidth < 605 ? windowWidth - 50 : 600;
  // }

  // function getModalHeight() {
  //   const windowHeight = window.innerHeight;
  //   return windowHeight < 550 ? 400 : 500;
  // }

  // const acRateCard = [
  //   {
  //     common: [
  //       {
  //         description: [
  //           "Gas Charging including minor repairs (Split AC)",
  //           "Gas Charging including minor repairs (Window AC)",
  //           "Service Valve",
  //           "Condenser Coil - Onsitego (Upto 1 ton)",
  //           "Condenser Coil - Onsitego (1-1.5 ton)",
  //           "Condenser Coil - Onsitego (1.5-2 ton)",
  //           "Cooling Coil - Onsitego (Upto 1 ton)",
  //           "Cooling Coil - Onsitego (1-1.5 ton)",
  //           "Cooling Coil - Onsitego (1.5-2 ton)",
  //           "Compressor - Non Inverter",
  //           "Pin Valve",
  //           "Expansion Valve",
  //           "Flare Nut",
  //           "Capillary",
  //           "Dead Nut",
  //         ],
  //         price: [
  //           2499, 1999, 549, 4499, 5899, 6499, 5999, 5999, 9599, 4999, 49, 899,
  //           99, 249, 49,
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     electrical: [
  //       {
  //         description: [
  //           "Indoor PCB Repair",
  //           "Outdoor PCB - Non Inverter Repair",
  //           "Outdoor PCB - Inverter Repair",
  //           "Capacitor 2-5 mfd",
  //           "Capacitor 10-25 mfd",
  //           "Capacitor 25-50 mfd",
  //           "Capacitor 50-60 mfd",
  //           "Sensor",
  //         ],
  //         price: [2499, 1499, 2999, 499, 499, 499, 499, 350],
  //       },
  //     ],
  //   },
  //   {
  //     motors: [
  //       {
  //         description: [
  //           "Fan Motor - Indoor",
  //           "Fan Motor Capacitor",
  //           "Fan Motor - Outdoor",
  //           "Blower Motor",
  //           "Swing Motor",
  //         ],
  //         price: [1499, 399, 1999, 1999, 399],
  //       },
  //     ],
  //   },
  //   {
  //     servicing: [
  //       {
  //         description: [
  //           "Split AC Installation",
  //           "Window AC Installation",
  //           "Outer Unit Installation",
  //           "Indoor Unit Installation",
  //           "Split AC Un-installation",
  //           "Window AC Un-installation",
  //           "ODU Bracket / Stand",
  //           "Jet Pump Service",
  //           "Pull down service/Chemical Wash",
  //         ],
  //         price: [1699, 899, 749, 749, 549, 499, 749, 599, 1199],
  //       },
  //     ],
  //   },
  //   {
  //     parts: [
  //       {
  //         description: [
  //           "Anti rust coating",
  //           "Fan Blade",
  //           "Fuse",
  //           "Copper Pipe (per mtr)",
  //           "Electric Wire - 4 core (per mtr)",
  //           "Drain Pipe - Flexible or Hard (per mtr)",
  //           "Swing blade",
  //           "Grill Cover",
  //           "Deodourizer - Activated Carbon Pouch",
  //           "Refurb Compressor - Inverter AC",
  //           "AC Cover (Window)",
  //           "AC Cover (Split IDU)",
  //         ],
  //         price: [299, 599, 99, 749, 149, 99, 399, 1499, 399, 7499, 499, 499],
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
     
      <Modal
        title="AC Rate Card"
        centered
        open={isOpenCard}
        footer={null}
        onCancel={closeCard}
        width={700}
      >
        <div
          
        >
          <Section
            title="Commonly Used Parts"
            show={showCommon}
            toggle={() => setShowCommon(!showCommon)}
            data={
              rateCards[0].acRateCard.find((item) => Object.keys(item)[0] === "common")
                .common
            }
          
          />
          <Section
            title="Electrical Parts"
            show={showElectrical}
            toggle={() => setShowElectrical(!showElectrical)}
            data={
              rateCards[0].acRateCard.find((item) => Object.keys(item)[0] === "electrical")
                .electrical
            }
           
          />

          <Section
            title="Motors"
            show={showMotors}
            toggle={() => setShowMotors(!showMotors)}
            data={
              rateCards[0].acRateCard.find((item) => Object.keys(item)[0] === "motors")
                .motors
            }
        
          />
          <Section
            title="Service & Install"
            show={showService}
            toggle={() => setShowService(!showService)}
            data={
              rateCards[0].acRateCard.find((item) => Object.keys(item)[0] === "servicing")
                .servicing
            }
            
          />
          <Section
            title="Other Parts"
            show={showParts}
            toggle={() => setShowParts(!showParts)}
            data={
              rateCards[0].acRateCard.find((item) => Object.keys(item)[0] === "parts").parts
            }
            
          />
        </div>
      </Modal>
      <Fridge showCommon={showCommon} showElectrical={showElectrical} showMotors={showMotors} showService={showService} showParts={showParts} 
      setShowCommon={setShowCommon} setShowElectrical={setShowElectrical} setShowMotors={setShowMotors} setShowService={setShowService}  setShowParts={setShowParts}/>
    </>
  );
}

export default AC_RATE_CARD;
