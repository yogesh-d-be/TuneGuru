// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { StoreContext } from "../StoreContext";
// import { API_URL } from "../../service/Helper";
// import axios from "axios";

// import { DatePicker, Space, Button, Dropdown, Menu } from 'antd';
// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import '../Home/Navbar.css'

// import { CloseOutlined } from '@ant-design/icons';

// function Cartservices() {
//   const { cartItems, deleteFromCart, serviceList, addToCart, removeFromCart, userId } = useContext(StoreContext);
//   const token = localStorage.getItem("userdbtoken");
//   const [order, setOrder] = useState(false);
//   const [selectCart, setSelectCart] = useState("cart");
//   const [showMore, setShowMore] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 550);
//     };

   
//     handleResize();

    
//     window.addEventListener('resize', handleResize);

   
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleSelect = (select) => {
//     setSelectCart(selectCart === select ? null : select);
//     if (select === "cart") {
//       setOrder(false);
//     } else if (select === "form") {
//       setOrder(true);
//     } 
//   };

//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     mobileNumber: "",
//     bookingDate: "",
//     bookingTime: ""
//   });
//   const [open, setOpen] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const onChangeHandle = (event) => {
//     const { name, value } = event.target;
//     setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
//   };

//   const handleCheckOut = () => {
//     setOrder(true);
//   };

//   const clearSelectedTime = () => {
//     setSelectedTime(null);
//   };

//   const onChange = (date, timeString, category) => {
//     setSelectedTime({ time: timeString, category });
//     setUserData((prev) => ({ ...prev, bookingTime: timeString }));
//     setOpen(false);
//   };

//   const placeBooking = async (event) => {
//     event.preventDefault();
//     let bookingServices = [];
//     serviceList.forEach((service) => {
//       if (cartItems[service.s_id] > 0) {
//         let serviceInfo = { ...service, quantity: cartItems[service.s_id] };
//         bookingServices.push(serviceInfo);
//       }
//     });

//     let bookingData = {
//       userId: userId,
//       address: userData,
//       bookings: bookingServices,
//       amount: grandTotalPrice,
//       bookingDate: userData.bookingDate,
//       bookingTime: userData.bookingTime,
      
//     };

//     try {
//       let response = await axios.post(`${API_URL}/api/book/place`, bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       if (response.data.success) {
//         const { session_url } = response.data;
//         window.location.replace(session_url);
//       } else {
//         alert("Error");
//       }
//     } catch (error) {
//       console.error("Error placing booking:", error);
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//       }
//     }
//   };

//   dayjs.extend(customParseFormat);

//   const dateFormat = 'DD/MM/YY';

//   const disabledDate = (current) => {
//     const today = dayjs();
//     const oneMonthFromToday = today.add(1, 'month');
//     return current < today.startOf('day') || current > oneMonthFromToday.endOf('day');
//   };

//   const format = 'h:mm a';

//   const allowedTimes = [
//     { time: '10:00 AM', category: 'Morning' }, { time: '10:30 AM', category: 'Morning' },
//     { time: '11:00 AM', category: 'Morning' }, { time: '11:30 AM', category: 'Morning' },
//     { time: '12:00 PM', category: 'Afternoon' }, { time: '12:30 PM', category: 'Afternoon' },
//     { time: '1:00 PM', category: 'Afternoon' }, { time: '1:30 PM', category: 'Afternoon' },
//     { time: '3:00 PM', category: 'Afternoon' }, { time: '3:30 PM', category: 'Afternoon' },
//     { time: '4:00 PM', category: 'Evening' }, { time: '4:30 PM', category: 'Evening' },
//     { time: '5:00 PM', category: 'Evening' }, { time: '5:30 PM', category: 'Evening' },
//     { time: '6:00 PM', category: 'Evening' }, { time: '6:30 PM', category: 'Evening' },
//     { time: '7:00 PM', category: 'Evening' }
//   ];

//   const menu = (
//     <Menu>
//       <Menu.SubMenu title="Morning">
//         {allowedTimes.filter(({ category }) => category === 'Morning').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Morning')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//       <Menu.SubMenu title="Afternoon">
//         {allowedTimes.filter(({ category }) => category === 'Afternoon').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Afternoon')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//       <Menu.SubMenu title="Evening">
//         {allowedTimes.filter(({ category }) => category === 'Evening').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Evening')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//     </Menu>
//   );

//   const Data = [
//     { type: "text", placeholder: "First Name", name: "firstName", value: userData.firstName },
//     { type: "text", placeholder: "Last Name", name: "lastName", value: userData.lastName },
//     { type: "email", placeholder: "Email Address", name: "email", value: userData.email },
//     { type: "text", placeholder: "Street", name: "street", value: userData.street },
//     { type: "text", placeholder: "City", name: "city", value: userData.city },
//     { type: "text", placeholder: "State", name: "state", value: userData.state },
//     { type: "text", placeholder: "Pincode", name: "pincode", value: userData.pincode },
//     { type: "text", placeholder: "Mobile Number", name: "mobileNumber", value: userData.mobileNumber },
//   ];

//   if (!cartItems || Object.keys(cartItems).length === 0) {
//     return (
//       <div className="text-center py-10 mo:w-[80%] mo:ml-[10%]">
//         <div className="flex justify-center items-center">
//           <h2 className="text-2xl font-bold mo:text-lg">Your cart feels so empty!</h2>
//           <img
//             src={require('../../assests/Icons/shopping-cart (2).png')}
//             alt="Empty Cart"
//             className="w-16 mo:w-12"
//           />
//         </div>
//         <p className="text-lg mt-2 mo:text-sm">Why not add some amazing services to it?</p>
//         <Link to="/services">
//           <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
//             Explore Services
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   const cartDetails = Object.keys(cartItems).map((itemId) => {
//     const item = serviceList.find(service => service.s_id === itemId);
//     if (!item) return null;
//     const quantity = cartItems[itemId];
//     const totalPrice = item.price * quantity;
//     return {
//       itemId,
//       item,
//       quantity,
//       totalPrice,
//     };
//   }).filter(item => item !== null);

//   const totalItems = cartDetails.reduce((total, item) => total + item.quantity, 0);
//   const grandTotalPrice = cartDetails.reduce((total, item) => total + item.totalPrice, 0);
//   const GST_price = parseFloat((grandTotalPrice * 0.08).toFixed(2));

//   const roundOffPrice = GST_price + grandTotalPrice;

  


 
//   return (
//     <>
//       <h1 className="font-bold text-3xl mt-12 mb-6 ml-12">Your Cart</h1>
//       <div className="ml-12 pt-2 w-[60%] flex flex-row justify-center space-x-36 px-8 mb-4 drop-shadow-2xl  de:w-[80%] ta:w-[85%] mo:w-[80%] mo:pt-2 mo:mb-3 mo:space-x-24 ">
//         <img onClick={() => handleSelect("cart")} src={require('../../assests/Icons/add-to-cart.png')} alt="cart" className={`w-[40px] cursor-pointer ${selectCart === "cart" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
//         <img onClick={() => handleSelect("form")} src={require('../../assests/Icons/contact-form.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "form" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
//         {/* <img onClick={() => handleSelect("card")} src={require('../../assests/Icons/debit-card.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "card" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} /> */}
//       </div>

//       <div className="w-[90%] ml-[5%] flex flex-row de:flex-wrap ta:flex-wrap mo:flex-wrap mo:w-full mo:ml-[0]">
//         {!order ? (
//           <>
//           <div className="ml-12 mt-2 pt-8 w-[60%] mb-8  bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none">
//           {cartDetails.slice(0, showMore ? cartDetails.length : 4).map(({ item, itemId, quantity, totalPrice }) => (
//             //  {cartDetails.map(({ item, itemId, quantity, totalPrice }) => (
//               <div
//                 key={itemId}
//                 className="flex flex-row items-center w-full bg-gray-300 rounded-xl shadow-xl px-4 py-4 mb-4"
//               >
//                 <div className="flex flex-row items-center w-[50%]">
//                   <img
//                     src={API_URL + "/images/" + item.image || ""}
//                     alt={item.serviceName || "Service Image"}
//                     className="w-16 h-16 rounded-lg"
//                   />
//                   <p className="w-44 ml-6 ta:text-sm mo:text-[13px]">{item.serviceName}</p>
//                 </div>
//                 <div className="flex flex-row justify-around w-[50%] mo:flex mo:justify-center mo:items-center">
//                   <div className="flex flex-row justify-around w-[50%] mo:flex mo:flex-col mo:justify-evenly mo:mb-1">
//                     <div id="add" className="w-[63px] text-sm text-left mo:h-[25px] mo:flex mo:flex-col">
//                       <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
//                         <button onClick={() => removeFromCart(item.s_id)} className="px-2 py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
//                         <div className="border-x-2 border-blue-900 pl-1 py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{quantity}</div>
//                         <button onClick={() => addToCart(item.s_id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
//                       </div>
//                     </div>
//                     <div className="ml-[20%] w-[20%] mo:mr-8 ta:flex ta:items-center mo:flex mo:justify-center">
//                       <p className="font-bold ta:text-sm mo:text-[13px] mo:m-[3px] mo:mt-[12px] mo:mr-[40%]">&#x20B9;{totalPrice}</p>
//                     </div>
//                   </div>
//                   <img
//                     src={require('../../assests/Icons/delete.png')}
//                     alt="Remove"
//                     onClick={() => deleteFromCart(item.s_id)}
//                     className="w-8 cursor-pointer mo:w-6 mo:h-6 mo:flex mo:items-center mo:ml-3"
//                   />
//                 </div>
//               </div>
//             ))}
//             {cartDetails.length > 4 && (
//                 <div className="text-center mb-8">
//                   <button onClick={() => setShowMore(!showMore)} className="bg-blue-900 text-white py-2 px-4 rounded-md mt-4 hover:text-blue-900 hover:bg-white hover:ring-2 hover:ring-blue-900">
//                     {showMore ? "Show Less" : "Show More"}
//                   </button>
//                 </div>
//               )}
            
//           </div>
//           <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
//           <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//             <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
//             <div className="ml-6 flex flex-col w-[85%] de:flex-row">
//               <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
//               <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
//             </div>
//           </div>
//           <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//             <h2 className="ml-6 mb-4 font-bold">Summary</h2>
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>Services: {totalItems}</p>
//               <p>&#x20B9;{grandTotalPrice}</p>
//             </div>
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>Discount</p>
//               <p>-&#x20B9;0</p>
//             </div>
//             {/* <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>GST</p>
//               <p>&#x20B9;0</p>
//             </div> */}
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p className="font-bold">Total Price</p>
//               <p className="font-bold">&#x20B9;{grandTotalPrice}</p>
//             </div>
//             <button onClick={handleCheckOut} className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
//               Checkout
//             </button>
//           </div>
//         </div>
//         </>
          
//         ) : (
//           <>
//   <div className="ml-12 mt-2 pt-8 w-[60%] bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none h-fit">
//     <form id="booking-form" onSubmit={placeBooking} className="mo:w-full mo:bg-gray-300 mo:py-6 mo:rounded-lg">
//       <h1 className="font-semibold text-xl ml-6 mo:text-lg">Enter Your Details</h1>
//       <div className="flex flex-wrap mt-6 pb-6 mo:flex mo:flex-col mo:mt-3">
//         {Data.map((data, i) => (
//           <div key={i} className="w-1/2 px-2 mo:w-full mo:px-6">
//             <input required type={data.type} name={data.name} value={userData[data.name]} onChange={onChangeHandle} className="w-[90%] mt-4 h-[38px] mo:w-full rounded-lg" placeholder={data.placeholder} />
//           </div>
//         ))}
//         <div className="flex">
//           <div className="w-full px-6">
//             <DatePicker
//               onChange={(date, dateString) => setUserData((prevUserData) => ({ ...prevUserData, bookingDate: dateString }))}
//               format={dateFormat}
//               needConfirm
//               disabledDate={disabledDate}
//               size='large'
            
//             />
//           </div>
//           <div className="pl-6 mo:px-2">
//             <Space wrap>
//               <div className='flex items-center'>
//                 <Dropdown 
//                   overlay={menu} 
//                   trigger={['click']} 
//                   visible={open} 
//                   onVisibleChange={setOpen}  
//                   onChange={(time, timerange) => setSelectedTime(time)} // Update selected time
//                 >
//                   <Button className='w-[150px] text-left mo:pr-4 mo:w-fit size-10'>
//                   {selectedTime ?  (isMobile ? `${selectedTime.time}` : `${selectedTime.time} - ${selectedTime.category}`) : 'Select Time'}
//                   </Button>
//                 </Dropdown>
//                 {selectedTime && (
//                   <Button size="small" icon={<CloseOutlined />} onClick={clearSelectedTime} />
//                 )}
//               </div>
//             </Space>
//           </div>
//         </div>
//       </div>
//     </form>
//   </div>

//   <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
//     <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//       <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
//       <div className="ml-6 flex flex-col w-[85%] de:flex-row">
//         <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
//         <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
//       </div>
//     </div>
//     <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//       <h2 className="ml-6 mb-4 font-bold">Summary</h2>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>Services: {totalItems}</p>
//         <p>&#x20B9;{grandTotalPrice}</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>Discount</p>
//         <p>-&#x20B9;0</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>GST</p>
//         <p>&#x20B9;{GST_price}</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p className="font-bold">Total Price</p>
//         <p className="font-bold">&#x20B9;{roundOffPrice}</p>
//       </div>
//       <button type="submit" form="booking-form" className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
//   Proceed To Payment
// </button>
//     </div>
//   </div>
// </>

//   )
// }
// </div>
// </>
//   )}

// export default Cartservices;



// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { StoreContext } from "../StoreContext";
// import { API_URL } from "../../service/Helper";
// import axios from "axios";

// import { DatePicker, Space, Button, Dropdown, Menu } from 'antd';
// import dayjs from 'dayjs';
// import customParseFormat from 'dayjs/plugin/customParseFormat';
// import '../Home/Navbar.css'

// import { CloseOutlined } from '@ant-design/icons';

// function Cartservices() {
//   const { cartItems, deleteFromCart, serviceList, addToCart, removeFromCart, userId } = useContext(StoreContext);
//   const token = localStorage.getItem("userdbtoken");
//   const [order, setOrder] = useState(false);
//   const [selectCart, setSelectCart] = useState("cart");
//   const [showMore, setShowMore] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleSelect = (select) => {
//     setSelectCart(selectCart === select ? null : select);
//     if (select === "cart") {
//       setOrder(false);
//     } else if (select === "form") {
//       setOrder(true);
//     } 
//   };

//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     mobileNumber: "",
    
//   });
  
//   const [open, setOpen] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const onChangeHandle = (event) => {
//     const { name, value } = event.target;
//     setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
//   };

//   const handleCheckOut = () => {
//     setOrder(true);
//   };

//   const clearSelectedTime = () => {
//     setSelectedTime(null);
//   };

//   const onChange = (date, timeString, category) => {
//     setSelectedTime({ time: timeString, category });
//     setUserData((prev) => ({ ...prev, bookingTime: timeString }));
//     setOpen(false);
//   };

//   const placeBooking = async (event) => {
//     event.preventDefault();
//     let bookingServices = [];
//     serviceList.forEach((service) => {
//       if (cartItems[service.s_id] > 0) {
//         let serviceInfo = { ...service, quantity: cartItems[service.s_id] };
//         bookingServices.push(serviceInfo);
//       }
//     });

//     let bookingData = {
//       userId: userId,
//       address: userData,
//       bookings: bookingServices,
//       amount: grandTotalPrice,
//       bookingDate: userData.bookingDate,
//       bookingTime: userData.bookingTime
//     };

//     try {
//       let response = await axios.post(`${API_URL}/api/book/place`, bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       if (response.data.success) {
//         const { session_url } = response.data;
//         window.location.replace(session_url);
//       } else {
//         alert("Error");
//       }
//     } catch (error) {
//       console.error("Error placing booking:", error);
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//       }
//     }
//   };

//   dayjs.extend(customParseFormat);

//   const dateFormat = 'DD/MM/YY';

//   const disabledDate = (current) => {
//     const today = dayjs();
//     const oneMonthFromToday = today.add(1, 'month');
//     return current < today.startOf('day') || current > oneMonthFromToday.endOf('day');
//   };

//   const format = 'h:mm a';

//   const allowedTimes = [
//     { time: '10:00 AM', category: 'Morning' }, { time: '10:30 AM', category: 'Morning' },
//     { time: '11:00 AM', category: 'Morning' }, { time: '11:30 AM', category: 'Morning' },
//     { time: '12:00 PM', category: 'Afternoon' }, { time: '12:30 PM', category: 'Afternoon' },
//     { time: '1:00 PM', category: 'Afternoon' }, { time: '1:30 PM', category: 'Afternoon' },
//     { time: '3:00 PM', category: 'Afternoon' }, { time: '3:30 PM', category: 'Afternoon' },
//     { time: '4:00 PM', category: 'Evening' }, { time: '4:30 PM', category: 'Evening' },
//     { time: '5:00 PM', category: 'Evening' }, { time: '5:30 PM', category: 'Evening' },
//     { time: '6:00 PM', category: 'Evening' }, { time: '6:30 PM', category: 'Evening' },
//     { time: '7:00 PM', category: 'Evening' }
//   ];

//   const menu = (
//     <Menu>
//       <Menu.SubMenu title="Morning">
//         {allowedTimes.filter(({ category }) => category === 'Morning').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Morning')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//       <Menu.SubMenu title="Afternoon">
//         {allowedTimes.filter(({ category }) => category === 'Afternoon').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Afternoon')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//       <Menu.SubMenu title="Evening">
//         {allowedTimes.filter(({ category }) => category === 'Evening').map(({ time }) => (
//           <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Evening')}>
//             {time}
//           </Menu.Item>
//         ))}
//       </Menu.SubMenu>
//     </Menu>
//   );

//   const Data = [
//     { type: "text", placeholder: "First Name", name: "firstName", value: userData.firstName },
//     { type: "text", placeholder: "Last Name", name: "lastName", value: userData.lastName },
//     { type: "email", placeholder: "Email Address", name: "email", value: userData.email },
//     { type: "text", placeholder: "Street", name: "street", value: userData.street },
//     { type: "text", placeholder: "City", name: "city", value: userData.city },
//     { type: "text", placeholder: "State", name: "state", value: userData.state },
//     { type: "text", placeholder: "Pincode", name: "pincode", value: userData.pincode },
//     { type: "text", placeholder: "Mobile Number", name: "mobileNumber", value: userData.mobileNumber },
//   ];

//   if (!cartItems || Object.keys(cartItems).length === 0) {
//     return (
//       <div className="text-center py-10 mo:w-[80%] mo:ml-[10%]">
//         <div className="flex justify-center items-center">
//           <h2 className="text-2xl font-bold mo:text-lg">Your cart feels so empty!</h2>
//           <img
//             src={require('../../assests/Icons/shopping-cart (2).png')}
//             alt="Empty Cart"
//             className="w-16 mo:w-12"
//           />
//         </div>
//         <p className="text-lg mt-2 mo:text-sm">Why not add some amazing services to it?</p>
//         <Link to="/services">
//           <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
//             Explore Services
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   const cartDetails = Object.keys(cartItems).map((itemId) => {
//     const item = serviceList.find(service => service.s_id === itemId);
//     if (!item) return null;
//     const quantity = cartItems[itemId];
//     const totalPrice = item.price * quantity;
//     return {
//       itemId,
//       item,
//       quantity,
//       totalPrice,
//     };
//   }).filter(item => item !== null);

//   const totalItems = cartDetails.reduce((total, item) => total + item.quantity, 0);
//   const grandTotalPrice = cartDetails.reduce((total, item) => total + item.totalPrice, 0);
//   const GST_price = parseFloat((grandTotalPrice * 0.08).toFixed(2));

//   const roundOffPrice = GST_price + grandTotalPrice;

  


 
//   return (
//     <>
//       <h1 className="font-bold text-3xl mt-12 mb-6 ml-12">Your Cart</h1>
//       <div className="ml-12 pt-2 w-[60%] flex flex-row justify-center space-x-36 px-8 mb-4 drop-shadow-2xl  de:w-[80%] ta:w-[85%] mo:w-[80%] mo:pt-2 mo:mb-3 mo:space-x-24 ">
//         <img onClick={() => handleSelect("cart")} src={require('../../assests/Icons/add-to-cart.png')} alt="cart" className={`w-[40px] cursor-pointer ${selectCart === "cart" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
//         <img onClick={() => handleSelect("form")} src={require('../../assests/Icons/contact-form.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "form" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
//         {/* <img onClick={() => handleSelect("card")} src={require('../../assests/Icons/debit-card.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "card" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} /> */}
//       </div>

//       <div className="w-[90%] ml-[5%] flex flex-row de:flex-wrap ta:flex-wrap mo:flex-wrap mo:w-full mo:ml-[0]">
//         {!order ? (
//           <>
//           <div className="ml-12 mt-2 pt-8 w-[60%] mb-8  bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none">
//           {cartDetails.slice(0, showMore ? cartDetails.length : 4).map(({ item, itemId, quantity, totalPrice }) => (
//             //  {cartDetails.map(({ item, itemId, quantity, totalPrice }) => (
//               <div
//                 key={itemId}
//                 className="flex flex-row items-center w-full bg-gray-300 rounded-xl shadow-xl px-4 py-4 mb-4"
//               >
//                 <div className="flex flex-row items-center w-[50%]">
//                   <img
//                     src={API_URL + "/images/" + item.image || ""}
//                     alt={item.serviceName || "Service Image"}
//                     className="w-16 h-16 rounded-lg"
//                   />
//                   <p className="w-44 ml-6 ta:text-sm mo:text-[13px]">{item.serviceName}</p>
//                 </div>
//                 <div className="flex flex-row justify-around w-[50%] mo:flex mo:justify-center mo:items-center">
//                   <div className="flex flex-row justify-around w-[50%] mo:flex mo:flex-col mo:justify-evenly mo:mb-1">
//                     <div id="add" className="w-[63px] text-sm text-left mo:h-[25px] mo:flex mo:flex-col">
//                       <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
//                         <button onClick={() => removeFromCart(item.s_id)} className="px-2 py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
//                         <div className="border-x-2 border-blue-900 pl-1 py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{quantity}</div>
//                         <button onClick={() => addToCart(item.s_id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
//                       </div>
//                     </div>
//                     <div className="ml-[20%] w-[20%] mo:mr-8 ta:flex ta:items-center mo:flex mo:justify-center">
//                       <p className="font-bold ta:text-sm mo:text-[13px] mo:m-[3px] mo:mt-[12px] mo:mr-[40%]">&#x20B9;{totalPrice}</p>
//                     </div>
//                   </div>
//                   <img
//                     src={require('../../assests/Icons/delete.png')}
//                     alt="Remove"
//                     onClick={() => deleteFromCart(item.s_id)}
//                     className="w-8 cursor-pointer mo:w-6 mo:h-6 mo:flex mo:items-center mo:ml-3"
//                   />
//                 </div>
//               </div>
//             ))}
//             {cartDetails.length > 4 && (
//                 <div className="text-center mb-8">
//                   <button onClick={() => setShowMore(!showMore)} className="bg-blue-900 text-white py-2 px-4 rounded-md mt-4 hover:text-blue-900 hover:bg-white hover:ring-2 hover:ring-blue-900">
//                     {showMore ? "Show Less" : "Show More"}
//                   </button>
//                 </div>
//               )}
            
//           </div>
//           <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
//           <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//             <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
//             <div className="ml-6 flex flex-col w-[85%] de:flex-row">
//               <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
//               <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
//             </div>
//           </div>
//           <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//             <h2 className="ml-6 mb-4 font-bold">Summary</h2>
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>Services: {totalItems}</p>
//               <p>&#x20B9;{grandTotalPrice}</p>
//             </div>
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>Discount</p>
//               <p>-&#x20B9;0</p>
//             </div>
//             {/* <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p>GST</p>
//               <p>&#x20B9;0</p>
//             </div> */}
//             <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//               <p className="font-bold">Total Price</p>
//               <p className="font-bold">&#x20B9;{grandTotalPrice}</p>
//             </div>
//             <button onClick={handleCheckOut} className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
//               Checkout
//             </button>
//           </div>
//         </div>
//         </>
          
//         ) : (
//           <>
//   <div className="ml-12 mt-2 pt-8 w-[60%] bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none h-fit">
//     <form id="booking-form" onSubmit={placeBooking} className="mo:w-full mo:bg-gray-300 mo:py-6 mo:rounded-lg">
//       <h1 className="font-semibold text-xl ml-6 mo:text-lg">Enter Your Details</h1>
//       <div className="flex flex-wrap mt-6 pb-6 mo:flex mo:flex-col mo:mt-3">
//         {Data.map((data, i) => (
//           <div key={i} className="w-1/2 px-2 mo:w-full mo:px-6">
//             <input required type={data.type} name={data.name} value={userData[data.name]} onChange={onChangeHandle} className="w-[90%] mt-4 h-[38px] mo:w-full rounded-lg" placeholder={data.placeholder} />
//           </div>
//         ))}
//         <div className="flex">
//           <div className="w-full px-6">
//             <DatePicker
//              onChange={(date, dateString) => setUserData((prevUserData) => ({ ...prevUserData, bookingDate: dateString }))}
            
//               needConfirm
//               disabledDate={disabledDate}
              
//               format={dateFormat}
//               size='large'
//               placeholder="Select Booking Date"
//             />
//           </div>
//           <div className="pl-6 mo:px-2">
//             <Space wrap>
//               <div className='flex items-center'>
//                 <Dropdown 
//                   overlay={menu} 
//                   trigger={['click']} 
//                   visible={open} 
//                   onVisibleChange={setOpen}  
//                   onChange={(time, timerange) => setSelectedTime(time)} // Update selected time
//                 >
//                   <Button className='w-[150px] text-left mo:pr-4 mo:w-fit size-10'>
//                     {selectedTime ? (isMobile ? `${selectedTime}` : `${selectedTime.time} - ${selectedTime.category}`) : 'Select Time'}
//                   </Button>
//                 </Dropdown>
//                 {selectedTime && (
//                   <Button size="small" icon={<CloseOutlined />} onClick={clearSelectedTime} />
//                 )}
//               </div>
//             </Space>
//           </div>
//         </div>
//       </div>
//     </form>
//   </div>

//   <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
//     <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//       <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
//       <div className="ml-6 flex flex-col w-[85%] de:flex-row">
//         <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
//         <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
//       </div>
//     </div>
//     <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
//       <h2 className="ml-6 mb-4 font-bold">Summary</h2>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>Services: {totalItems}</p>
//         <p>&#x20B9;{grandTotalPrice}</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>Discount</p>
//         <p>-&#x20B9;0</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p>GST</p>
//         <p>&#x20B9;{GST_price}</p>
//       </div>
//       <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
//         <p className="font-bold">Total Price</p>
//         <p className="font-bold">&#x20B9;{roundOffPrice}</p>
//       </div>
//       <button type="submit" form="booking-form" className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
//   Proceed To Payment
// </button>
//     </div>
//   </div>
// </>

//   )
// }
// </div>
// </>
//   )}

// export default Cartservices;


import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import { API_URL } from "../../service/Helper";
import axios from "axios";

import { DatePicker, Space, Button, Dropdown, Menu } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import '../Home/Navbar.css'

import { CloseOutlined } from '@ant-design/icons';

function Cartservices() {
  const { cartItems, deleteFromCart, serviceList, addToCart, removeFromCart, userId } = useContext(StoreContext);
  const token = localStorage.getItem("userdbtoken");
  const [order, setOrder] = useState(false);
  const [selectCart, setSelectCart] = useState("cart");
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

   
    handleResize();

    
    window.addEventListener('resize', handleResize);

   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (select) => {
    setSelectCart(selectCart === select ? null : select);
    if (select === "cart") {
      setOrder(false);
    } else if (select === "form") {
      setOrder(true);
    } 
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    mobileNumber: "",
    bookingDate: "",
    bookingTime: ""
  });
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleCheckOut = () => {
    setOrder(true);
  };

  const clearSelectedTime = () => {
    setSelectedTime(null);
  };

  const onChange = (date, timeString, category) => {
    setSelectedTime({ time: timeString, category });
    setUserData((prev) => ({ ...prev, bookingTime: timeString }));
    setOpen(false);
  };

  const placeBooking = async (event) => {
    event.preventDefault();
    setLoading(true);
    let bookingServices = [];
    serviceList.forEach((service) => {
      if (cartItems[service.s_id] > 0) {
        let serviceInfo = { ...service, quantity: cartItems[service.s_id] };
        bookingServices.push(serviceInfo);
      }
    });

    let bookingData = {
      userId: userId,
      address: userData,
      bookings: bookingServices,
      amount: roundOffPrice,
      bookingDate: userData.bookingDate,
      bookingTime: userData.bookingTime,
      
    };

   

    try {
      let response = await axios.post(`${API_URL}/api/book/place`, bookingData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTimeout(()=>{
        setLoading(false);
        if (response.data.success) {
          const { session_url } = response.data;
          window.location.replace(session_url);
        } else {
          alert("Error");
        }
      },4000)
      
    } catch (error) {
      setLoading(false); 
      console.error("Error placing booking:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  dayjs.extend(customParseFormat);

  const dateFormat = 'DD/MM/YY';

  const disabledDate = (current) => {
    const today = dayjs();
    const NoOfDaysFromToday = today.add(20, 'days');
    return current < today.startOf('day') || current > NoOfDaysFromToday.endOf('day');
  };

  const format = 'h:mm a';

  const allowedTimes = [
    { time: '10:00 AM', category: 'Morning' }, { time: '10:30 AM', category: 'Morning' },
    { time: '11:00 AM', category: 'Morning' }, { time: '11:30 AM', category: 'Morning' },
    { time: '12:00 PM', category: 'Afternoon' }, { time: '12:30 PM', category: 'Afternoon' },
    { time: '1:00 PM', category: 'Afternoon' }, { time: '1:30 PM', category: 'Afternoon' },
    { time: '3:00 PM', category: 'Afternoon' }, { time: '3:30 PM', category: 'Afternoon' },
    { time: '4:00 PM', category: 'Evening' }, { time: '4:30 PM', category: 'Evening' },
    { time: '5:00 PM', category: 'Evening' }, { time: '5:30 PM', category: 'Evening' },
    { time: '6:00 PM', category: 'Evening' }, { time: '6:30 PM', category: 'Evening' },
    { time: '7:00 PM', category: 'Evening' }
  ];

  const menu = (
    <Menu>
      <Menu.SubMenu title="Morning">
        {allowedTimes.filter(({ category }) => category === 'Morning').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Morning')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu title="Afternoon">
        {allowedTimes.filter(({ category }) => category === 'Afternoon').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Afternoon')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu title="Evening">
        {allowedTimes.filter(({ category }) => category === 'Evening').map(({ time }) => (
          <Menu.Item key={time} onClick={() => onChange(dayjs(time, format), time, 'Evening')}>
            {time}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );

  const Data = [
    { type: "text", placeholder: "First Name", name: "firstName", value: userData.firstName },
    { type: "text", placeholder: "Last Name", name: "lastName", value: userData.lastName },
    { type: "email", placeholder: "Email Address", name: "email", value: userData.email },
    { type: "text", placeholder: "Street", name: "street", value: userData.street },
    { type: "text", placeholder: "City", name: "city", value: userData.city },
    { type: "text", placeholder: "State", name: "state", value: userData.state },
    { type: "text", placeholder: "Pincode", name: "pincode", value: userData.pincode },
    { type: "text", placeholder: "Mobile Number", name: "mobileNumber", value: userData.mobileNumber },
  ];

  if (!cartItems || Object.keys(cartItems).length === 0) {
    return (
      <div className="text-center py-10 mo:w-[80%] mo:ml-[10%]">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold mo:text-lg">Your cart feels so empty!</h2>
          <img
            src={require('../../assests/Icons/shopping-cart (2).png')}
            alt="Empty Cart"
            className="w-16 mo:w-12"
          />
        </div>
        <p className="text-lg mt-2 mo:text-sm">Why not add some amazing services to it?</p>
        <Link to="/services">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Explore Services
          </button>
        </Link>
      </div>
    );
  }

  const cartDetails = Object.keys(cartItems).map((itemId) => {
    const item = serviceList.find(service => service.s_id === itemId);
    if (!item) return null;
    const quantity = cartItems[itemId];
    const totalPrice = item.price * quantity;
    return {
      itemId,
      item,
      quantity,
      totalPrice,
    };
  }).filter(item => item !== null);

  const totalItems = cartDetails.reduce((total, item) => total + item.quantity, 0);
  const grandTotalPrice = cartDetails.reduce((total, item) => total + item.totalPrice, 0);
  const GST_price = parseFloat((grandTotalPrice * 0.08).toFixed(2));

  const roundOffPrice = GST_price + grandTotalPrice;

  


 
  return (
    <>
      <h1 className="font-bold text-3xl mt-12 mb-6 ml-12">Your Cart</h1>
      {loading && (
        <div className="fixed top-0 left-0 h-full w-full backdrop-brightness-50 flex justify-center items-center z-[200]">
          <img src={require('../../assests/gif/card gif.gif')} alt="Loading..." className="h-[200px] w-[200px]" />
        </div>
      )}
      <div className="ml-12 pt-2 w-[60%] flex flex-row justify-center space-x-36 px-8 mb-4 drop-shadow-2xl  de:w-[80%] ta:w-[85%] mo:w-[80%] mo:pt-2 mo:mb-3 mo:space-x-24 ">
        <img onClick={() => handleSelect("cart")} src={require('../../assests/Icons/add-to-cart.png')} alt="cart" className={`w-[40px] cursor-pointer ${selectCart === "cart" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
        <img onClick={() => handleSelect("form")} src={require('../../assests/Icons/contact-form.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "form" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
        {/* <img onClick={() => handleSelect("card")} src={require('../../assests/Icons/debit-card.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "card" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} /> */}
      </div>

      <div className="w-[90%] ml-[5%] flex flex-row de:flex-wrap ta:flex-wrap mo:flex-wrap mo:w-full mo:ml-[0]">
        {!order ? (
          <>
          <div className="ml-12 mt-2 pt-8 w-[60%] mb-8  bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none">
          {cartDetails.slice(0, showMore ? cartDetails.length : 4).map(({ item, itemId, quantity, totalPrice }) => (
            //  {cartDetails.map(({ item, itemId, quantity, totalPrice }) => (
              <div
                key={itemId}
                className="flex flex-row items-center w-full bg-gray-300 rounded-xl shadow-xl px-4 py-4 mb-4"
              >
                <div className="flex flex-row items-center w-[50%]">
                  <img
                    src={API_URL + "/images/" + item.image || ""}
                    alt={item.serviceName || "Service Image"}
                    className="w-16 h-16 rounded-lg"
                  />
                  <p className="w-44 ml-6 ta:text-sm mo:text-[13px]">{item.serviceName}</p>
                </div>
                <div className="flex flex-row justify-around w-[50%] mo:flex mo:justify-center mo:items-center">
                  <div className="flex flex-row justify-around w-[50%] mo:flex mo:flex-col mo:justify-evenly mo:mb-1">
                    <div id="add" className="w-[63px] text-sm text-left mo:h-[25px] mo:flex mo:flex-col">
                      <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
                        <button onClick={() => removeFromCart(item.s_id)} className="px-2 py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
                        <div className="border-x-2 border-blue-900 pl-1 py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{quantity}</div>
                        <button onClick={() => addToCart(item.s_id)} className="py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
                      </div>
                    </div>
                    <div className="ml-[20%] w-[20%] mo:mr-8 ta:flex ta:items-center mo:flex mo:justify-center">
                      <p className="font-bold ta:text-sm mo:text-[13px] mo:m-[3px] mo:mt-[12px] mo:mr-[40%]">&#x20B9;{totalPrice}</p>
                    </div>
                  </div>
                  <img
                    src={require('../../assests/Icons/delete.png')}
                    alt="Remove"
                    onClick={() => deleteFromCart(item.s_id)}
                    className="w-8 cursor-pointer mo:w-6 mo:h-6 mo:flex mo:items-center mo:ml-3"
                  />
                </div>
              </div>
            ))}
            {cartDetails.length > 4 && (
                <div className="text-center mb-8">
                  <button onClick={() => setShowMore(!showMore)} className="bg-blue-900 text-white py-2 px-4 rounded-md mt-4 hover:text-blue-900 hover:bg-white hover:ring-2 hover:ring-blue-900">
                    {showMore ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            
          </div>
          <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
          <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
            <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
            <div className="ml-6 flex flex-col w-[85%] de:flex-row">
              <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
              <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
            </div>
          </div>
          <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
            <h2 className="ml-6 mb-4 font-bold">Summary</h2>
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p>Services: {totalItems}</p>
              <p>&#x20B9;{grandTotalPrice}</p>
            </div>
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p>Discount</p>
              <p>-&#x20B9;0</p>
            </div>
            {/* <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p>GST</p>
              <p>&#x20B9;0</p>
            </div> */}
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p className="font-bold">Total Price</p>
              <p className="font-bold">&#x20B9;{grandTotalPrice}</p>
            </div>
            <button onClick={handleCheckOut} className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
              Checkout
            </button>
          </div>
        </div>
        </>
          
        ) : (
          <>
  <div className="ml-12 mt-2 pt-8 w-[60%] bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none h-fit">
    <form id="booking-form" onSubmit={placeBooking} className="mo:w-full mo:bg-gray-300 mo:py-6 mo:rounded-lg">
      <h1 className="font-semibold text-xl ml-6 mo:text-lg">Enter Your Details</h1>
      <div className="flex flex-wrap mt-6 pb-6 mo:flex mo:flex-col mo:mt-3">
        {Data.map((data, i) => (
          <div key={i} className="w-1/2 px-2 mo:w-full mo:px-6">
            <input required type={data.type} name={data.name} value={userData[data.name]} onChange={onChangeHandle} className="w-[90%] mt-4 h-[38px] mo:w-full rounded-lg" placeholder={data.placeholder} />
          </div>
        ))}

        <div className="mt-6 mb-4" >
          <h1 className="font-semibold text-xl ml-6 mo:text-lg mb-6">Booking Details</h1>
      
        <div className="flex">
          <div className="w-full px-2">
            <DatePicker
              onChange={(date, dateString) => setUserData((prevUserData) => ({ ...prevUserData, bookingDate: dateString }))}
              format={dateFormat}
              needConfirm
              disabledDate={disabledDate}
              size='large'
            
            />
          </div>
          <div className=" mo:px-2">
            <Space wrap>
              <div className='flex items-center'>
                <Dropdown 
                  overlay={menu} 
                  trigger={['click']} 
                  visible={open} 
                  onVisibleChange={setOpen}  
                  onChange={(time, timerange) => setSelectedTime(time)} // Update selected time
                 
                >
                  <Button className='w-[150px] text-left mo:pr-4 mo:w-fit size-10'>
                  {selectedTime ?  (isMobile ? `${selectedTime.time}` : `${selectedTime.time} - ${selectedTime.category}`) : 'Select Time' }
                  </Button>
                </Dropdown>
                {selectedTime && (
                  <Button size="small" icon={<CloseOutlined />} onClick={clearSelectedTime} />
                )}
              </div>
            </Space>
          </div>
        </div>
        </div>
      </div>
    </form>
  </div>

  <div className="w-[40%] flex flex-col de:w-[100%] ta:w-full mo:w-[90%] mo:m-[5%]">
    <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
      <p className="ml-6 mb-4 font-semibold">If you have a promo code, Enter it here</p>
      <div className="ml-6 flex flex-col w-[85%] de:flex-row">
        <input type="text" placeholder="Promo code" className="pl-2 mb-4 mt-4 border-none outline-none rounded-md de:w-[75%] de:h-[44px] de:rounded-l-lg de:rounded-none" />
        <button className="w-[30%] mb-4 bg-blue-900 py-2 px-1 text-white rounded-md text-sm des_xl:w-[50%] des_search:w-[50%] de:rounded-none de:rounded-r-lg de:mt-4 de:h-[44px]">Apply</button>
      </div>
    </div>
    <div className="bg-gray-300 ml-20 px-1 pt-6 items-center drop-shadow-2xl rounded-lg h-fit mt-4 mb-4 de:w-[80%] de:ml-12 de:mt-8 ta:w-[90%] ta:ml-8 ta:mt-8 mo:w-[90%] mo:ml-[5%] mo:mt-8">
      <h2 className="ml-6 mb-4 font-bold">Summary</h2>
      <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
        <p>Services: {totalItems}</p>
        <p>&#x20B9;{grandTotalPrice}</p>
      </div>
      <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
        <p>Discount</p>
        <p>-&#x20B9;0</p>
      </div>
      <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
        <p>GST</p>
        <p>&#x20B9;{GST_price}</p>
      </div>
      <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
        <p className="font-bold">Total Price</p>
        <p className="font-bold">&#x20B9;{roundOffPrice}</p>
      </div>
      <button type="submit" form="booking-form" className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
  Proceed To Payment
</button>
    </div>
  </div>
</>

  )
}


</div>
</>
  )}

export default Cartservices;