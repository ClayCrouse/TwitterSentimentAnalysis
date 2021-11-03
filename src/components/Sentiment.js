import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Sentiment = ({ score, query }) => {
  if (query === '') {
    return (
      <div className="Sentiment">
        <div class="card-panel white-text light-blue darken-1">
          Enter a phrase to get sentiment
        </div>
      </div>
    );
  }
  else if (score >= 40 && score <= 60) {
        return (
          <div className="Sentiment">
            <div class="card-panel yellow lighten-2">
              Twitter currently has a neutral sentiment about {query}
            </div>
          </div>
        );
  }
  else if (score > 50) {
    return (
      <div className="Sentiment">
        <div class="card-panel white-text green darken-2">
          Twitter currently has a positive sentiment about {query}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Sentiment">
        <div class="card-panel white-text red">
          Twitter currently has a negative sentiment about {query}
        </div>
      </div>
    );
  }
};

export default Sentiment;
