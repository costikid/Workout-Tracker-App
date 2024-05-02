import React from "react";
import RecordsItem from "./RecordsItem";

function RecordsList({ list }) {
  return (
    <div className="list">
      {list.map((item, i) => (
        <RecordsItem key={item._id} record={item}></RecordsItem>
      ))}
    </div>
  );
}

export default RecordsList;
