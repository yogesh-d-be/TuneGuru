import React, { useContext, useState } from "react";
import { Link} from "react-router-dom";
import CartData from "./CartData";
import { StoreContext } from "../StoreContext";
import { API_URL } from "../../service/Helper";

function Cartservices() {
  const { cartItems, deleteFromCart, serviceList, addToCart, removeFromCart} = useContext(StoreContext);

  const [order, setOrder] = useState(false);
  const [selectCart, setSelectCart] = useState("cart");
 

  const handleCheckOut = () => {
    setOrder(true);
    handleSelect("form");
  };

  const handleSelect = (select) => {
    setSelectCart(selectCart === select ? null : select);
    if (select === "cart") {
      setOrder(false);
    } else if (select === "form") {
      setOrder(true);
    } else if (select === "card") {
      // handle card selection logic if any
    }
  };

  if (!cartItems || Object.keys(cartItems).length === 0) {
    return (
      <div className="text-center py-10">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-bold">Your cart feels so empty!</h2>
          <img
            src={require('../../assests/Icons/shopping-cart (2).png')}
            alt="Empty Cart"
            className="w-16"
          />
        </div>
        <p className="text-lg mt-2">Why not add some amazing services to it?</p>
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

  return (
    <>
      <h1 className="font-bold text-3xl mt-12 mb-6 ml-12">Your Cart</h1>
      <div className="ml-12 pt-2 w-[60%] flex flex-row justify-center space-x-24 px-8 mb-4 drop-shadow-2xl de:w-[80%] ta:w-[85%] mo:w-[80%] mo:pt-2 mo:mb-3">
        <img onClick={() => handleSelect("cart")} src={require('../../assests/Icons/add-to-cart.png')} alt="cart" className={`w-[40px] cursor-pointer ${selectCart === "cart" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
        <img onClick={() => handleSelect("form")} src={require('../../assests/Icons/contact-form.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "form" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
        <img onClick={() => handleSelect("card")} src={require('../../assests/Icons/debit-card.png')} alt="form" className={`w-[40px] cursor-pointer ${selectCart === "card" ? "border-[3px] border-blue-900 p-[3px]" : ''}`} />
      </div>

      <div className="w-[90%] ml-[5%] flex flex-row de:flex-wrap ta:flex-wrap mo:flex-wrap mo:w-full mo:ml-[0]">
        {!order ? (
          <div className="ml-12 mt-2 pt-8 w-[60%] bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none">
            {cartDetails.map(({ item, itemId, quantity, totalPrice }) => (
              <div
                key={itemId}
                className="flex flex-row items-center w-full bg-gray-300 rounded-xl shadow-xl px-4 py-4 mb-4"
              >
                <div className="flex flex-row items-center w-[50%]">
                  <img
                    src={API_URL + "/images/" + item.image || ""}
                    alt={item.serviceName || "Service Image"}
                    className="w-20 rounded-lg"
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
          </div>
        ) : (
          <div className="ml-12 mt-2 pt-8 w-[60%] bg-gray-100 px-8 drop-shadow-2xl de:w-[80%] ta:w-full ta:ml-0 ta:bg-white ta:drop-shadow-none mo:w-full mo:ml-0 mo:bg-white mo:drop-shadow-none h-fit">
            <CartData />
          </div>
        )}

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
              <p>Items {totalItems}</p>
              <p>&#x20B9;{grandTotalPrice}</p>
            </div>
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p>Discount</p>
              <p>-&#x20B9;0</p>
            </div>
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p>Shipping</p>
              <p>&#x20B9;0</p>
            </div>
            <div className="ml-6 mt-6 w-[85%] flex flex-row justify-between">
              <p className="font-bold">Total Price</p>
              <p className="font-bold">&#x20B9;{grandTotalPrice}</p>
            </div>
            <button onClick={handleCheckOut} className="w-[85%] mb-4 mt-6 ml-6 bg-blue-900 py-2 px-1 text-white rounded-md text-sm">
              Checkout
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Cartservices;
