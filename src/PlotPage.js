import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "./components/Plot";
import "./styles.css";

const PlotPage = () => {
  const [plotX, setPlotX] = useState([]);
  const [plotY, setPlotY] = useState([]);

  const handlePlotRequest = () => {
    axios
      .get("/chart/data")
      .then((result) => {
        let dates = [];
        let vals = [];
        result.data.forEach((info) => {
          //dates.push(new Date(info.date).toDateString());
          dates.push(info.date)
          vals.push(info.score);
        });
        setPlotX(dates);
        setPlotY(vals);
      })
      .catch((error) => console.log("error"));
  };

  // Call handlePlotRequest only once
  useEffect(() => {
    handlePlotRequest();
  }, []);

  return (
    <div>
      <h1 className="PlotTitle">Overall US Sentiment Over Last 5 Days</h1>
      <Plot plotX={plotX} plotY={plotY} />
    </div>
  );
};

export default PlotPage;
