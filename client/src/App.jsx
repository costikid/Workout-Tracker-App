import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm.jsx';
import WorkoutList from './components/WorkoutList.jsx';

const App = () => {
  const [exercises, setExercises] = useState([]);

  const handleExerciseAdded = (newExercise) => {
    setExercises([...exercises, newExercise]);
  };

  return (
    <div className="app">
      <ExerciseForm onExerciseAdded={handleExerciseAdded} />
      <WorkoutList exercises={exercises} />
    </div>
  );
};

export default App;