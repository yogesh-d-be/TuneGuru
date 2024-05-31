// import React, { useState } from "react";
// import Home from "./Home";
// import Navbar from "./Navbar";

// function Logout() {
//   const [openLogin, setOpenLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Define the logoutUser function
//   const logoutUser = () => {
//     // Implement logout functionality here
//     // For example, clear localStorage and update state
//     localStorage.removeItem("userdbtoken");
//     setOpenLogin(false);
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <Navbar openLogin={openLogin} handleLogout={logoutUser} isLoggedIn={isLoggedIn} />
//       <Home openLogin={openLogin} setOpenLogin={setOpenLogin} />
//     </>
//   );
// }

// export default Logout;
