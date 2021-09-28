import React, { Component } from 'react';
import axios from 'axios';
import MovieItem from '../movieItem/movieItem';

class MovieList extends Component {
    state = {
        movies : []
    }

    async fetchData() {
        const {data : {data : {movies} }} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
        this.setState({movies})
    }

    componentDidMount = () => {
        this.fetchData();
    }

    render() {
        const {movies} = this.state;
        return (
            <div>
                <h1>Movie List</h1>
                {
                    movies.map(item => <MovieItem data={item}/>)
                }
            </div>
        );
    }
}

export default MovieList;