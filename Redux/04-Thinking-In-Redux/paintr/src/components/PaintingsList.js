import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          key={painting.id}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

export default PaintingsList;
