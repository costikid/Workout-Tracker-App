import React, { useState } from 'react';

const ExerciseForm = ({ onExerciseAdded }) => {
  const [formData, setFormData] = useState({
    exerciseType: '',
    name: '',
    sets: 0,
    reps: 0,
    restInterval: 0
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add exercise');
      }
      
      const newExercise = await response.json();
      onExerciseAdded(newExercise);
      setFormData({
        exerciseType: '',
        name: '',
        sets: 0,
        reps: 0,
        restInterval: 0
      });
      setError(null);
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
  
  return (
    <div id="form-container" style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
      <div id="form">
        <h3>Add Exercise</h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <p>Exercise Type</p>
          <input className="exerciseType" name="exerciseType" type="text" value={formData.exerciseType} onChange={handleChange} placeholder="Insert a title..." />
          <p>Name</p>
          <input className="text-input" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Insert a venue..." />
          <p>Sets</p>
          <input className="text-input" name="sets" type="number" value={formData.sets} onChange={handleChange} />
          <p>Reps</p>
          <input className="text-input" name="reps" type="number" value={formData.reps} onChange={handleChange} />
          <p>Rest Interval</p>
          <input className="text-input" name="restInterval" type="number" value={formData.restInterval} onChange={handleChange} />
          <button className="button-input" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default ExerciseForm;