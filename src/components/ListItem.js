import React from 'react';

const ListItem = (props) => {
    const movieLink = `https://www.imdb.com/title/${props.movie.imdbID}`
    return (
        <li>
            <a href={movieLink} target="_blank">
                <img src={props.movie.Poster} /><br></br>
                {props.movie.Title}
            </a>
        </li>
    )
}

export default ListItem;