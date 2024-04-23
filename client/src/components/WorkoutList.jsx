import React, { useState } from 'react';
import WorkoutItem from './WorkoutItem';
import '../App.css';

const WorkoutList = ({ exercises, onWorkoutDone }) => {
  const [workoutData, setWorkoutData] = useState({});

  const handleWorkoutDone = async () => {
    try {
      // const workoutData = {};
      // sets.forEach(exercise => {
      //   if (exercise.sets && Array.isArray(exercise.sets) && exercise.sets.length > 0) {
      //     const isValidSets = exercise.sets.every(set => (
      //       typeof set === 'object' && 'sets' in set && 'reps' in set && 'weight' in set
      //     ));
      //     if (isValidSets) {
      //       workoutData[exercise._id] = exercise.sets;
      //     }
      //   }
      // });
      // console.log(sets);
      console.log('Workout Data:', workoutData);
  
      const response = await fetch('http://localhost:3000/exercises/workoutDone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workoutData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error marking workout as done:', error);
    }
  };
  
  return (
    <div className="section-header">
      <h2 className="text-center">Workout List</h2>
      {exercises.length > 0 ? (
        <>
          {exercises.map((exercise, index) => (
            <React.Fragment key={exercise._id}>
              <WorkoutItem key={exercise._id} exercise={exercise} setWorkoutData={setWorkoutData} />
              <hr className="my-4" style={{ borderColor: '#FFD700' }} />
            </React.Fragment>
          ))}
          <div className="d-grid gap-2">
            <button onClick={handleWorkoutDone} className="btn btn-custom mt-2">Workout Done</button>
          </div>
        </>
      ) : (
        <div className="empty-workout-message text-center">
          No exercises added yet. Get moving and add some!
        </div>
      )}
    </div>
  );
};

export default WorkoutList;