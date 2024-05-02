import React from "react";
import GoalsItem from "./GoalsItem";

function GoalsList({ list }) {
  return (
    <div className="list">
      {list.map((item, i) => (
        <GoalsItem key={item._id} goal={item}></GoalsItem>
      ))}
    </div>
  );
}

export default GoalsList;
