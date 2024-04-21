import React from 'react';
import WorkoutItem from './WorkoutItem';
import '../App.css';

const WorkoutList = ({ exercises, onWorkoutDone }) => {
  const handleWorkoutDone = (workoutData) => {
    if (onWorkoutDone && typeof onWorkoutDone === 'function') {
      onWorkoutDone(workoutData);
    }
  };

  return (
    <div className="section-header">
      <h2 className="text-center">Workout List</h2>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <React.Fragment key={exercise.id ? exercise.id : index}>
            <WorkoutItem exercise={exercise} onWorkoutDone={handleWorkoutDone} />
            <hr className="my-4" style={{ borderColor: '#FFD700' }} />
          </React.Fragment>
        ))
      ) : (
        <div className="empty-workout-message text-center">
          No exercises added yet. Get moving and add some!
        </div>
      )}
      <div className="d-grid gap-2">
        <button onClick={() => handleWorkoutDone(null)} className="btn btn-custom mt-2">Workout Done</button>
      </div>
    </div>
  );
};

export default WorkoutList;