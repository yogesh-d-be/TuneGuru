import React, { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../StoreContext";
import { Link, useNavigate } from "react-router-dom";
import "../Bookings/Bookings.css"
function MyBookings() {
  const { apiInstance} = useContext(StoreContext);
  const token = localStorage.getItem("userdbtoken");
  const [data, setData] = useState([]);

  const fetchBookings = useCallback(async () => {
    try {
      const response = await apiInstance.post("/api/book/userbookings", {});
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }, [apiInstance]);

const navigate = useNavigate()

  useEffect(() => {
    
    if (token) {
      fetchBookings();
    } else {
      navigate('/cart');
    }
    // eslint-disable-next-line
  }, [token]);

const getStatusColor = (status) =>{
  switch(status){
    case "TuneGuru Mender Searching":
    return "text-red-700";
    case "TuneGuru Mender Assigned":
      return "text-blue-700"
    case "TuneGuru Mender On Way":
      return "text-green-700";
    default:
      return "text-black";
  }
}

  return (
    <>
      <div className="mb-4 overflow-x-hidden">
        <h2 className="font-bold mb-14 mt-6 ml-4 text-2xl">My Bookings</h2>
        

        <div className="flex flex-col gap-4 justify-center items-center mb-16 mo:mb-12">
          {
             data.length === 0 ? <div className="bg-orange-200 flex flex-col mx-4 rounded-2xl py-4 items-center"><div className="flex items-center ml-6"><img src={require('../../assests/Icons/house.png')} alt="house" className="w-16"/><p className="font-semibold text-base mr-4">Transform your home with ease – book now for a seamless maintenance experience!</p></div><Link to="/services"><button className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-bg-blue-400 to-blue-500 text-white font-bold rounded-lg hover:from-pink-500 hover:to-yellow-500">Explore Services</button></Link></div>:""
          }
  {data.map((book, index) => (
    <div key={index} className="w-[85%] flex flex-wrap justify-center items-start gap-12 border border-black px-3 py-4  rounded-xl  ">
      <img
        src={require("../../assests/Icons/booking.png")}
        alt="booking"
        className="w-12 "
      />
      <div className="flex flex-col gap-2 w-56 ">
        {book.bookings.map((service, i) => (
          <div key={i} className="flex justify-between items-center border border-gray-300 p-2 rounded-lg">
             
             {`${service.serviceName} - ${service.quantity}${
                      i === book.bookings.length - 1 ? "" : ""
                    }`}
             
          </div>
        ))}
      </div>
      <p className="mt-2 font-semibold w-[80px] ">&#x20B9;{book.amount}</p>
      <p className="mt-2 ">Booked services: {book.bookings.length}</p>
      <p className= {`mt-2 w-60 ${getStatusColor(book.status)}`}>
        &#x25cf;<b>{book.status}</b>
      </p>
      <button onClick={fetchBookings} className="px-4 py-2 bg-red-300 font-semibold rounded-lg transition duration-500 ease-in-out hover:text-red-600 hover:ring-2 hover:ring-red-600 hover:bg-white">Track Booking</button>
    </div>
  ))}
</div>
<div className="flex justify-center ">
<Link to="/services" className=""><button className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-bg-blue-400 to-blue-500 text-white font-bold rounded-lg hover:from-pink-500 hover:to-yellow-500">Explore More Services</button></Link>
</div> </div>
    </>
  );
}

export default MyBookings;
