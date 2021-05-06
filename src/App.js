import axios from 'axios';
import { useState } from 'react';
import './App.css';
import MovieContainer from './omdb/MovieContainer';

function App() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchFilms = () => {
    axios.get("http://www.omdbapi.com/?apikey=335035be&s=" + search)
      .then(res => setMovies(res.data.Search))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <>
        <label>Movie name:</label>
        <input value={search} onInput={event => setSearch(event.target.value)}/>
        <button onClick={searchFilms}>Search</button>
      </>
      <MovieContainer movies={movies}/>
    </div>
  );
}

export default App;
