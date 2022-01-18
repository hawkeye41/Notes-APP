import React, {useState} from "react";

// import {FaToggleOn} from "react-icons/fa"

import './Note.css';

const Header=({handleDarkMode})=>{
  
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=> handleDarkMode((preDarkMode)=>!preDarkMode)} id="toggle"className="save">
                 <span id="toggle-circle"></span>
                </button>
        </div>
    )
}

export default Header;