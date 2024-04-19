import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ exercises }) => {
  return (
    <div className="workout-list container mt-4"> {}
      <h2 className="text-center">Workout List</h2> {}
      {exercises.map((exercise, index) => (
        <React.Fragment key={index}>
          <WorkoutItem exercise={exercise} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkoutList;