import React from "react";
import MenuItems from "../Register_Login/MenuItems";
import { Link } from "react-router-dom";
import './Dropdown.css'

function Dropdown({ toggleDropdown,handleMenuOpen }){

    


    return(
        <>
        <ul className="dropdown-menu" onClick={toggleDropdown}>
        {MenuItems.map((item,index)=>{
            return(
                <li key={index} onClick={handleMenuOpen}>
                    <Link className={item.cName} to={item.path} >
                    {item.title}
                    </Link>
                </li>
            )
        })}
        </ul>
        </>
    )
}

export default Dropdown;