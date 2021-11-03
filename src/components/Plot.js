import React from "react";
import { Line } from "react-chartjs-2";

const Plot = ({ plotX, plotY }) => {
  const plotData = {
    labels: plotX,
    datasets: [
      {
        label: "Sentiment Score",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: plotY,
      },
    ],
  };

  return (
    <div>
      <Line
        data={plotData}
        options={{
          title: {
            display: true,
            text: "Overall Twitter Sentiment (Past 5 Days)",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default Plot;
