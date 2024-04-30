import React from "react";
import "./Goals.css";

//pass one goal only not an array
interface Props {
  goal: {
    title: string;
    notation: string;
  };
  header: string;
}

const GoalsItem: React.FC<Props> = ({ goal, header }) => {
  function prettifyDate(dateString: string): string {
    const date = new Date(dateString);
    const day = getOrdinalDate(date.getDate());
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }
  console.log(goal);

  return (
    <div id="header">
      <p id="next">{header}</p>
      <div className="info">
        <h2>{goal.title}</h2>
        <p>{goal.notation}</p>
      </div>
    </div>
  );
};

export default GoalsItem;

function getOrdinalDate(day: number): string {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}
