import search from "../search.svg";
import "./Search.css";
import { useState } from "react";

function Search({ findImage }) {
  let [inputText, changeInputText] = useState("");

  const handleInputText = (event) => {
    changeInputText(event.target.value);
  };

  const handleSearchBtn = (event) => {
    event.preventDefault();
    findImage(inputText.toLocaleLowerCase());
    changeInputText("");
  };

  return (
    <form onSubmit={handleSearchBtn} className="search-field  clearfix">
      <label> </label>
      <input
        type="text"
        value={inputText}
        placeholder="Search"
        onChange={handleInputText}
        required
      ></input>
      <button type="submit">
        <img src={search} alt="search-icon"></img>
      </button>
    </form>
  );
}

export default Search;
