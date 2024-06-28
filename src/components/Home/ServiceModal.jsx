import React, { useEffect} from "react";
import { Modal } from "antd";
import "../Home/Navbar.css";
import { Link } from "react-router-dom";
function ServiceModal({ isOpenSevice, closeModalService, serviceDetails }) {

  useEffect(()=>{
    if(isOpenSevice){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "visible"
    }
    // Revert overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = "visible";
  };
  },[isOpenSevice])
  
  return (
    <>
      <Modal
        open={isOpenSevice}
        footer={null}
        maskClosable={true}
        onCancel={closeModalService}
        style={{ height: "330px", borderRadius: "25px" }}
        
        centered={true}
        className="custom"
      >
        <div className="">
        <h1 className="flex justify-center text-xl font-medium mb-4">
          {serviceDetails.line}
        </h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center place-items-center ta:grid ta:grid-cols-2 ta:gap-2 mo:grid mo:grid-cols-2 mo:gap-2 hover:text-white">
          {serviceDetails.images.map((image, i) => (
            <Link key={i} to={serviceDetails.path[i]} className="group">
              <div
              className="rounded-xl hover:shadow-lg hover:scale-105 transition ease-in-out duration-300 flex flex-col items-center  p-4 ta:p-2 mo:p-2 group-hover:bg-gray-600 hover:text-white"
            >
              <img
                src={image}
                alt={`${serviceDetails.alt} ${i + 1}`}
                className="w-20 h-20 bg-gray-600 box content p-2 rounded-md ta:w-16 mo:w-12"
              />
              <p className="text-center text-black font-semibold mt-2 text-pretty group-hover:text-white ">
                {serviceDetails.capt[i]}
              </p>
            </div></Link>
          ))}
        </div>
        {/* {Array.isArray(serviceDetails.images) ? (
                    // If it's an array, map over it to render images
                    serviceDetails.images.map((image, i) => (
                        <img key={i} src={image} alt={`Image ${i + 1}`} />
                    ))
                ) : (
                    // If it's not an array, render a single image
                    <img src={serviceDetails.images} alt={`Image 1`} />
                )} */}
                </div>
      </Modal>
    </>
  );
}

export default ServiceModal;
