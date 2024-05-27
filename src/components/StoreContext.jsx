import React, { createContext, useContext, useEffect, useState } from 'react';
// import { AllServiceDetails } from './Services/ServiceDetails';
import { Await, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {API_URL}  from '../service/Helper';

export const StoreContext = createContext();


export const StoreProvider = ({children}) =>{

    
  const [cartItems, setCartItems] = useState({});
  // const [serviceList, setServiceList] = useState({});
 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[token, setToken] = useState("")
    const [serviceList, setServiceList] = useState([]);
    const navigate = useNavigate()
   
    const [loginModalOpen, setLoginModalOpen] = useState(false);
  

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };


    // useEffect(()=>{
    //     const token = localStorage.getItem("userdbtoken");
    //     if(token){
    //         setIsLoggedIn(true);
        
    //     }
    //     else{
    //         setIsLoggedIn(false);
    //     }

    //     const handleStorageChange =(event) => {
    //         if(event.key === "userdbtoken"){
    //             if(token){
    //                 setIsLoggedIn(true)
    //             }
    //             else{
    //                 setIsLoggedIn(false)
    //             }
    //         }
    //     };

    //     window.addEventListener("storage", handleStorageChange);

    //     return () =>{
    //         window.removeEventListener("storage", handleStorageChange);
    //     };
    // },[]);

    const logout = () => {
        localStorage.removeItem("userdbtoken");
        setIsLoggedIn(false);
    }

    const handleLogout = async () => {
        try {
          logout();
          // setIsLoggedIn(false);
          toast.success("Logout Successfully");
          navigate('/'); // Navigate to the home page after logout
        } catch (error) {
          console.error("Error:", error);
          toast.error("Error logging out");
        }
      };



      const addToCart = async(itemId) => {
        
       
          const service = serviceList.find(service => service.s_id === itemId);

          if(!service) return;
        // setCartItems((prev) => ({ ...prev, [itemId]:( prev[itemId] || 0) + qty })); //already clicked service
  //       If the item is already in the cart, prevCartItems[itemId] will return its current quantity.
  // If the item is not in the cart, prevCartItems[itemId] will be undefined.The || operator returns the right-hand operand (0 in this case) 
  //if the left-hand operand (prevCartItems[itemId]) is falsy (i.e., undefined, null, 0, false, etc.).
  // This ensures that when the item is not already in the cart (prevCartItems[itemId] is undefined), we start with a quantity of 0.
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        const token = localStorage.getItem("userdbtoken");
        if(token){
          await axios.post(API_URL+"/api/cart/add",{s_id:itemId},{
            headers: {
              Authorization: `Bearer ${token}`
          }
          })
          console.log("added")
        }
      }

    const removeFromCart = async (itemId) => {

      const service = serviceList.find(service => service.s_id === itemId);

        setCartItems((prev) => {
          const updatedItems = { ...prev };
          if (updatedItems[itemId] > 1) {
            updatedItems[itemId] -= 1;
          } else {
            delete updatedItems[itemId];
          }
          return updatedItems;
          // const newCartItems = { ...prevCartItems };
          // delete newCartItems[itemId];
          // return newCartItems;
        });
        const token = localStorage.getItem("userdbtoken");
        if(token){
          await axios.post(API_URL+"/api/cart/remove",{s_id:itemId},{
            headers: {
              Authorization: `Bearer ${token}`
          }
          })
          console.log("removed")
        }
         
      };


      const loadCartData = async(token)=>{   
        // const token = localStorage.getItem("userdbtoken");        //Dont have to send any data, so put empty object
        const response = await axios.post(API_URL+"/api/cart/get",{},{  
          headers: {
              Authorization :`Bearer ${token}`
          }
        })
          setCartItems(response.data.cartData)
      }
    
      const deleteCart = (itemId) =>{
        const service = serviceList.find(service => service.s_id === itemId);
        setCartItems((prev)=>{
          const updateItems = {...prev};
          delete updateItems[itemId]
    
          return updateItems
        })
      }
      
    
      const updateCartItemQuantity = (itemId, qty) => {
        const service = serviceList.find(service => service.s_id === itemId);
        setCartItems(prevCartItems => ({
          ...prevCartItems,
          [itemId]: qty
        }));
      };
    
      const getTotalItems = () => {
        return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
      };
    
      
      const getGrandTotalPrice = () => {
        return Object.entries(cartItems).reduce((total, [itemId, qty]) => {
          const service = serviceList.find(service => service.s_id === itemId);
          if (service) {
            return total + service.price * qty;
          }
          return total;
        }, 0);
      };
      
    
    // const fetchServiceList = async () =>{
    //   const response = await axios.get(API_URL+"/api/homeservice/list")
    //   setServiceList(response.data.data)
    // }
    const fetchServiceList = async () => {
      const response = await axios.get(API_URL + "/api/homeservice/list");
  
      if (response.data.success) {
        setServiceList(response.data.data);
      } else {
        toast.error("Error");
      }
    };

    

    useEffect(() => {
      async function loadData() {
        await fetchServiceList();
  
        const token = localStorage.getItem("userdbtoken");
        if (token) {
          setIsLoggedIn(true);
          await loadCartData (localStorage.getItem("userdbtoken"))
        } else {
          setIsLoggedIn(false);
        }
  
        const handleStorageChange = (event) => {
          if (event.key === "userdbtoken") {
            if (event.newValue) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
              toast.info("Login expired, please log in again.");
            }
          }
        };
  
        window.addEventListener("storage", handleStorageChange);
  
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };

        
      }
  
      loadData();
    }, []);

    return(
        <StoreContext.Provider value={{
            isLoggedIn, setIsLoggedIn, logout, handleLogout,openLoginModal, closeLoginModal, loginModalOpen,
            cartItems, addToCart, removeFromCart, updateCartItemQuantity,
            getTotalItems, getGrandTotalPrice, deleteCart, serviceList, setServiceList, fetchServiceList
        }}>
            {children}
        </StoreContext.Provider>
    )
}