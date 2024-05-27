import React, { useState, useEffect, useContext } from "react";
// Image imports
import Team from "../../assests/images/Technical team.jpg";
import ProfessionalTeamImage from "../../assests/images/professional-team.jpg";
// FontAwesomeIcon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwesome icons import
import {
  faAnglesUp,
  faAnglesDown,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import AC_RATE_CARD from "./Ac_Rate_Card";
import "../Home/Navbar.css";
import LoginModal from "../Register_Login/LoginModal";
import { servicesAvailable } from "./AllServices";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";

function Services() {
 
  // const [select, setSelect] = useState("")
  const { openLoginModal, closeLoginModal, loginModalOpen } = useContext(StoreContext)
  const scrollToHello = () => {
    const helloDiv = document.getElementById("hello");
    if (helloDiv) {
      helloDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToService = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
      {loginModalOpen && (
        <LoginModal isOpen={true} closeModal={closeLoginModal} />
      )}
      {/* AC repair and service section */}
      <div className="relative w-full place-content-center  flex ">
        <img src={Team} alt="Professional Team" className="h-[620px]" />
        <div className="absolute top-0 left-0 flex justify-center h-full items-center w-full backdrop-brightness-50 flex-col">
          <h1 className="text-5xl font-bold text-white mb-12 mo:text-3xl">
            Tune Your Home
          </h1>
          <p className="text-white text-xl font-medium mb-12 ta:text-lg ta:w-[80%] ta:text-center mo:w-[80%] mo:text-center mo:text-lg">
            Unlock the Beauty of Your Home: Where Maintenance Meets Marvel!
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
      <div className="w-full mt-12 relative">
        <img
          src={ProfessionalTeamImage}
          alt="professional-team"
          className="w-full h-[350px] mt-12 "
        />
      </div>
      <div className="top-1/2 left-0 w-full transform flex justify-center ">
        {/* whole div */}
        <div
          id="hello"
          className="bg-white w-[90%]  flex justify-around rounded-3xl drop-shadow-2xl des:w-[90%] de:flex de:flex-col ta:flex ta:flex-col mo:w-full mo:flex mo:flex-col mo:m-auto"
        >
          {/* Select a service section */}
          <div
            id="select"
            className="border h-max mt-8 rounded-xl bg-gray-200  des_xl:w-[35%] de:w-[80%] de:ml-[10%] ta:w-[80%] ta:ml-[10%] mo:w-[90%] mo:ml-[5%]"
          >
            <h1 className="mt-8 mb-4 font-medium text-xl ml-4 w-[250px] ">
              Select a service
            </h1>
            <div className="flex flex-col m-4 des_search:flex des_search:flex-col de:flex de:justify-around ta:box-content ">
              {/* AC service options */}
              {servicesAvailable.map((opt, index) => (
                <div key={index} className="w-full">
                  {opt.heading.map((heading, i) => (
                    <div className="py-3 px-2 hover:bg-blue-400 w-full" key={i}>
                      
                      <div key={i}>
                      <Link>
                        <p onClick={()=>scrollToService(opt.scroll[i])} className="ml-4 font-semibold hover:text-white hover:scale-110 transition-transform duration-300 ease-in-out w-full text-md  mt-1 des_xl:w-[100px] des_search:mb-1  ta:text-[12px] de:ml-8 ta:w-[110px] mo:text-[12px]  mo:w-[90px]">
                          {heading}
                        </p>
                      </Link>
                      </div>
                  
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Appliances */}
          <div
            id="ac_div"
            className="mt-16 w-[52%] overflow-auto des_xl:w-[58%] des_search:w-[62%] de:ml-[5%] de:w-[90%] ta:w-[95%] ta:ml-[5%] mo:w-[96%] mo:ml-2"
            style={{ maxHeight: "80vh" }}
          >
            <div id="ac" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.Appliances.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8  mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Electrician */}
            <div id="el" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.Electrician.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8  mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Plumber */}
            <div id="pl" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.Plumber.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* carpenter */}
            <div id="ca" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.Carpenter.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Device service */}
            <div id="de" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.DeviceServices.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8  mt-6 mb-6 ml-12  mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Cleaning services */}
            <div id="cl" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.CleaningServices.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Pest control */}
            <div id="pe" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.PestControl.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12  mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* VehicleServices */}
            <div id="ve" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.VehicleServices.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* WaterPurifier */}
            <div id="wa" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.WaterPurifier.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Painting */}
            <div id="pa" className="mt-12  bg-gray-300 px-6 py-4 rounded-3xl mb-4 des_search:w-[100%] ta:w-[95%] mo:w-[100%] mo:px-4 mo:py-3">
              {servicesAvailable.map((op, i) => (
                <div key={i}>
                  {op.Painting.map((heading, si) => (
                    <div key={si}>
                      <h1
                        key={si}
                        id="service"
                        className="text-2xl font-medium mt-4 ta:text-xl mo:text-xl"
                      >
                        {heading.head}
                      </h1>
                      <div className="flex flex-wrap gap-8 mt-6 mb-6 ml-12 justify-around mo:justify-start">
                        {heading.icon.map((image, imi) => (
                          <div
                            key={imi}
                            className="h-16 flex flex-row items-center w-40  "
                          >
                            <img
                              src={image}
                              alt={`${heading.service}${imi + 1}`}
                              className="w-8 h-12"
                            />
                            <div>
                              <li className="list-none ml-2 mo:text-sm">
                                <Link to={heading.path[imi]} className="">
                                  {heading.service[imi]}
                                </Link>
                              </li>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
