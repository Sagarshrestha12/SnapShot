import search from "../search.svg";
import "./Search.css";

function Search() {
  return (
    <div className="search-field">
      <label> </label>
      <input value="" type="text" placeholder="Search" required></input>

      <button type="submit">
        <img src={search} alt="search-icon"></img>
      </button>
    </div>
  );
}

export default Search;
