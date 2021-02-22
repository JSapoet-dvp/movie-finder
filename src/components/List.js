import React from 'react';
import ListItem from './ListItem';
import { v4 as uuidv4 } from 'uuid';


const List = (props) => {
    const allMovies = props.displayedMovies.map(movie => <ListItem key={uuidv4()} movie={movie} />)
    return (
        <div className="movie-list">
            <ul>{allMovies}</ul>
        </div>
    )
}

export default List;