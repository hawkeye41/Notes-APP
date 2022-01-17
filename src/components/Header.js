import React from "react";
import './Note.css';
const Header=({handleDarkMode})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=> handleDarkMode((preDarkMode)=>!preDarkMode)} className="save" id="toggle">Dark</button>
        </div>
    )
}

export default Header;