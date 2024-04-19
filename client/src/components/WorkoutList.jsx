import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ exercises }) => {
  return (
    <div className="workout-list">
      <h2>Workout List</h2>
      {exercises.map((exercise, index) => (
        <WorkoutItem key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default WorkoutList;