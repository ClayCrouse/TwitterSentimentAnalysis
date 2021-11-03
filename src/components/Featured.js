import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

M.AutoInit();

const Featured = ({ maxPos, maxNeg }) => {
  return (
    <div>
      <Collapsible>
        <CollapsibleItem
          expanded={false}
          header="Most Positive Tweet"
          icon={<Icon>sentiment_very_satisfied</Icon>}
          node="div"
        >
          {maxPos}
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Most Negative Tweet"
          icon={<Icon>sentiment_very_dissatisfied</Icon>}
          node="div"
        >
          {maxNeg}
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
};

export default Featured;
