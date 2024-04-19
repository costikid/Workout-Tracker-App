import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm.jsx';
import WorkoutList from './components/WorkoutList.jsx';

const App = () => {
  //hold the list of exercises
  const [workoutList, setWorkoutList] = useState([]);

  //add exercise to the workout list
  const handleExerciseAdded = (newExercise) => {
    setWorkoutList([...workoutList, newExercise]);
  };

  return (
    <div>
      {}
      <ExerciseForm onExerciseAdded={handleExerciseAdded} />
      {}
      <WorkoutList exercises={workoutList} />
    </div>
  );
};

export default App;