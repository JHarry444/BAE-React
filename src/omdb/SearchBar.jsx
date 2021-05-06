const SearchBar = ( {search, setSearch, searchFilms} ) => {
    return (
        <>
            <label>Movie name:</label>
            <input value={search} onInput={event => setSearch(event.target.value)}/>
            <button onClick={searchFilms}>Search</button>
        </>
    )
}

export default SearchBar;