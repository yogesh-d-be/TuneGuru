import React, { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../StoreContext";
import { Link, useNavigate } from "react-router-dom";
import "../Bookings/Bookings.css"
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
function MyBookings() {
  const { apiInstance} = useContext(StoreContext);
  const token = localStorage.getItem("userdbtoken");
  const [data, setData] = useState([]);

  const fetchBookings = useCallback(async () => {
    try {
      const response = await apiInstance.post("/api/book/userbookings", {});
      if(response.status === 200){
        const sortedBookings = response.data.data.sort((a,b)=> new Date(b.date)- new Date(a.date));
        setData(sortedBookings);
      console.log(response.data.data);
      }
      
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }, [apiInstance]);


  const cancelBookings = async(bookingId)=>{
    try {
       

      const response = await Swal.fire({
        title: 'Are you sure?',
        text: 'You want to cancel the booking',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        customClass: {
            title: 'swal-title', // Custom class for title
            htmlContainer: 'swal-text', // Custom class for text content
        },
        // iconHtml: `<img src="${logoutPic}" style="width: 64px; height: 64px;" />` // Replace with your custom webp icon and adjust size as needed
    });

    if (response.isConfirmed) {
      await apiInstance.post("/api/book/cancel",{bookingId})
      
        Swal.fire({
            title: 'Booking cancelled',
            text: 'Booking cancelled successfully.',
            icon: 'success',
        })
        fetchBookings();
        
    } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
            title: 'Cancelled',
            text: 'Ready for awesome service experience :)',
            icon: 'info',
            // iconHtml: `<img src="${infoPic}" style="width: 204px; height: 164px;" />`, // Use infoPic for info icon
        });
        
    }
} catch (error) {
    console.error('Error logging out:', error);
    toast.error("Error cancel booking")
     
  }
}

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
    return "text-orange-900";
    case "TuneGuru Mender Assigned":
      return "text-blue-700"
    case "TuneGuru Mender On Way":
      return "text-green-700";
    case "Cancel":
      return "text-red-700"
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
      <p className= {`mt-2 w-60 flex justify-center ${getStatusColor(book.status)}`}>
        &#x25cf;<b>{book.status}</b>
      </p>
      <button onClick={fetchBookings} className="px-4 py-2 bg-green-300 font-semibold rounded-lg transition duration-500 ease-in-out hover:text-green-600 hover:ring-2 hover:ring-green-600 hover:bg-white">Track Booking</button>
      {book.status!=="Cancel" ?
      <button onClick={()=>cancelBookings(book._id)} className="px-4 py-2 bg-red-300 font-semibold rounded-lg transition duration-500 ease-in-out hover:text-red-600 hover:ring-2 hover:ring-red-600 hover:bg-white">Cancel Booking</button>
    :<div className="px-4 py-2 w-[140px] text-center bg-red-700 font-semibold rounded-lg transition duration-500 ease-in-out text-white">Cancelled</div>
    }
    </div>
  ))}
</div>
{data.length!==0&&
<div className="flex justify-center ">
<Link to="/services" className=""><button className="px-4 py-2 bg-gradient-to-r from-cyan-500 via-bg-blue-400 to-blue-500 text-white font-bold rounded-lg hover:from-pink-500 hover:to-yellow-500">Explore More Services</button></Link>
</div> }</div>
    </>
  );
}

export default MyBookings;
