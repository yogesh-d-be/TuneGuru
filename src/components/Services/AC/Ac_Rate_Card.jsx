import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { rateCards } from "../Rate_Card";


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
      {/* <AC showCommon={showCommon} showElectrical={showElectrical} showMotors={showMotors} showService={showService} showParts={showParts}  */}
      {/* setShowCommon={setShowCommon} setShowElectrical={setShowElectrical} setShowMotors={setShowMotors} setShowService={setShowService}  setShowParts={setShowParts}/> */}
    </>
  );
}

export default AC_RATE_CARD;
