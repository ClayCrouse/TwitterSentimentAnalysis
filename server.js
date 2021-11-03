require("dotenv").config();
const path = require("path")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Twitter = require("twitter");
const Sentiment = require("sentiment");
const ScoreData = require("./src/models/scoreData");

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const TWEETCOUNT = 100;
const STREAMTWEETCOUNT = 1000;

const app = express();

app.use(require("body-parser").json());
app.use(cors()); // Used to send data between ports

// Connect to mongoDB
const dbURI = process.env.ATLAS_URI;
const connectDB = async () => {
  const result = await mongoose.connect(dbURI);
  if (result) {
    console.log("Connected to mongoDB");
  } else console.log("Error connection to db");
};
connectDB();

// Save data to db
const pushDB = async (data) => {
  const result = await data.save();
};

const getRandom = () => {
  const searchLocation = {
    // rough longitude latitude range of mainland US
    locations: "-161.75583,-68.01197,25.50139,48.85694",
  };

  let tweetsPulled = 0;
  let totalPosScore = 0;
  let totalNegScore = 0;
  client.stream("statuses/filter", searchLocation, (stream) => {
    stream.on("data", (tweet) => {
      let tweetBody = tweet.text;
      const retweetCount = tweet.retweet_count;
      const tweetAnalysis = analyseTweet(tweetBody, retweetCount);

      tweetBody = tweetAnalysis.tweetBody;
      const score = tweetAnalysis.score;

      if (score > 0) totalPosScore += score;
      else totalNegScore += score;

      tweetsPulled++;

      if (tweetsPulled >= STREAMTWEETCOUNT) {
        totalScore = Math.round(
          (totalPosScore / (totalPosScore + totalNegScore * -1)) * 100
        );

        const randomScore = new ScoreData({
          score: totalScore,
          date: new Date(),
        });
        console.log(randomScore);
        pushDB(randomScore);
        stream.destroy();
      }
    });
    stream.on("error", (error) => {});
  });
};

// Calls random at start of every hour
const callRandom = () => {
  const currDate = new Date();
  const minute = currDate.getMinutes();
  if (minute == 0) {
    getRandom();
  }
};

// Check if new hour every minute
const callEveryHour = () => {
  setInterval(() => callRandom(), 1000 * 60);
};
callEveryHour();

const analyseTweet = (tweetBody, retweetCount) => {
  // Remove all links, @'s, RT
  const cleanTweet = tweetBody.replace(/(http(\S+))*(^RT(\s*))*/g, ""); // Tweet w/out links or RT
  tweetBody = tweetBody.replace(/(http(\S+))*(@(\S+))*(^RT(\s*))*/g, "").trim();

  // Score is wighted sum of all tweets
  var sentiment = new Sentiment();
  const rawScore = Math.ceil(sentiment.analyze(tweetBody).score);
  const score = rawScore * (retweetCount + 1);

  // Send total score to the frontend
  const tweetAnalysis = {
    rawScore: rawScore,
    score: score,
    tweetBody: cleanTweet,
  };
  return tweetAnalysis;
};

app.post("/query", (req, res) => {
  const query = req.body.query;
  console.log("Query: ".concat(query));

  // parameters for twitter api query
  const searchParams = {
    q: query,
    lang: "en",
    count: TWEETCOUNT,
    tweet_mode: "extended",
  };

  client.get("search/tweets", searchParams, (error, tweets, response) => {
    let totalPosScore = 0;
    let totalNegScore = 0;
    let maxNeg = 10000;
    let maxNegTweet;
    let maxPos = -10000;
    let maxPosTweet;

    for (let k in tweets.statuses) {
      let tweetBody = tweets.statuses[k].full_text; // Body of tweet
      const retweetCount = tweets.statuses[k].retweet_count;

      const tweetAnalysis = analyseTweet(tweetBody, retweetCount);
      const rawScore = tweetAnalysis.rawScore;
      const score = tweetAnalysis.score;
      tweetBody = tweetAnalysis.tweetBody;

      if (score > 0) totalPosScore += score;
      else totalNegScore += score;

      if (rawScore > maxPos) {
        maxPos = rawScore;
        maxPosTweet = tweetBody;
      }

      if (rawScore < maxNeg) {
        maxNeg = rawScore;
        maxNegTweet = tweetBody;
      }
    }

    totalScore = Math.round(
      (totalPosScore / (totalPosScore + totalNegScore * -1)) * 100
    );

    console.log("totalScore: ".concat(totalScore).concat("%"));

    // Send total score to the frontend
    const dataResponse = {
      score: totalScore,
      maxPosTweet: maxPosTweet,
      maxNegTweet: maxNegTweet,
    };

    res.json(dataResponse);
  });
});

app.get("/chart/data", (req, res) => {
  ScoreData.find({}, (err, entries) => {
    res.send(entries);
  });
});

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port);
