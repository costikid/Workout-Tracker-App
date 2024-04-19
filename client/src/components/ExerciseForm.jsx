import React, { useState } from 'react';
import Timer from './Timer'; 

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
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1); //currently selected exercise (i am repeating it, will double check)

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
      setExercises(data); //update the exercises state with the fetched data
      setError(null);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setError('Failed to fetch exercises. Please try again.');
    }
  };

  const handleAddExercise = async (exercise) => {
    try {
      //Add exercise locally for immediate display
      onExerciseAdded(exercise);
  
      //Add exercise along with its set tracking to the workout list
      const updatedExercises = [...formData.exercises, { ...exercise, sets: [] }];
      setFormData({ ...formData, exercises: updatedExercises });

      //POST request to the backend to store the exercise
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
      
      //handle response from the backend
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

  //i am trying this manually first
  const muscleGroupOptions = ['Abdominals', 'Abductors', 'Biceps', 'Calves', 'Lats'];
  const exerciseTypeOptions = ['Strength'];
  const difficultyOptions = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div id="form-container" style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
      <div id="form">
        <h3>Find Exercises</h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <p>Muscle Group</p>
          <select className="text-input" name="muscle" value={formData.muscle} onChange={handleChange}>
            {muscleGroupOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <p>Exercise Type</p>
          <select className="text-input" name="type" value={formData.type} onChange={handleChange}>
            {exerciseTypeOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <p>Difficulty Level</p>
          <select className="text-input" name="difficulty" value={formData.difficulty} onChange={handleChange}>
            {difficultyOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <button className="button-input" type="submit">Search</button>
        </form>
        {exercises.length > 0 && (
          <div>
            <h4>Found Exercises:</h4>
            <ul>
              {exercises.map((exercise, index) => (
                <li key={index} onClick={() => setCurrentExerciseIndex(index)}>
                  <h5>{exercise.name}</h5>
                  <p>Type: {exercise.type}</p>
                  <p>Muscle: {exercise.muscle}</p>
                  <p>Difficulty: {exercise.difficulty}</p>
                  <p>Instructions: {exercise.instructions}</p>
                  <button onClick={() => handleAddExercise(exercise)}>Add Exercise</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {workoutInProgress && <Timer seconds={60} />}
    </div>
  );
};

export default ExerciseForm;