import React from "react";
import { Link } from "react-router-dom";
// import NavContext from "./NavContext";
// import Navbar from "./Navbar";
// import ParallaxContext from "./ParallaxContext";
import Parallax from "./Parallax";
import Login from "./Login";
import img1 from "../assests/Icons/electronics.png";
import img2 from "../assests/Icons/electrician.png";
import img3 from "../assests/Icons/plumber.png";
import img4 from "../assests/Icons/carpenter.png";
import img5 from "../assests/Icons/device.png";
import img6 from "../assests/Icons/vaccum-cleaner.png";
import img7 from "../assests/Icons/person.png";
import img8 from "../assests/Icons/mechanic.png";
import img9 from "../assests/Icons/technology.png";
import img10 from "../assests/Icons/paint-roller.png";
import Appliances from "./Appliances";
// import Navbar from "./Navbar";
// import {useLocation} from "react-router-dom";

function Home() {
  // const nav = useContext(NavContext)
  // const parallaxValue = useContext(ParallaxContext);
  // const{path} = useLocation();
  // const isHome = path === '/';
  //    const [login, setLogin] = useState(false);

  // const closeLogin = () =>{
  //     setLogin(false);
  // }
  // const servicesImage = ({images})=>{
  //     return(
  //         <div className="bg-teal-200 p-4">
  //             {images.map((im,i)=>(
  //                 <div key={i} className="mb-4">
  //                     <img src={im.src} alt={im.alt} className="w-full" />
  //                 <p className="bg-blue-500 text-white p-2">{im.line}</p>
  //                 </div>
  //             ))

  //             }

  //         </div>
  //     )
  // }

  const imagesData = () => {
    const images = [
      {
        src: img1,
        alt: "Image 1",
        line: "Appliances Services",
      },
      {
        src: img2,
        alt: "Image 2",
        line: "Electrician",
      },
      {
        src: img3,
        alt: "Image 3",
        line: "Plumber",
      },
      {
        src: img4,
        alt: "Image 4",
        line: "Carpenter",
      },
      {
        src: img5,
        alt: "Image 5",
        line: "Device Services",
      },
      {
        src: img6,
        alt: "Image 6",
        line: "Cleaning Services",
      },
      {
        src: img7,
        alt: "Image 7",
        line: "Pest Control",
      },
      {
        src: img8,
        alt: "Image 8",
        line: "Vehicle Services",
      },
      {
        src: img9,
        alt: "Image 9",
        line: "Water Purifier",
      },
      {
        src: img10,
        alt: "Image 10",
        line: "Painting",
      },
    ];
    return images;
  };

  const images = imagesData();

  return (
    <>
      {/* {nav} */}
      {/* <ParallaxContext.Provider value={Parallax}>
{parallaxValue}
</ParallaxContext.Provider> */}
      {/* <Login openModal={login} closeModal={closeLogin}/> */}

      <Login />
      <Parallax />
      {/* <Appliances/> */}
      <div className="scroll-element">
        <div className="left-52 mt-32 ">
          <h1 className="font-bold text-3xl my-24 flex justify-center mo:my-12 mo:text-[26px] mo:font-bold">
            Experts Care For You
          </h1>
          <div className="flex justify-center  items-center">
            <ul className="flex flex-cols-2 justify-evenly items-center gap-40 ml-8 mo:grid mo:grid-cols-1 mo:gap-y-[10%] ta:grid grid-cols-2 ta:gap-x-[17%] ta:gap-y-[20%] ta:mb-12 de:grid de:grid-cols-2 de:gap-y-[17%]  des_search:gap-20 des_search:flex flex-cols-2 ">
              <li className="list-none">
                <img
                  src={require("../assests/Icons/customer-service.png")}
                  alt="Customer service"
                  className="w-28 ml-8 mb-8 mo:w-28 ta:w-20 de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl ">
                  Choose from 30+ services
                </span>
                <p className="mo:mt-2 de:text-balance">Choose your services</p>
              </li>
              <li className="list-none ">
                <img
                  src={require("../assests/Icons/mobile.png")}
                  alt="Form"
                  className="w-28 ml-4 mb-8 mo:w-28 ta:w-20 de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl">
                  Fill Details
                </span>
                <p className="mo:mt-2">
                  <span className="text-balance">
                    Just fill your mandatory information
                  </span>
                </p>
              </li>
              <li className="list-none  ">
                <img
                  src={require("../assests/Icons/address.png")}
                  alt="Home"
                  className="w-28 ml-4 mb-8 mo:w-28 mo:ml-8 ta:w-20 ta:grid  de:w-24 des_search:w-24"
                />
                <span className="font-medium text-2xl mo:text-xl mo:font-bold ta:text-xl ">
                  Just click & chill
                </span>
                <p className="mo:mt-2 mo:mb-24 de:text-balance ">
                  Our experts will handle it all
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-green-600 mb-8">
  <h1 className="font-bold text-3xl pt-8 text-white mt-20 mb-16 flex justify-center mo:text-[26px] mo:mb-8 mo:mt-32">
    Home Services Right to You
  </h1>
  <div className="grid justify-items-center">
    <div className="grid justify-items-center mb-8 grid-cols-1 mo:grid-cols-2 ta:grid-cols-3 de:grid-cols-4 des:grid-cols-5 w-full gap-4 pt-8 mo:w-[90%] ta:w-[80%] de:w-[90%] des:w-[80%]">
      {images.map((im, i) => (
        <div
          key={i}
          className="rounded-xl hover:shadow-lg hover:scale-105 hover:transition hover:ease-out hover:duration-300"
        >
          <img
            src={im.src}
            alt={im.alt}
            className="w-28 bg-teal-900 box-content px-6 py-4 rounded-xl mb-2 mo:w-24 ta:w-24 de:w-28 des_search:w-24 des_xl:w-28"
          />
          <p className="mt-2 text-center text-white font-semibold mb-4">{im.line}</p>
        </div>
      ))}
    </div>
  </div>
</div>




        {/* <div>
    <h1 className="font-bold text-3xl mt-28 mb-20 flex justify-center mo:text-[26px] mo:mb-8 mo:mt-32">Home Services Right to You</h1>
    <div className=" grid  justify-items-center ">
    <div className=" grid-cols-5 grid-x-24 w-[80%]  pt-8 grid mo:grid mo:grid-cols-3 mo:w-[90%]  ta:w-[90%]  ta:grid ta:grid-cols-4 ta:space-y-reverse de:w-[85%] de:grid de:grid-cols-4 des_search:w-11/12">

    <Link to=''>
        <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-8">
    <img src={require('../assests/Icons/electronics.png')} alt="appliances" className="w-24 bg-teal-200 box-content px-6 py-4 rounded-xl  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className=" mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Appliances Services</p>
    </div>
    </Link>
    <Link to=''>
        <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-8">
    <img src={require('../assests/Icons/electrician.png')} alt="appliances" className="w-24 bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300  mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className=" mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Electrician</p>
    </div>
    </Link>
    <Link to=''>
        <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-8">
    <img src={require('../assests/Icons/plumber.png')} alt="appliances" className="w-24 bg-teal-200 box-content px-6 py-4 rounded-xl  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Plumber</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-8">
    <img src={require('../assests/Icons/carpenter.png')} alt="carpenter" className="w-24  bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 ">Carpenter</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-0">
    <img src={require('../assests/Icons/device.png')} alt="devices" className="w-24  bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16"/>
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Electronic Device Services</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-0">
    <img src={require('../assests/Icons/vaccum-cleaner.png')} alt="cleaner" className="w-24 bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16"/>
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Home Cleaning Services</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-0">
    <img src={require('../assests/Icons/person.png')} alt="pest-control" className="w-24  bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Pest Control</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:mb-0">
    <img src={require('../assests/Icons/mechanic.png')} alt="mechanic" className="w-24 bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16"/>
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 ta:mb-20 de:mb-20 ">Vehicle Services</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:space-y-reverse">
    <img src={require('../assests/Icons/technology.png')} alt="water purifier" className="w-24  bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Water Purifier</p>
    </div>
    </Link>
    <Link to=''>
    <div className="flex flex-col items-center mb-16 mo:mb-8 ta:space-y-reverse">
    <img src={require('../assests/Icons/paint-roller.png')} alt="painting" className="w-24  bg-teal-200 box-content px-6 py-4 rounded-xl hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300 mo:w-[55px] mo:px-[18px] mo:py-[12px] ta:w-16" />
    <p className="mt-2 text-center text-balance  hover:scale-110 hover:transition hover:ease-in-out hover:delay-300 hover:duration-300">Painting</p>
    </div>
    </Link> */}
        {/* <img src={require('../assests/Icons/.png')} alt="" /> */}
        {/* {/* </div>
    // </div> */}
    
</div> 
      
    </>
  )
}

export default Home;
