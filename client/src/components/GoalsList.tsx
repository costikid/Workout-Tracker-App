import React from "react";
import GoalsItem from "./GoalsItem";

function GoalsList({list}) {

  return ( 
    <div id="list">
      {list.map((item, i, goal) => <GoalsItem key={item._id} goal={goal} header={""}></GoalsItem>)}
    </div>
   );
}

export default GoalsList;