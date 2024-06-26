import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";



const ContactForm = () => {
  const intialData = {
    name: "",
    emailid: "",
    phone: "",
    option: "",
    message: "",
  };
  const apiURL = process.env.REACT_APP_API_URL;
  const [UserData, setData] = useState(intialData);
  const handleOnChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSumbit = async(event) => {
    event.preventDefault();
    try {
      const response=  await axios
      .post(`${apiURL}/post`, UserData)
      if (response.data.success) {
        console.success(response.data.message);
        
        
    } else {
        console.error(response.data.message);
    }
   
} catch (error) {
    console.error("Something went wrong");
  
    // console.log("Data", data);
  };
}

  return (
    <div>
       <h1 className="text-3xl mt-8 md:mt-10 sm:text-6xl lg:text-4xl tracking-wide text-center">
              CONTACT{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                US
              </span>
            </h1>
      <section className="backdrop-blur-lg">
        <div className="mx-auto my-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                Our complete independence from manufacturers and external group
                control ensures that our recommendations are solely focused on
                what best suits your needs, offering you the assurance and
                confidence in our commitment to your project's success.
              </p>

              <div className="mt-8">
                <Link to="#" className="text-2xl font-bold text-orange-600">
                  {" "}
                  9566 0137 27{" "}
                </Link>

                <address className="mt-2 not-italic">
                  Anna nagar, Chennai 600040
                </address>
              </div>
            </div>

            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" onSubmit={handleSumbit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    required
                    id="name"
                    name="name"
                    value={UserData.name}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      required
                      name="emailid"
                      value={UserData.emailid}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required
                      name="phone"
                      value={UserData.phone}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                 

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                        value="COMMERCIAL"
                        onChange={handleOnChange}
                      />

                      <span className="text-sm"> COMMERCIAL </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                        value="INTERIOR DESIGN"
                        onChange={handleOnChange}
                      />

                      <span className="text-sm"> INTERIOR DESIGN </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    value={UserData.message}
                    onChange={handleOnChange}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:text-orange-500"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default ContactForm;