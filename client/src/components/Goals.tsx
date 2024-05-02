import React, { useState } from "react";
import "../App.css";
import "./Goals.css";
import GoalsForm from "./GoalsForm";
import GoalsList from "./GoalsList";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  console.log(goals);
  return (
    <>
      <div className="section-header">
        <h1>Follow your goals</h1>
        <p className="section-description">Never give up. Just catch it!</p>
      </div>

      <div className="wrapper">
        <div className="list">
          <GoalsList list={goals} />
        </div>
        <div className="form">
          <GoalsForm setGoals={setGoals} />
        </div>
      </div>
    </>
  );
};

export default Goals;
