import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faAnglesDown,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../StoreContext";
import ACI from "../../../assests/images/AC.jpg";
import ProfessionalTeamImage from "../../../assests/images/professional-team.jpg";
import LoginModal from "../../Register_Login/LoginModal";
import AC_RATE_CARD from "./Ac_Rate_Card";
import "../../Home/Navbar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../../service/Helper";
import '../Service.css'





function AC() {
 

  const {
    
    closeLoginModal,
    loginModalOpen,
    cartItems,
    addToCart,
    removeFromCart,
    
    serviceList
  } = useContext(StoreContext);

  const [selectedType, setSelectedType] = useState("Split");
  const [detailShow, setDetailShow] = useState("");
  const [acRateCard, setAcRateCard] = useState(false);
 

  const [mobileTableView, setMobileTableView] = useState(false);
  const [tableView, setTableView] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      setMobileTableView(window.innerWidth < 769);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const openRateCard = () => {
    setAcRateCard(true);
  };

  const closeRateCard = () => {
    setAcRateCard(false);
  };

  const toggle = (box) => {
    if (detailShow === box) {
      setDetailShow("");
    } else {
      setDetailShow(box);
    }
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToElementInContainer = (elementId, containerId) =>{
    const element = document.getElementById(elementId);
    const container = document.getElementById(containerId);

    if(element&& container){
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollTop = elementRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTable = (selectId) =>{
    const select = document.getElementById(selectId);
    if(select){
      select.scrollIntoView({behavior:"smooth"})
    }
  }

  const openTable = () =>{
    setTableView(!tableView);

    
  }

  useEffect(() => {
    if (tableView) {
      scrollToTable("table");
    }
  }, [tableView]);

  const serviceType = [
    {
      s_type: "Service",
      s_img: require("../../../assests/images/AC service.jpg"),
      s_scroll: () => scrollToElementInContainer("service", "c_div"),
    },
    {
      s_type: "Repair & Gas fill",
      s_img: require("../../../assests/images/AC Repair.jpeg"),
      s_scroll: () => scrollToElementInContainer("repair", "c_div"),
    },
    {
      s_type: "Installation & Uninstallation",
      s_img: require("../../../assests/images/AC install.jpg"),
      s_scroll: () => scrollToElementInContainer("install", "c_div"),
    },
  ];

 

  const showServiceList = (category, componentCategory, serviceCategory) => {
    return serviceList
        .filter(
            (service) =>
                service.serviceCategory === category &&
                service.c_category === componentCategory &&
                service.s_category === serviceCategory
        )
        .map((service, index) => (
            <div
                key={index}
                className="mt-6 flex flex-col shadow-2xl px-6 py-4 bg-gray-100 rounded-xl m-auto ta:justify-start mo:mx-auto"
            >
                <div className="flex flex-row items-center mo:flex-col">
                    <div
                        className="border-e-2 border-black mr-4 des_xl:basis-[45%] de:m-auto ta:m-auto mo:border-none mo:mr-0"
                        style={{ flexBasis: "50%" }}
                    >
                        <p className="text-green-700 mb-2 ta:text-sm mo:text-sm">
                            30 DAYS WARRANTY
                        </p>
                        <h1 className="font-semibold text-base mb-1 mo:text-sm">
                            {service.serviceName}
                        </h1>
                        <p className="text-pretty w-[90%] text-sm des_xl:w-[85%] ta:w-[85%] ta:text-[12px] ta:mb-2 mo:text-[11px]">
                            {service.description}
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-center mo:justify-around mo:w-full">
                    <div className="flex flex-row items-center w-9 mr-12 ml-4 des_xl:mr-6 des_search:mr-6 ta:mr-6 ta:ml-2 ta:mt-[-3px] mo:mr-6 mo:ml-0 mo:pt-[10px]">
                        <p
                            className="font-semibold text-lg ta:text-base ta:m-auto mo:text-[15px] "
                            style={{ flexBasis: "10%" }}
                        >
                            &#x20B9;{service.price}
                        </p>
                    </div>
                    {!cartItems[service.s_id] ? (
                        <button
                            className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-20 rounded-md text-blue-900 transition-transform duration-300 ease-in-out des_xl:basis-[15%] ta:w-15 ta:text-sm ta:m-auto mo:w-15 mo:text-sm mo:px-3 mo:py-2"
                            style={{ flexBasis: "10%" }}
                            onClick={() => addToCart(service.s_id)}
                        >
                            Add
                        </button>
                    ) : (
                        <div className="w-[63px] text-sm text-left mo:h-[25px]">
                            <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
                                <button
                                    onClick={() => removeFromCart(service.s_id)}
                                    className="px-2 py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out"
                                >
                                    -
                                </button>
                                <div className="border-x-2 border-blue-900 pl-1 py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">
                                    {cartItems[service.s_id]}
                                </div>
                                <button
                                    onClick={() => addToCart(service.s_id)}
                                    className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                      
                        
                    )}
                    <button onClick={() => toggle(service.serviceName)}>
                        {detailShow === service.serviceName ? (
                            <FontAwesomeIcon
                                icon={faAnglesUp}
                                beat
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex ta:flex-col ta:ml-4 mo:mx-auto mo:ml-8"
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faAnglesDown}
                                bounce
                                size="sm"
                                style={{ color: "#000000" }}
                                className="ml-16 ta:flex ta:flex-col ta:ml-4 mo:mx-auto mo:ml-8"
                            />
                        )}
                    </button>
                    </div>
                </div>
                {detailShow === service.serviceName && (
                    <div className="mt-8 ml-14 flex flex-col transition-height duration-300 ease-in-out ta:m-auto ta:mt-3 mo:m-auto mo:mt-3 mo:border-t-2 mo:border-black">
                        <img
                            src={`${API_URL}/images/${service.image}`}
                            alt="AC clean"
                            className="w-[40%] mx-auto ta:w-[40%] mt-6"
                        />
                        <ul className="flex flex-col ta:flex ta:justify-start ta:w-[97%] mo:w-[97%] mb-4 mt-4">
                            {service.details.map((detail, index) => (
                                <li
                                    key={index}
                                    className="w-[90%] mx-auto mt-3 text-sm ta:text-xs leading-6"
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
                        {/* show rate card */}
                        {!mobileTableView ?
                        (<li id="card" onClick={openRateCard} className="list-none text-sm mt-3 mb-4 text-blue-800 cursor-pointer text-center">Show Rate Card For Spare Parts</li>):
                        (<li id="tablecard" onClick={openTable} className="list-none text-sm mt-3 mb-4 text-blue-800 cursor-pointer text-center">Show Rate Card </li>)
                        
                        }
                        </div>
                )}
            </div>
        ));
};



// const renderTable = () => {
//   return (
//     <div id="table">
//       {rateCards[0].acRateCard.map((categoryObj, index) => (
//         <div key={index}>
//           {Object.keys(categoryObj).map((categoryKey) => (
//             <div key={categoryKey}>
//               <h2 className="text-2xl font-medium mt-8 mb-4">{categoryKey}</h2>
//               <table className="border border-black   border-collapse  ">
//                 <thead>
//                   <tr>
//                     <th className="border border-black p-2 mo:text-sm mo:p-1 ">Description</th>
//                     <th className="border border-black p-2 mo:text-sm mo:p-1 ">Total Price (incl. of GST)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categoryObj[categoryKey].map((item, itemIndex) => (
//                     <tr key={itemIndex}>
//                       <td className="border border-black p-2  mo:text-[10px] ">
//                         {item.description.map((desc, descIndex) => (
//                           <span key={descIndex} className="py-1 flex flex-col items-start justify-center ta:mb-[5px] ta:py-[5px] ">
//                             {desc}
//                           </span>
//                         ))}
//                       </td>
//                       <td className="border border-black p-2  mo:text-[10px] ">
//                         {item.price.map((price, priceIndex) => (
//                           <span key={priceIndex} className="py-1 flex flex-col items-start justify-center ">
//                             ₹{price}
//                           </span>
//                         ))}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       ))}


//     </div>
//   );
// };

const dataTable = [
  {
    images:[require('../../../assests/ratecard/ac_common.png')],
    alt:["common_table"]
  },
  {
    images:[require('../../../assests/ratecard/ac_electrical.png')],
    alt:["electrical_table"]
  },
  {
    images:[require('../../../assests/ratecard/ac_motors.png')],
    alt:["motors_table"]
  },
  {
    images:[require('../../../assests/ratecard/ac_service.png')],
    alt:["sevice_table"]
  },
  {
    images:[require('../../../assests/ratecard/ac_parts.png')],
    alt:["parts_table"]
  },
]

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };


// const selectServiceList = () =>{

//   if(selectedType==="Split"){
//   switch(componentCategory){
//     case "Split":
//       return showServiceList("AC", "split", "service");

//     case "Split":
//       return showServiceList("AC", "split", "repair");

//     case "Split":
//       return showServiceList("AC", "split", "install");

     
//       default:
//         return null;
//   }

//   else if(selectedType==="Window"){
//     switch(componentCategory){
//       case "Split":
//         return showServiceList("AC", "split", "service");
  
//       case "Split":
//         return showServiceList("AC", "split", "repair");
  
//       case "Split":
//         return showServiceList("AC", "split", "install");
  
       
//         default:
//           return null;
//     }
// }


const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

  return (
    <>
      {loginModalOpen && <LoginModal isOpen={true} closeModal={closeLoginModal} />}
      <div className="relative w-full ">
        <img src={ACI} alt="AC" className="w-full h-[620px]" />
        <div className="absolute top-0 left-0 flex justify-center h-full items-center w-full backdrop-brightness-50 flex-col">
          <h1 className="text-5xl font-bold text-white mb-12 mo:text-3xl">
            AC Repair and Service
          </h1>
          <p className="text-white text-xl font-medium mb-12 mo:text-lg">
            Kick back and chill, we will take care of it
          </p>
          <button
            onClick={() => scrollToElement("hello")}
            className="text-xl font-semibold bg-yellow-500 text-black px-4 py-2 rounded-3xl"
          >
            Get Started
          </button>
        </div>
      </div>



      <div className="w-full mt-12 relative mb-20">
        <img
          src={ProfessionalTeamImage}
          alt="professional-team"
          className="w-full h-[350px] mt-12"
        />
        <div className="top-1/2 left-0 w-full transform flex justify-center">
          <div
            id="hello"
            className=" w-[90%] flex justify-around rounded-3xl drop-shadow-2xl des:w-[90%] de:flex de:flex-col ta:flex ta:flex-col mo:w-full mo:flex mo:flex-col mo:m-auto"
          >
            <div
              id="select"
              className="border h-max mt-8 rounded-xl bg-blue-400 bg-fixed des_xl:w-[35%] de:w-[80%] de:ml-[10%] ta:w-[80%] ta:ml-[10%] mo:w-[90%] mo:ml-[5%]"
            >
              <h1 className="mt-4 mb-4 font-medium text-xl ml-4 w-full">
                Select a service
              </h1>
              <div className="flex m-4 des_search:flex des_search:flex-col de:flex de:justify-around ta:box-content">
                {serviceType.map((option, index) => (
                  <div
                    key={index}
                    onClick={option.s_scroll}
                    className="flex flex-wrap flex-col hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300 ta:flex ta:justify-center ta:mx-auto mo:mx-auto"
                  >
                    <img
                      src={option.s_img}
                      alt={option.s_type}
                      className="w-24 h-28 rounded-xl mr-6 ml-4 des_xl:w-20 des_xl:ml-3 des_search:mt-3 des_search:mb-1 ta:w-20 ta:ml-3 mo:w-16 mo:ml-3 mo:flex mo:justify-center mo:items-center"
                    />
                    <p className="text-center text-sm w-[130px] mt-1 des_xl:w-[100px] des_search:mb-1 ta:text-[12px] ta:text-center ta:w-[110px] mo:text-[12px] mo:text-center mo:w-[90px]">
                      {option.s_type}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            <div
              id="c_div"
              className="mt-16 w-[52%] overflow-auto des_xl:w-[58%] des_search:w-[62%] de:ml-[5%] de:w-[90%] ta:w-[95%] ta:ml-[5%] mo:w-[96%] mo:ml-2"
              style={{ maxHeight: "80vh" }}
            >
              <h1 className="text-3xl mt-8 font-semibold flex justify-center ta:text-2xl mo:text-xl">
                AC Repair & Maintenance Plans
              </h1>
              <h1 className="text-center text-xl font-semibold mt-6 mb-8 ta:text-lg mo:text-base">
                Select the type of Air Conditioner
              </h1>
              <div className="flex justify-center">
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
                  className={`px-6 py-2 border-2 font-medium mo:px-4 mo:py-2 ${
                    selectedType === "Window"
                      ? "border border-blue-500 bg-blue-900 text-white"
                      : ""
                  }`}
                >
                  Window AC
                </button>
              </div>
              
               <div id="service" className="mt-12 bg-gray-300 px-6 py-4 rounded-3xl des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1  className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Service
                </h1>
                
  { selectedType === "Split" && showServiceList("AC", "split", "service") }
  { selectedType === "Window" && showServiceList("AC", "window", "service") }

              </div>
              
              <div id="repair" className="mt-12 bg-gray-300 px-6 py-4 rounded-3xl des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1 className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Repair & Gas Fill
                </h1>
                { selectedType === "Split" &&
                showServiceList("AC", "split", "repair")
}
                { selectedType === "Window" &&
                showServiceList("AC", "window", "repair")
}
              </div>
              
              <div id="install" className="mt-12 bg-gray-300 px-6 py-4 rounded-3xl des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1 className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Installation & Uninstallation
                </h1>
                { selectedType === "Split" &&
                showServiceList("AC", "split", "install")
}
                { selectedType === "Window" &&
                showServiceList("AC", "window", "install")
}
              </div>

            
            </div>
          </div>
        </div>


        {mobileTableView && tableView && (
          <>
          <div id="table" className=""></div>
  <div  className="w-3/4 m-auto">
    <div className="mt-20">
    <p className="bg-blue-200 py-2 px-4 rounded text-[11px]">Labour Charges are capped at ₹299 per appliance</p>
      <Slider {...settings}>
          {dataTable.map((tab,i)=>(
            <div key={i} className=" text-black">
              <div  className="rounded-lg ">
              <img src={tab.images} alt={tab.alt} className=" "/>
              </div>
            </div>
          ))

          }
          </Slider>
    </div>
  </div>
  </>)}



        {acRateCard && <AC_RATE_CARD isOpenCard={acRateCard} closeCard={closeRateCard} />}
      </div>
    </>
  );
}

export default AC;
