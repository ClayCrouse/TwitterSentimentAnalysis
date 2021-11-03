import React from "react";
import { Row, Col } from "react-materialize";
import Featured from "./Featured";
import Sentiment from "./Sentiment";

const Results = ({ score, query, maxPos, maxNeg }) => {
  return (
    <div>
      <Col className="Info">
        <Row>
          <Sentiment score={score} query={query} />
        </Row>
        <Row>
          <Featured maxPos={maxPos} maxNeg={maxNeg} />
        </Row>
      </Col>
    </div>
  );
};

export default Results;
