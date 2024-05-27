import React from "react";

function CartData() {
    const Data = [
        {
            type:"text",
            placeholder:"First Name"
        },
        {
            type:"text",
            placeholder:"Last Name"
        },
        {
            type:"email",
            placeholder:"Email Address"
        },
        {
            type:"text",
            placeholder:"Street"
        },
        {
            type:"text",
            placeholder:"City"
        },
        {
            type:"text",
            placeholder:"State"
        },
        {
            type:"text",
            placeholder:"Pincode"
        },
        {
            type:"text",
            placeholder:"Mobile Number"
        },
        
    ]
  return (
    <>
      <div className="flex flex-row flex-wrap mb-6 ">
        <form className=" mo:w-full  mo:bg-gray-300 mo:py-6 mo:rounded-lg" action="">
            <h1 className="font-semibold text-xl ml-6 mo:text-lg">Enter Your Details</h1>
            <div className="flex flex-wrap mt-6 pb-6 mo:flex mo:flex-col mo:mt-3">
            {Data.map((data,i)=>(
          <div key={i} className="w-1/2 px-2 mo:w-full   mo:px-6">
            <input type={data.type} className="w-[90%] mt-4 h-[38px] mo:w-full rounded-lg   " placeholder={data.placeholder} />
          </div>
          ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default CartData;
