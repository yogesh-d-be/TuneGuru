// // import React, { useContext, useState } from "react";

// // import { StoreContext } from "./CartId";

// // function Add_To_Cart({ac_id}){

// //     // const [count, setCount] = useState(0);
// //     // const [showAdd , setShowAdd] = useState(true)

// //     const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

// //     // const increment = () => {
// //     //     setCount(count + 1);
// //     //     setShowAdd(false)
// //     // }

// //     // const decrement = () => {
// //     //     if(count===1)
// //     //         setShowAdd(true)
// //     //     if(count>0)//it will not allow below 0
// //     //     setCount(count - 1);
       
        
// //     // }

// //     return(
// //         <>
// //         {!cartItems[ac_id] ? ( <button
// //   className="flex flex-row items-center border-2 border-blue-900 px-2 py-2 h-8 w-20 rounded-md text-blue-900 transition-transform duration-300 ease-in-out des_xl:basis-[15%] ta:w-15 ta:text-sm ta:m-auto mo:w-15 mo:text-sm mo:px-3 mo:py-2"
// //   style={{ flexBasis: "10%" }}
// //   onClick={()=>addToCart(ac_id)}
// // >
// //   Add
// // </button>)
// // :
// //         (<div className=" w-[63px] text-sm text-left mo:h-[25px]">
// //             <div className="flex flex-row w-[100%] border-2 border-blue-900 justify-center items-center rounded-[4px] bg-white">
// //             <button onClick={()=>removeFromCart(ac_id)} className="px-2 py-1  font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">-</button>
// //             <div className="border-x-2 border-blue-900 pl-1  py-1 font-semibold w-[21px] transition-transform duration-300 ease-in-out">{cartItems[ac_id]}</div>
// //             <button onClick={()=>addToCart(ac_id)} className=" py-1 font-bold w-[20px] rounded-[4px] transition-transform duration-300 ease-in-out">+</button>
// //             </div>
// //         </div>)}
        
// //         </>
// //     )
// // }

// // export default Add_To_Cart;


// import React, { useState } from "react";

// function AddToCart({ itemId, addToCart, removeFromCart, quantity }) {
//   const [count, setCount] = useState(quantity || 0);

//   const handleAddToCart = () => {
//     addToCart(itemId);
//     setCount((prevCount) => prevCount + 1);
//   };

//   const handleRemoveFromCart = () => {
//     if (count > 0) {
//       removeFromCart(itemId);
//       setCount((prevCount) => prevCount - 1);
//     }
//   };

//   return (
//     <div className="flex flex-row items-center">
//       <button
//         onClick={handleRemoveFromCart}
//         className="px-2 py-1 mr-1 font-bold text-white bg-red-500 rounded-full"
//       >
//         -
//       </button>
//       <div className="border border-gray-400 px-2 py-1 mr-1">{count}</div>
//       <button
//         onClick={handleAddToCart}
//         className="px-2 py-1 font-bold text-white bg-green-500 rounded-full"
//       >
//         +
//       </button>
//     </div>
//   );
// }

// export default AddToCart;
