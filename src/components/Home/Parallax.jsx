import React, { useEffect}  from "react";
//I stored the gsap cdn link in the index.html file. Then I can use easily gsap globally without import.
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import "./Parallax.css";
// import ParallaxContext from "./ParallaxContext";


//Initialize ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  // const parallaxValue = useContext(ParallaxContext); // Using useContext to access the value
useEffect(()=>{
    gsap.from(".im-bg",{
        scrollTrigger:{
            scrub:1,
             // Throttle updates to every 100ms
        },
        scale: 1.4

    });
    gsap.from(".im-bg-1",{
        scrollTrigger:{
            scrub:1,
           // Throttle updates to every 100ms
        },
        scale: 1.4

    });
    // gsap.from(".serv_man",{
    //     scrollTrigger:{
    //         scrub:1
    //     },
    //     scale:0.5
    // })

        gsap.from(".door_l",{
            scrollTrigger:{
                scrub:1,
                 // Throttle updates to every 100ms
            },
            x:-200
        })

        gsap.from(".door_r",{
            scrollTrigger:{
                scrub:1,
                
            },
            x:200
        })

        // gsap.from(".comp",{
        //     scrollTrigger:{
        //         scrub:1
        //     },
        //     y:100
        // })

        // Animation for ".comp" class with scroll direction check
    gsap.to(".comp", {
        scrollTrigger: {
          trigger: ".comp",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            // Check scroll direction
            const scrollDirection = self.direction;
  
            // Adjust the 'y' property based on scroll direction
            if (scrollDirection === 1) {
              // Scrolling down
              gsap.to(".comp", {
                y: 300, // Move down
                duration: 1.5,
                
              });
            } else {
              // Scrolling up
              gsap.to(".comp", {
                y: 0, // Move back to center
                duration: 1.5,
                
              });
            }
          },
        },
      });

// Refresh ScrollTrigger after dynamic changes
ScrollTrigger.refresh();

},[]);


    return(
      // <ParallaxContext.Provider value={parallaxValue}>
        <>
        <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        
            <img src= {require('../../assests/images/Service persons.jpeg')} alt="Service persons" className="im-bg absolute top-0 left-50 w-4/6 h-5/6 objcet-cover pointer-events-none mo:hidden ta:hidden de:block des:block"/>
            <img src= {require('../../assests/images/Service person-mobile.jpeg')} alt="Service persons" className="im-bg-1 absolute top-0 left-50 w-full h-5/6 objcet-cover pointer-events-none mo:block ta:block ta:w-4/6 de:hidden des:hidden"/>
            <h2 className="relative  text-8xl comp scroll-smooth  font-bold bg-gradient-to-r from-cyan-500 via-pink-500 to-blue-900  inline-block text-transparent bg-clip-text font-outline-6 mo:text-6xl mo:font-outline-3  ta:text-7xl ta:font-outline-4">TUNEGURU</h2>
            {/* <img src= {require('../../assests/Images/service.png')} alt="Home Service Person"  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 object-cover pointer-events-none serv_man"/> */}
            {/* <img src= {require('../../assests/Images/AC1.png')} alt="AC1" />
            <img src= {require('../../assests/Images/AC2.png')} alt="AC2" /> */}
            <img src= {require('../../assests/images/Door left.png')} alt="Door left" className="absolute top-0 left-0 w-2/5 h-screen objcet-cover pointer-events-none door_l mo:left-20"/>
            <img src= {require('../../assests/images/Door right.png')} alt="Door right" className="absolute top-0 right-0 w-2/5 h-screen objcet-cover pointer-events-none door_r mo:right-20"/>
        </section>
      
        
        </>
        // </ParallaxContext.Provider>
    )
}

export default Parallax;