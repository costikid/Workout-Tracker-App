import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Workouts from './pages/Workouts.jsx';
import WorkoutList from './components/WorkoutList.jsx';
import './App.css';

const App = () => {
  const [workoutList, setWorkoutList] = useState([]);

  const handleExerciseAdded = (newExercise) => {
    setWorkoutList([...workoutList, newExercise]);
  };

  return (
    <Router>
      <div>
        {/* My navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Workout Hub</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Find Exercises</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workoutlist">Workout List</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <i className="fas fa-user-circle"></i> My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* My main content */}
        <div className="container main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts onExerciseAdded={handleExerciseAdded} />} />
            <Route path="/workoutlist" element={<WorkoutList exercises={workoutList} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;