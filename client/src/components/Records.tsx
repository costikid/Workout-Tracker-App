import React, { useState } from "react";
import "../App.css";
import "./Goals.css";
import RecordsForm from "./RecordsForm";
import RecordsList from "./RecordsList";

const Records = () => {
  const [records, setRecords] = useState([]);
  console.log(records);

  
  return (
    <>
      <div className="section-header">
        <h1>Here your Records</h1>
        <p className="section-description">Set your new Records !</p>
      </div>

      <div className="wrapper">
        <div className="list">
          <RecordsList list={records} />
        </div>
        <div className="form">
          <RecordsForm setRecords={setRecords} />
        </div>
      </div>
    </>
)

  //   <div className="section-header">
  //   <h1>Here your Records</h1>
  //   <p className="section-description">
  //     Set your new Records ! 
  //   </p>
  // </div>
}
export default Records;

