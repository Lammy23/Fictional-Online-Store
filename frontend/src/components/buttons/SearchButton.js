import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchButton() {
  return (
    <div className="row">
      <input
        type="search"
        placeholder="Search"
        className="outline-button"
        id="search-button"
      />
      <div style={{ width: "15px" }}></div>
      <div className="icon-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default SearchButton;
