import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../service/Helper';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const apiInstance = axios.create({
    baseURL: API_URL
  });

  apiInstance.interceptors.request.use(
    (config) => {
      const authToken = localStorage.getItem("userdbtoken");
      config.headers.Authorization = `Bearer ${authToken}`;
      return config;
    },
    (error) => {
      console.error("Request Error", error);
      return Promise.reject(error);
    }
  );

  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data.Message === "Token expired") {
        localStorage.clear();
        window.location.href = '/';
        toast.info("Your session expired, please log in again.");
      }
      return Promise.reject(error);
    }
  );

  const [cartItems, setCartItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const navigate = useNavigate();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("userdbtoken");
    setIsLoggedIn(false);
    setCartItems({});
  };

  const handleLogout = async () => {
    try {
      logout();
      toast.success("Logout Successfully");
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error logging out");
    }
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const token = localStorage.getItem("userdbtoken");
    if (token) {
      await apiInstance.post("/api/cart/add", { s_id: itemId });
    } else {
      const localCartItems = { ...cartItems, [itemId]: (cartItems[itemId] || 0) + 1 };
      localStorage.setItem("cartItems", JSON.stringify(localCartItems));
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });

    const token = localStorage.getItem("userdbtoken");
    if (token) {
      await apiInstance.post("/api/cart/remove", { s_id: itemId });
    } else {
      const localCartItems = { ...cartItems };
      if (localCartItems[itemId] > 1) {
        localCartItems[itemId] -= 1;
      } else {
        delete localCartItems[itemId];
      }
      localStorage.setItem("cartItems", JSON.stringify(localCartItems));
    }
  };

  const deleteFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      delete updatedItems[itemId];
      return updatedItems;
    });

    const token = localStorage.getItem("userdbtoken");
    if (token) {
      await apiInstance.post("/api/cart/delete", { s_id: itemId });
    } else {
      const localCartItems = { ...cartItems };
      delete localCartItems[itemId];
      localStorage.setItem("cartItems", JSON.stringify(localCartItems));
    }
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


  //it sync local storage before login cart item to after login cartitem
  const syncLocalCartToServer = async (localCartItems) => {
    const token = localStorage.getItem("userdbtoken");
    if (token) {
      for (const [itemId, qty] of Object.entries(localCartItems)) {
        for (let i = 0; i < qty; i++) {
          await axios.post(API_URL + "/api/cart/add", { s_id: itemId }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }
      }
    }
  };



  useEffect(() => {
    const fetchServiceList = async () => {
      const response = await apiInstance.get("/api/homeservice/list");
      if (response.data.success) {
        setServiceList(response.data.data);
      } else {
        toast.error("Error");
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
        localStorage.removeItem("cartItems"); // Clear local storage after loading cart data from server
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          setIsLoggedIn(false);
          navigate("/");
        } else {
          console.error("Error loading cart data:", error);
        }
      }
    };

    const loadData = async () => {
      await fetchServiceList();

      const token = localStorage.getItem("userdbtoken");
      if (token) {
        setIsLoggedIn(true);
        const localCartItems = JSON.parse(localStorage.getItem("cartItems") || "{}");
        await syncLocalCartToServer(localCartItems);
        await loadCartData(token);
      } else {
        setIsLoggedIn(false);
        const localCartItems = JSON.parse(localStorage.getItem("cartItems") || "{}");
        setCartItems(localCartItems);
      }
    };

    loadData();
     // eslint-disable-next-line
  }, []);

  return (
    <StoreContext.Provider value={{
      isLoggedIn, setIsLoggedIn, logout, handleLogout,
      openLoginModal, closeLoginModal, loginModalOpen,
      cartItems, addToCart, removeFromCart,
      getTotalItems, getGrandTotalPrice, deleteFromCart,
      serviceList, setServiceList
    }}>
      {children}
    </StoreContext.Provider>
  );
};
