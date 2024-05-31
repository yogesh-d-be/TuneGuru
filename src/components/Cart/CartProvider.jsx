// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { AllServiceDetails } from '../Services/ServiceDetails';
// import { AuthProvider } from '../StoreContext';
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {

//   const {setIsLoggedIn} = useContext(AuthProvider)
//   const [cartItems, setCartItems] = useState({});
//   const [serviceList, setServiceList] = useState({});
//   const URL = "http://localhost:3420"
// //   const addToCart = (itemId, service) => {
// //     setCartItems((prev) => ({
// //       ...prev,
// //       [itemId]: { ...(prev[itemId] || service), quantity: (prev[itemId]?.quantity || 0) + 1 },
// //     }));
// //   };

// const addToCart = (itemId, qty = 1) => {
    
//       setCartItems((prev) => ({ ...prev, [itemId]:( prev[itemId] || 0) + qty })); //already clicked service
// //       If the item is already in the cart, prevCartItems[itemId] will return its current quantity.
// // If the item is not in the cart, prevCartItems[itemId] will be undefined.The || operator returns the right-hand operand (0 in this case) 
// //if the left-hand operand (prevCartItems[itemId]) is falsy (i.e., undefined, null, 0, false, etc.).
// // This ensures that when the item is not already in the cart (prevCartItems[itemId] is undefined), we start with a quantity of 0.
    
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const updatedItems = { ...prev };
//       if (updatedItems[itemId] > 1) {
//         updatedItems[itemId] -= 1;
//       } else {
//         delete updatedItems[itemId];
//       }
//       return updatedItems;
//       // const newCartItems = { ...prevCartItems };
//       // delete newCartItems[itemId];
//       // return newCartItems;
//     });
//   };

//   const deleteCart = (itemId) =>{
//     setCartItems((prev)=>{
//       const updateItems = {...prev};
//       delete updateItems[itemId]

//       return updateItems
//     })
//   }
  

//   const updateCartItemQuantity = (itemId, qty) => {
//     setCartItems(prevCartItems => ({
//       ...prevCartItems,
//       [itemId]: qty
//     }));
//   };

//   const getTotalItems = () => {
//     return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
//   };

  
//   const getGrandTotalPrice = () => {
//     return Object.entries(cartItems).reduce((total, [itemId, qty]) => {
//       const service = AllServiceDetails.find(service => service.id === itemId);
//       if (service) {
//         return total + service.price * qty;
//       }
//       return total;
//     }, 0);
//   };
  

// const fetchServiceList = async () =>{
//   const response = await axios.get(URL+"/api/homeservice/list")
//   setServiceList(response.data.data)
// }

// useEffect(()=>{
//   async function loadData(){
//     await fetchServiceList();
//     if(localStorage.getItem("userdbtoken")){

//     }
//   }
// },[])

//   return (
//     <CartContext.Provider value={
//         { cartItems, addToCart, removeFromCart, updateCartItemQuantity,
//             AllServiceDetails,getTotalItems, getGrandTotalPrice, deleteCart
//         }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
