import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Parallax.css";

function Parallax() {
  const imBgRef = useRef(null);
  const imBg1Ref = useRef(null);
  const doorLRef = useRef(null);
  const doorRRef = useRef(null);
  const compRef = useRef(null);

  useEffect(() => {
    // Set initial positions for doors and text
    gsap.set(doorLRef.current, { x: -250 });
    gsap.set(doorRRef.current, { x: 250 });
    gsap.set(compRef.current, { y: 0, opacity: 1 });
    gsap.set(imBgRef.current, { scale: 1.2 }); // Initial zoom-in for desktop image
    gsap.set(imBg1Ref.current, { scale: 1.2 }); // Initial zoom-in for mobile image

    // Scroll event handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the scale value based on scroll position
      const scaleValue = 1.2 - (scrollY / windowHeight) * 0.2;

      // Animate the text, doors, and background image based on scroll position
      if (scrollY > windowHeight / 2) {
        gsap.to(compRef.current, { y: 300, opacity: 0, duration: 1, ease: "power1.out" });
        gsap.to(doorLRef.current, { x: 0, duration: 1, ease: "power1.inOut" });
        gsap.to(doorRRef.current, { x: 0, duration: 1, ease: "power1.inOut" });
      } else {
        gsap.to(compRef.current, { y: 0, opacity: 1, duration: 1, ease: "power1.out" });
        gsap.to(doorLRef.current, { x: -250, duration: 1, ease: "power1.inOut" });
        gsap.to(doorRRef.current, { x: 250, duration: 1, ease: "power1.inOut" });
      }

      // Apply zoom effect to background images
      gsap.to(imBgRef.current, { scale: scaleValue, duration: 0.5, ease: "power1.out" });
      gsap.to(imBg1Ref.current, { scale: scaleValue, duration: 0.5, ease: "power1.out" });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-orange-100">
      <img
        src={require("../../assests/images/Service persons.jpeg")}
        alt="Service persons"
        className="im-bg absolute top-0 left-50 w-4/6 h-5/6 object-cover pointer-events-none mo:hidden ta:hidden de:block des:block"
        ref={imBgRef}
      />
      <img
        src={require("../../assests/images/Service person-mobile.jpeg")}
        alt="Service persons"
        className="im-bg-1 absolute top-0 left-50 w-full h-5/6 object-cover pointer-events-none mo:block ta:block ta:w-[90%] de:hidden des:hidden"
        ref={imBg1Ref}
      />
      <h2
        className="relative text-8xl comp scroll-smooth font-bold bg-gradient-to-r from-cyan-500 via-pink-500 to-blue-900 inline-block text-transparent bg-clip-text font-outline-6 mo:text-6xl mo:font-outline-3 ta:text-7xl ta:font-outline-4"
        ref={compRef}
      >
        TUNEGURU
      </h2>
      <img
        src={require("../../assests/images/Door left.png")}
        alt="Door left"
        className="absolute top-0 left-[-8px] w-2/5 h-screen object-cover pointer-events-none door_l"
        ref={doorLRef}
      />
      <img
        src={require("../../assests/images/Door right.png")}
        alt="Door right"
        className="absolute top-0 right-[-8px] w-2/5 h-screen object-cover pointer-events-none door_r"
        ref={doorRRef}
      />
    </section>
  );
}

export default Parallax;
