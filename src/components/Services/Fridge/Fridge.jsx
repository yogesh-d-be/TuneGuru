import React, { useState, useEffect, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faAnglesDown,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../StoreContext";
import FRIDGE from "../../../assests/images/fridge_service.jpg";
import ProfessionalTeamImage from "../../../assests/images/professional-team.jpg";
import LoginModal from "../../Register_Login/LoginModal";
import "../../Home/Navbar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../../service/Helper";
import '../Service.css'
import FRIDGE_RATE_CARD from "./Fridge_Rate_Card";





function Fridge() {
 

  const {
    
    closeLoginModal,
    loginModalOpen,
    cartItems,
    addToCart,
    removeFromCart,
    
    serviceList
  } = useContext(StoreContext);

  
  const [detailShow, setDetailShow] = useState("");
  const [fridgeRateCard, setFridgeRateCard] = useState(false);
 

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

  
  const openRateCard = () => {
    setFridgeRateCard(true);
  };

  const closeRateCard = () => {
    setFridgeRateCard(false);
  };

  const toggle = (box) => {
    if (detailShow === box) {
      setDetailShow("");
    } else {
      setDetailShow(box);
    }
  };



  const scrollToElement = (divId) => {
    const element = document.getElementById(divId);
    if (element) {
   
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    
    }
  };

  

  const scrollToElementInContainer = (elementId, containerId) => {
    const element = document.getElementById(elementId);
    const container = document.getElementById(containerId);
  
    if (element && container) {
      
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
  
      // Calculate the scroll position to make the element appear at the top of the container
      const scrollTop = elementRect.top - containerRect.top + container.scrollTop;
  
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });

    } 
  };
  
  const scrollToTable = (containerId, elementId) =>{
    const container = document.getElementById(containerId);
    
    if (container) {
          //  console.log(`Scrolling to table with ID ${selectId}`);
           container.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      s_type: "Single Door",
      s_img: require("../../../assests/images/single-door.jpeg"),
      s_scroll: () =>scrollToElementInContainer('single', 'c_div'),
    },
    {
      s_type: "Double Door",
      s_img: require("../../../assests/images/double-door.jpg"),
      s_scroll: () => scrollToElementInContainer('double', 'c_div'),
    },
    {
      s_type: "Side Door",
      s_img: require("../../../assests/images/side-door.jpg"),
      s_scroll: () => scrollToElementInContainer('side', 'c_div'),
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
                <div className="flex flex-row items-center">
                    <div
                        className="border-e-2 border-black mr-4 des_xl:basis-[45%] de:m-auto ta:m-auto mo:mr-2"
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
                    <div className="flex flex-row mt-3 items-center w-9 mr-12 ml-4 des_xl:mr-6 des_search:mr-6 ta:mr-6 ta:ml-2 mo:mr-6 mo:ml-0">
                        <p
                            className="font-semibold text-lg ta:text-base ta:m-auto mo:text-[15px]"
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
                {detailShow === service.serviceName && (
                    <div className="mt-6 ml-14 flex flex-col transition-height duration-300 ease-in-out ta:m-auto ta:mt-3 mo:m-auto mo:mt-3">
                        <img
                            src={`${API_URL}/images/${service.image}`}
                            alt="Fridge service"
                            className="w-[40%] mx-auto ta:w-[40%]"
                        />
                        <ul className="flex flex-col ta:flex ta:justify-start ta:w-[97%] mo:w-[97%] mb-4">
                            {service.details.map((detail, index) => (
                                <li
                                    key={index}
                                    className="w-[90%] mx-auto mt-3 text-sm ta:text-xs"
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



const dataTable = [
  {
    images: [require('../../../assests/ratecard/fr_1.png')],
    alt: ["fridge1"]
  },
  {
    images: [require('../../../assests/ratecard/fr_2.png')],
    alt: ["fridge2"]
  },
  {
    images: [require('../../../assests/ratecard/fr_3.png')],
    alt: ["fridge3"]
  },
  {
    images: [require('../../../assests/ratecard/fr_4.png')],
    alt: ["fridge4"]
  },
  {
    images: [require('../../../assests/ratecard/fr_5.png')],
    alt: ["fridge5"]
  },
  {
    images: [require('../../../assests/ratecard/fr_6.png')],
    alt: ["fridge6"]
  },
  {
    images: [require('../../../assests/ratecard/fr_7.png')],
    alt: ["fridge7"]
  },
  {
    images: [require('../../../assests/ratecard/fr_8.png')],
    alt: ["fridge8"]
  },
  {
    images: [require('../../../assests/ratecard/fr_9.png')],
    alt: ["fridge9"]
  },
  {
    images: [require('../../../assests/ratecard/fr_10.png')],
    alt: ["fridge10"]
  },
  {
    images: [require('../../../assests/ratecard/fr_11.png')],
    alt: ["fridge11"]
  },
  {
    images: [require('../../../assests/ratecard/fr_12.png')],
    alt: ["fridge12"]
  },
  {
    images: [require('../../../assests/ratecard/fr_13.png')],
    alt: ["fridge13"]
  },
  {
    images: [require('../../../assests/ratecard/fr_14.png')],
    alt: ["fridge14"]
  },
  {
    images: [require('../../../assests/ratecard/fr_15.png')],
    alt: ["fridge15"]
  },
  {
    images: [require('../../../assests/ratecard/fr_16.png')],
    alt: ["fridge16"]
  },
  {
    images: [require('../../../assests/ratecard/fr_17.png')],
    alt: ["fridge17"]
  },
  {
    images: [require('../../../assests/ratecard/fr_18.png')],
    alt: ["fridge18"]
  },
  {
    images: [require('../../../assests/ratecard/fr_19.png')],
    alt: ["fridge19"]
  },
  {
    images: [require('../../../assests/ratecard/fr_20.png')],
    alt: ["fridge20"]
  },
  {
    images: [require('../../../assests/ratecard/fr_21.png')],
    alt: ["fridge21"]
  }
];


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
      <div className="relative w-full">
        <img src={FRIDGE} alt="AC" className=" mx-auto h-[620px]" />
        <div className="absolute top-0 left-0 flex justify-center h-full items-center w-full backdrop-brightness-50 flex-col">
          <h1 className="text-5xl font-bold text-white mb-12 mo:text-3xl">
            Fridge Repair and Service
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



      <div className="w-full mt-12 relative ">
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
                Fridge Service & Maintenance Plans
              </h1>
              <h1 className="text-center text-xl font-semibold mt-6 mb-20 ta:text-lg mo:text-base">
                Select the type of Refrigerator
              </h1>
              {/* <div className="flex justify-center">
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
              </div> */}
              {/* <div className=""></div> */}
               <div id="single"  className=" mt-12 pt-4 bg-gray-300 px-6 py-4 rounded-3xl des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1 className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Single Door
                </h1>
                
  { showServiceList("Fridge", "singledoor", "service") }
  

              </div>
              {/* <div  className=""></div> */}
              <div id="double"  className="mt-12 bg-gray-300 px-6 py-4 rounded-3xl  des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1 className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Double Door
                </h1>
                { showServiceList("Fridge", "doubledoor", "service") }
              </div>
              {/* <div  className=""></div> */}
              <div id="side" className="mt-12 pt-4 bg-gray-300 px-6 py-4 rounded-3xl des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
                <h1  className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl">
                  Side Door
                </h1>
                { showServiceList("Fridge", "sidedoor", "service") }
              </div>

            
            </div>
          </div>
        </div>


        {mobileTableView && tableView && (
          <>
          <div id="table" className=""></div>
  <div    className="w-3/4 m-auto">
    <div className="mt-20">
      <Slider {...settings}>
          {dataTable.map((tab,i)=>(
            <div  key={i} className=" text-black">
              <div id="table-content" className="rounded-lg ">
              <img src={tab.images} alt={tab.alt} className=" "/>
              </div>
              
            </div>
           
          ))

          }
          </Slider>
    </div>
  </div>
  </>)}



        {fridgeRateCard && <FRIDGE_RATE_CARD isOpenCard={fridgeRateCard} closeCard={closeRateCard} />}
      </div>
    </>
  );
}

export default Fridge;
