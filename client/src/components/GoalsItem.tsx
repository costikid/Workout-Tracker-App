import React from "react";

interface Props {
  goal: {
    date: string;
    event: string;
    location: string;
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

  return (
    <div id="header">
      <p id="next">{header}</p>
      <div id="event-date">{goal.event}</div>
      <div className="info">
        <h2>{goal.event}</h2>
        <p>{prettifyDate(goal.date)}</p>
        <p>{goal.location}</p>
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
