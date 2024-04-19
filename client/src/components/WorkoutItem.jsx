import React from 'react';

const WorkoutItem = ({ exercise }) => {
  return (
    <div className="workout-item">
      <h4>{exercise.name}</h4>
      <p>Exercise Type: {exercise.exerciseType}</p>
      <p>Sets: {exercise.sets}</p>
      <p>Reps: {exercise.reps}</p>
      <p>Rest Interval: {exercise.restInterval}</p>
    </div>
  );
};

export default WorkoutItem;