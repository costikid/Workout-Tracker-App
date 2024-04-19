import React, { useState } from 'react';

const ExerciseForm = ({ onExerciseAdded }) => {
  const [formData, setFormData] = useState({
    muscle: '',
    type: '',
    difficulty: '',
    exercises: [],
  });
  const [error, setError] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [workoutInProgress, setWorkoutInProgress] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${formData.muscle}&type=${formData.type}&difficulty=${formData.difficulty}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'Dic2lIcXCQ5ed/PRyq0tzA==PhgqpUUIfpj9H2a0'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch exercises');
      }
      
      const data = await response.json();
      setExercises(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setError('Failed to fetch exercises. Please try again.');
    }
  };

  const handleAddExercise = async (exercise) => {
    try {
      onExerciseAdded(exercise);
  
      const updatedExercises = [...formData.exercises, { ...exercise, sets: [] }];
      setFormData({ ...formData, exercises: updatedExercises });

      const response = await fetch('http://localhost:3000/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(exercise)
      });
      if (!response.ok) {
        throw new Error('Failed to add exercise');
      }
      
      const newExercise = await response.json();
    } catch (error) {
      console.error('Error adding exercise:', error);
      setError('Failed to add exercise. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const muscleGroupOptions = ['Abdominals', 'Abductors', 'Biceps', 'Calves', 'Lats'];
  const exerciseTypeOptions = ['Strength'];
  const difficultyOptions = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Find Exercises</h3>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="muscle" className="visually-hidden">Muscle Group</label>
              <select id="muscle" className="form-select" name="muscle" value={formData.muscle} onChange={handleChange}>
                <option value="">Muscle Group</option>
                {muscleGroupOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <label htmlFor="type" className="visually-hidden">Exercise Type</label>
              <select id="type" className="form-select" name="type" value={formData.type} onChange={handleChange}>
                <option value="">Exercise Type</option>
                {exerciseTypeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <label htmlFor="difficulty" className="visually-hidden">Difficulty Level</label>
              <select id="difficulty" className="form-select" name="difficulty" value={formData.difficulty} onChange={handleChange}>
                <option value="">Difficulty Level</option>
                {difficultyOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
      {exercises.length > 0 && (
        <div className="mt-4">
          <h4>Found Exercises:</h4>
          <ul className="list-group">
            {exercises.map((exercise, index) => (
              <li key={index} className="list-group-item">
                <h5>{exercise.name}</h5>
                <p>Type: {exercise.type}</p>
                <p>Muscle: {exercise.muscle}</p>
                <p>Difficulty: {exercise.difficulty}</p>
                <p>Instructions: {exercise.instructions}</p>
                <button onClick={() => handleAddExercise(exercise)} className="btn btn-primary">Add Exercise</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExerciseForm;