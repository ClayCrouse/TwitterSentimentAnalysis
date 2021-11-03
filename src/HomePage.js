import M from "materialize-css";
import React, { useState } from "react";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import Piechart from "./components/Piechart";
import Results from "./components/Results";
import SearchButton from "./components/SearchButton";
import "./styles.css";

const HomePage = () => {
  const [score, setScore] = useState(50);
  const [maxPos, setMaxPos] = useState("");
  const [maxNeg, setMaxNeg] = useState("");
  const [query, setQuery] = useState("");

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    let queryParams = {
      query: document.getElementById("searchBar").value,
    };
    axios
      .post("http://localhost:8000/query", queryParams)
      .then((result) => {
        console.log(result.data);
        setScore(result.data.score);
        setMaxPos(result.data.maxPosTweet);
        setMaxNeg(result.data.maxNegTweet);
        setQuery(queryParams.query);
      })
      .catch((error) => console.log("error"));
  };

  M.AutoInit();

  return (
    <div>
      <div class="row" method="post" onSubmit={handleQuerySubmit}>
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

      <div className="Piechart">
        <Piechart score={score} />
      </div>

      <Results score={score} query={query} maxPos={maxPos} maxNeg={maxNeg} />
    </div>
  );
};

export default HomePage;
