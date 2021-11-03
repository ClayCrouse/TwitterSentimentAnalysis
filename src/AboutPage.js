import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const AboutPage = () => {
  return (
    <div class="card-panel">
      <h4>About</h4>
      <h6>
        Twitter Sentiment Analysis This web app performs sentiment analysis on
        Twitter. The two features are search and the overall sentiment chart.
      </h6>
      <br />
      <h4>Twitter Analyzer</h4>
      <h6>
        User can search for a phrase, and see a chart of the sentiment of the
        last 100 tweets with this phrase.
      </h6>
      <br />
      <h4>Overall Sentiment Chart</h4>
      <h6>
        Every hour, on the hour, the server queries for 1000 random tweets from
        the US. These are analyzed saved in a database A chart plots all the
        analyses from the last 7 days, to visualize trends in overall sentiment
        of Twitter in the US.
      </h6>
      <br />

      <h4>Tech Stack</h4>

      <h6>Front End:</h6>
      <div>React</div>
      <h6>react-router</h6>
      <h6>Materialize CSS</h6>
      <h6>Axios</h6>
      <h6>chart.js</h6>
      <h6>react-minimal-pie-chart"</h6>

      <br />

      <h6>Back End </h6>
      <div>Node.js</div>
      <div>Express</div>
      <div>Mongoose for MongoDB</div>
      <div>npm Sentiment for sentiment analysis</div>
      <div>npm Twitter - Javascript wrapper for Twitter API</div>
    </div>
  );
};

export default AboutPage;
