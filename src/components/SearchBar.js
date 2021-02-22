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
            <button type="submit" >search</button>

        </form>
    )
}

export default SearchBar;