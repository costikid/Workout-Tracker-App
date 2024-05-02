import React from "react";
import "./Goals.css";
import crown from "../images/crown.png"
//pass one goal only not an array
interface Props {
  record: {
    title: string;
    notation: string;
  };

}

const RecordsItem: React.FC<Props> = ({ record }) => {
  function prettifyDate(dateString: string): string {
    const date = new Date(dateString);
    const day = getOrdinalDate(date.getDate());
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }
  console.log(record);

  return (
    <div className="info-wrapper">

      <div className="info">
        <div className="crown">
            <img src= {crown}/>
        </div>
        <h2 className="title">{record.title}</h2>
        <p className="notation">{record.notation}</p>
      </div>
    </div>
    
  );
};

export default RecordsItem;

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
