import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import SearchButton from "./components/SearchButton";

const SearchBar = ({ handleSubmit }) => {
  return (
    <div class="row" method="post" onSubmit={handleSubmit}>
      <form class="col s4">
        <div class="row">
          <div class="input-field col s12">
            <textarea
              placeholder="Enter a phrase..."
              name="searchBar"
              id="searchBar"
              class="materialize-textarea"
            ></textarea>
            <SearchButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
