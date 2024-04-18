import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import './Dropdown.css'

function Dropdown({ toggleDropdown }){

    


    return(
        <>
        <ul className="dropdown-menu" onClick={toggleDropdown}>
        {MenuItems.map((item,index)=>{
            return(
                <li key={index}>
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