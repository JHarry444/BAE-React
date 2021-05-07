const Movie = ({ title, poster, year }) => (
  <>
    <h1>{title}</h1>
    <img src={poster} alt="poster" />
    <p>
      {' '}
      Year:
      {year}
    </p>
  </>
);

export default Movie;
