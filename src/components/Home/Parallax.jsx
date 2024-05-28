import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Parallax.css";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  useEffect(() => {
    const animateElements = () => {
      gsap.from(".im-bg", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 1.4,
      });
      gsap.from(".im-bg-1", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 1.4,
      });
      gsap.from(".door_l", {
        scrollTrigger: {
          scrub: 1,
        },
        x: -200,
      });
      gsap.from(".door_r", {
        scrollTrigger: {
          scrub: 1,
        },
        x: 200,
      });
      gsap.to(".comp", {
        scrollTrigger: {
          trigger: ".comp",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const scrollDirection = self.direction;
            if (scrollDirection === 1) {
              gsap.to(".comp", {
                y: 300,
                duration: 1.5,
              });
            } else {
              gsap.to(".comp", {
                y: 0,
                duration: 1.5,
              });
            }
          },
        },
      });
    };

    animateElements(); // Call the animation function

    // Refresh ScrollTrigger after dynamic changes
    ScrollTrigger.refresh();
  }, []); // Empty dependency array means this effect will run only once after the initial render

  return (
    <>
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <img
          src={require("../../assests/images/Service persons.jpeg")}
          alt="Service persons"
          className="im-bg absolute top-0 left-50 w-4/6 h-5/6 object-cover pointer-events-none mo:hidden ta:hidden de:block des:block"
        />
        <img
          src={require("../../assests/images/Service person-mobile.jpeg")}
          alt="Service persons"
          className="im-bg-1 absolute top-0 left-50 w-full h-5/6 object-cover pointer-events-none mo:block ta:block ta:w-4/6 de:hidden des:hidden"
        />
        <h2 className="relative text-8xl comp scroll-smooth font-bold bg-gradient-to-r from-cyan-500 via-pink-500 to-blue-900 inline-block text-transparent bg-clip-text font-outline-6 mo:text-6xl mo:font-outline-3 ta:text-7xl ta:font-outline-4">
          TUNEGURU
        </h2>
        <img
          src={require("../../assests/images/Door left.png")}
          alt="Door left"
          className="absolute top-0 left-0 w-2/5 h-screen object-cover pointer-events-none door_l mo:left-16"
        />
        <img
          src={require("../../assests/images/Door right.png")}
          alt="Door right"
          className="absolute top-0 right-0 w-2/5 h-screen object-cover pointer-events-none door_r mo:right-16"
        />
      </section>
    </>
  );
}

export default Parallax;
