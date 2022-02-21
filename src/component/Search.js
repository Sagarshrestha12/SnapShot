import search from "../search.svg";
import "./Search.css";
import { useRef } from "react";

function Search({ findImage }) {
  const inputRefs = useRef(null);

  const handleSearchBtn = (event) => {
    event.preventDefault();
    findImage(inputRefs.current.value.toLocaleLowerCase());
    inputRefs.current.value = "";
  };

  return (
    <form onSubmit={handleSearchBtn} className="search-field  clearfix">
      <label> </label>
      <input type="text" placeholder="Search" ref={inputRefs} required></input>
      <button type="submit">
        <img src={search} alt="search-icon"></img>
      </button>
    </form>
  );
}

export default Search;
