const Search = (props) => {
    return (
        <>
            <label>Search: </label> 
            <input placeholder="enter search here" value={props.search} onInput={props.handleChange}/>
        </>
    );
}

export default Search;