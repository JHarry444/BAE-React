import axios from 'axios';
import { useState } from 'react';
import MovieContainer from './MovieContainer';
import SearchBar from './SearchBar';
import {apiKey} from './constants.json';

const OmdbExample = () => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
  
    const searchFilms = () => {
      axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        .then(({data}) => setMovies(data.Search))
        .catch(err => console.log(err));
    }

    return ( 
        <>
            <SearchBar search={search} setSearch={setSearch} searchFilms={searchFilms}/>
            <MovieContainer movies={movies}/>
        </>
     );
}
 
export default OmdbExample;