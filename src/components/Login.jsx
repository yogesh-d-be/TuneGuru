import React, { useState }  from "react";
// import { Link } from "react-router-dom";
// import NavContext from "./NavContext";
// import Navbar from "./Navbar";
// import ParallaxContext from "./ParallaxContext";
import Parallax from "./Parallax";
import LoginModal from "./LoginModal";
import Navbar from "./Navbar";
import Customer from "./Customer";
// import {useLocation} from "react-router-dom";


function Login(){
   
    const [login,setLogin] = useState(false)

    const openLogin = () =>{
        setLogin(true);
    }

    const closeLogin = () =>{
        setLogin(false)
    }
return(
<>


 <Navbar openLogin={openLogin}/>

 {login && <LoginModal isOpen={login} closeModal={closeLogin}/>}

</>
)

}

export default Login;