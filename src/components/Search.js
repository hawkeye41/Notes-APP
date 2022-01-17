import React from "react"
import './Note.css';
import { MdSearch } from "react-icons/md"
const Search =({handleSearchNote})=>{
    return <div className="search">
        <MdSearch className="search-icon" size='1.3em'/>
    <input  onChange={(event)=>handleSearchNote(event.target.value)} type='text' placeholder='type something...'></input>
    </div>
}

export default Search