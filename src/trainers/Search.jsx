const Search = ({ search, handleChange }) => (
  <>
    <label>Search: </label>
    <input placeholder="enter search here" value={search} onInput={handleChange} />
  </>
);

export default Search;
