import React from 'react';
import List from './List';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { movieData } from '../data/MovieData';


class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: movieData,
            filter: "All",
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSearch(event) {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            filter: "search",
        })
    }

    render() {
        let displayedMovies = [];
        const searchText = this.state.search;
        if (this.state.filter === "All") {
            displayedMovies = this.state.movies
        } else if (this.state.filter === "New") {
            displayedMovies = [...this.state.movies].filter(movie => Number(movie.Year) >= 2015)
        } else if (this.state.filter === "search") {
            displayedMovies = [...this.state.movies].filter(movie => movie.Title.toUpperCase().trim().includes(searchText.toUpperCase().trim()))
        } else {
            displayedMovies = [...this.state.movies].filter(movie => movie.Title.includes(this.state.filter))
        }

        return (
            <div>
                <Filter handleChange={this.handleChange} />
                <SearchBar handleSearch={this.handleSearch} handleChange={this.handleChange} />
                <List displayedMovies={displayedMovies} />
            </div>
        )
    }
}

export default Container