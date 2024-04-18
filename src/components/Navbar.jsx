import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from "./Dropdown";

import "./Navbar.css";

function Navbar({ openLogin }) {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [prevScroll, setPrevScroll] = useState(false);

  prevScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handleMenuOpen = (e) => {
    // Traverse up the DOM tree to check if any parent element has the class 'nav-item'
    let isNavItem = false;
    let currentNode = e.target;
    while (currentNode) {
      if (currentNode.classList && currentNode.classList.contains("nav-item")) {
        isNavItem = true;
        break;
      }
      currentNode = currentNode.parentElement;
    }

    if (isNavItem) {
      return;
    }

    setMenu(!menu);
    setPrevScroll(!prevScroll);
  };

  const searchClick = (e) => {
    e.stopPropagation();
    setMenu(true);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="relative flex justify-between h-20 items-center nav z-20">
        <img
          src={require("../assests/images/Tuneguru logo.png")}
          className="w-40 left-0 rounded-lg logo "
          alt="logo"
        />
        <div className="nav-items">
          <ul className={menu ? "mob open" : "desk"} onClick={handleMenuOpen}>
            <li className="list-none list">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 p-1 border-2 border-black outline-none rounded-2xl "
                onClick={searchClick}
              />
            </li>
            <li className="list-none list">
              <Link
                to="/"
                className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link active:bg-blue-700"
              >
                Home
              </Link>
            </li>
            <li className="list-none list">
              <Link
                to="/services"
                className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link"
              >
                Services
              </Link>
            </li>
            <li className="list-none list">
              <Link
                to="/about"
                className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link"
              >
                About
              </Link>
            </li>
            <li className="list-none list">
              <Link
                to="/support"
                className="no-underline block px-4 py-2 rounded-md text-white  mr-2 link"
              >
                Support
              </Link>
            </li>
            <li className="list-none list nav-item" onClick={toggleDropdown}>
              <Link
                to=""
                className="no-underline block px-4 py-2 rounded-md text-white mr-2 link"
              >
                Register
                <span className="ml-2 absolute right-3 top-0 bottom-0 flex items-center">
                  {dropdown ? (
                    <i className="fas fa-caret-up" />
                  ) : (
                    <i className="fas fa-caret-down" />
                  )}
                </span>
              </Link>
              {dropdown && <Dropdown toggleDropdown={toggleDropdown} />}
            </li>
            <li className="list-none list">
              <button
                className="login no-underline block px-4 py-2  rounded-md text-white  bg-orange-600 flex justify-center right-[50%]"
                onClick={openLogin}
              >
                Login
              </button>
            </li>
          </ul>
          <button className="menu-icon" onClick={handleMenuOpen}>
            {menu ? (
              <MdCancel className="text-white text-3xl cancel-icon animate-cancel" />
            ) : (
              <RxHamburgerMenu className="text-white text-3xl hammenu-icon animate-hamburger" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
