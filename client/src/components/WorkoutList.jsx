import React from 'react';
import WorkoutItem from './WorkoutItem';

const WorkoutList = ({ exercises, onWorkoutDone }) => {
  const handleWorkoutDone = (workoutData) => {
    if (onWorkoutDone && typeof onWorkoutDone === 'function') {
      onWorkoutDone(workoutData);
    }
  };

  return (
    <div className="workout-list container mt-4">
      <h2 className="text-center">Workout List</h2>
      {exercises.map((exercise, index) => (
        <React.Fragment key={index}>
          <WorkoutItem exercise={exercise} onWorkoutDone={handleWorkoutDone} />
          <hr />
        </React.Fragment>
      ))}
      <button onClick={handleWorkoutDone} className="btn btn-primary mt-2">Workout Done</button>
    </div>
  );
};

export default WorkoutList;