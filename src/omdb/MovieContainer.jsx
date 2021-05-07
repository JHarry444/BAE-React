import Movie from './Movie';

const MovieContainer = ({ movies }) => {
  // array of JSX components
  const moviesAsJSX = movies.map((movie) => <Movie title={movie.Title} poster={movie.Poster} year={movie.Year} />);

  return (
    <>
      <br />
      {moviesAsJSX}
    </>
  );
};

export default MovieContainer;
