import React, { useState } from 'react';
import ExerciseForm from './components/ExerciseForm.jsx';
import WorkoutList from './components/WorkoutList.jsx';
import './App.css';

const App = () => {
  //hold the list of exercises
  const [workoutList, setWorkoutList] = useState([]);

  //add exercise to the workout list
  const handleExerciseAdded = (newExercise) => {
    setWorkoutList([...workoutList, newExercise]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Workout Hub
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#find-exercises">Find Exercises</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#workout-list">Workout List</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="main-content">
        <ExerciseForm onExerciseAdded={handleExerciseAdded} />
        {workoutList.length > 0 && <WorkoutList exercises={workoutList} />} {}
      </div>
    </div>
  );
};

export default App;