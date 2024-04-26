import GoalsItem from "./GoalsItem";

function GoalsList({list}) {

  return ( 
    <div id="list">
      {list.map((item, i) => <GoalsItem key={item._id} goal={item}></GoalsItem>)}
    </div>
   );
}

export default GoalsList;