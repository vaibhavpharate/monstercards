import React from "react";
import './search-box.style.css';

const SearchBox = ({placeholder,handleChange}) => {
    return(
        <div>
            <input type="search" className="search-box" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default SearchBox;