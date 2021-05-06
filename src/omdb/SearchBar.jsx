const SearchBar = (props) => {
    const search = props.search;
    const setSearch = props.setSearch;
    const searchFilms = props.searchFilms;

    return (
        <>
            <label>Movie name:</label>
            <input value={search} onInput={event => setSearch(event.target.value)}/>
            <button onClick={searchFilms}>Search</button>
        </>
    )
}

export default SearchBar;