import React, { createContext,  useEffect, useState } from 'react';
// import { AllServiceDetails } from './Services/ServiceDetails';
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import {API_URL}  from '../service/Helper';

export const StoreContext = createContext();


export const StoreProvider = ({children}) =>{


  const apiInstance = axios.create({
    baseURL: API_URL
  });

  apiInstance.interceptors.request.use(
    (config)=>{
      const authToken = localStorage.getItem("userdbtoken");
      config.headers.Authorization  = `Bearer ${authToken}`
      return config;
    },
    (error)=>{
      console.error("Request Error",error);
      return Promise.reject(error)
    }
  );

  //Response

  apiInstance.interceptors.response.use(
    (response)=>{
      return response;
    },
    (error)=>{
      
      if(error.response && error.response.data.Message === "Token expired"){
        localStorage.clear();
        window.location.href = '/'
        toast.info("Your session expired, please log in again.");
      }
      return Promise.reject(error)
    }
  )
  
  const [cartItems, setCartItems] = useState({});
  // const [serviceList, setServiceList] = useState({});
 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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
          setIsLoggedIn(false);
          toast.success("Logout Successfully");
          navigate('/'); // Navigate to the home page after logout
        } catch (error) {
          console.error("Error:", error);
          toast.error("Error logging out");
        }
      };

      	

      const addToCart = async(itemId) => {
        
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
          // const service = serviceList.find(service => service.s_id === itemId);

          // if(!service) return;
        // setCartItems((prev) => ({ ...prev, [itemId]:( prev[itemId] || 0) + qty })); //already clicked service
  //       If the item is already in the cart, prevCartItems[itemId] will return its current quantity.
  // If the item is not in the cart, prevCartItems[itemId] will be undefined.The || operator returns the right-hand operand (0 in this case) 
  //if the left-hand operand (prevCartItems[itemId]) is falsy (i.e., undefined, null, 0, false, etc.).
  // This ensures that when the item is not already in the cart (prevCartItems[itemId] is undefined), we start with a quantity of 0.
      
        const token = localStorage.getItem("userdbtoken");
        if(token){
          await apiInstance.post("/api/cart/add",{s_id:itemId})
          console.log("added")
        }
        else{
          localStorage.setItem("cartItems",JSON.stringify({...cartItems, [itemId]: (cartItems[itemId] || 0)+1}))
        }
      }

    const removeFromCart = async (itemId) => {

      // serviceList.find(service => service.s_id === itemId);

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
          await apiInstance.post("/api/cart/remove",{s_id:itemId})
          console.log("removed")
        }
        else{
          
          const localCartItems = { ...cartItems };
          if (localCartItems[itemId] > 1) {
              localCartItems[itemId] -= 1;
          } else {
              delete localCartItems[itemId];
          }
          localStorage.setItem("cartItems", JSON.stringify(localCartItems))
        }
      };

      
      const loadCartData = async (token) => {
        try {
          const response = await apiInstance.post("/api/cart/get", {}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setCartItems(response.data.cartData);
        } catch (error) {
          if (error.response && error.response.status === 401) {
        
            localStorage.clear(); 
            navigate("/")
          } else {
       
            console.error("Error loading cart data:", error);
           
          }
        }
      };
      
    
      const deleteFromCart = async(itemId) =>{
       
        setCartItems((prev)=>{
          const updatedItems = {...prev};
          delete updatedItems[itemId]
    
          return updatedItems
        })
        const token = localStorage.getItem("userdbtoken")
        if(token){
           await apiInstance.post("/api/cart/delete",{s_id:itemId})
          console.log("deleted")
        }
        else{
          const localCartItems = { ...cartItems };
        delete localCartItems[itemId];
        localStorage.setItem("cartItems", JSON.stringify(localCartItems));
        }
      }
      
      const syncLocalCartToServer = async (localCartItems) => {
        const token = localStorage.getItem("userdbtoken");
        if (token) {
          for (const [itemId, qty] of Object.entries(localCartItems)) {
            for (let i = 0; i < qty; i++) {
              await apiInstance.post("/api/cart/add", { s_id: itemId });
            }
          }
        }
      };
      // const updateCartItemQuantity = (itemId, qty) => {
      //   serviceList.find(service => service.s_id === itemId);
      //   setCartItems(prevCartItems => ({
      //     ...prevCartItems,
      //     [itemId]: qty
      //   }));
      // };
    
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
      const response = await apiInstance.get("/api/homeservice/list");
  
      if (response.data.success) {
        setServiceList(response.data.data);
      } else {
        toast.error("Error");
      }
    };

    

    useEffect(() => {
      async function loadData() {
        await fetchServiceList();
        const localCartItems = JSON.parse(localStorage.getItem("cartItems") || "{}");
  
        const token = localStorage.getItem("userdbtoken");
        if (token) {
          setIsLoggedIn(true);
          await loadCartData (token)
          await syncLocalCartToServer(localCartItems);
        } else {
          setIsLoggedIn(false);
          setCartItems(localCartItems);
        }
  
        // const handleStorageChange = (event) => {
        //   if (event.key === "userdbtoken") {
        //     if (event.newValue) {
        //       setIsLoggedIn(true);
        //     } else {
        //       setIsLoggedIn(false);
        //       toast.info("Login expired, please log in again.");
        //     }
        //   }
        // };
  
        // window.addEventListener("storage", handleStorageChange);
  
        // return () => {
        //   window.removeEventListener("storage", handleStorageChange);
        // };

        
      }
  
      loadData();
    }, [fetchServiceList,loadCartData,syncLocalCartToServer]);

    return(
        <StoreContext.Provider value={{
            isLoggedIn, setIsLoggedIn, logout, handleLogout,openLoginModal, closeLoginModal, loginModalOpen,
            cartItems, addToCart, removeFromCart, 
            getTotalItems, getGrandTotalPrice, deleteFromCart, serviceList, setServiceList, fetchServiceList
        }}>
            {children}
        </StoreContext.Provider>
    )
}