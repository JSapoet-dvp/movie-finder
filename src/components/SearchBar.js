import React from 'react';

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSearch} className="search-container" >
            <input
                type="text"
                name="search"
                placeholder="type.."
                onChange={props.handleChange}
                className="search-container__input"
            />
            <button type="submit" ><span className="fas fa-search"> </span></button>

        </form>
    )
}

export default SearchBar;