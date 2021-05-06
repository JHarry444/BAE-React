const Movie = ({title, poster, year}) => {

    return (
        <>
            <h1>{title}</h1>
            <img src={poster} alt="poster"/>
            <p> Year: {year}</p>
        </>
    )
}

export default Movie;