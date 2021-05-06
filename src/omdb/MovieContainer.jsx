import Movie from "./Movie";

const MovieContainer = (props) => {
    // array of JS objects
    const movies = props.movies;

    // array of JSX components
    const moviesAsJSX = [];

    movies.forEach(movie => {
        const movieComponent = <Movie title={movie.Title} poster={movie.Poster} year={movie.Year}/>;
        moviesAsJSX.push(movieComponent);
    });

    return (
        <>
        <br/>
            {moviesAsJSX}
        </>
    );
}

export default MovieContainer;