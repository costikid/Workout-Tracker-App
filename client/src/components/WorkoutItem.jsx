import React, { useState } from 'react';
import Timer from './Timer';

const WorkoutItem = ({ exercise }) => {
  const [sets, setSets] = useState([]);
  const [currentSetIndex, setCurrentSetIndex] = useState(-1);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60);

  const handleAddSet = () => {
    const newSet = { weight: '', reps: '' };
    setSets([...sets, newSet]);
    setCurrentSetIndex(sets.length);
    setTimerStarted(false);
  };

  const handleWeightChange = (index, value) => {
    const updatedSets = [...sets];
    updatedSets[index].weight = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].reps !== '') {
      setTimerStarted(true);
    }
  };

  const handleRepsChange = (index, value) => {
    const updatedSets = [...sets];
    updatedSets[index].reps = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].weight !== '') {
      setTimerStarted(true);
    }
  };

  const handleTimerDurationChange = (e) => {
    setTimerDuration(parseInt(e.target.value));
    setTimerStarted(false);
  };

  return (
    <div className="workout-item card mb-3">
      <div className="card-body">
        <h5 className="card-title">{exercise.name}</h5>
        <p className="card-text">Type: {exercise.type}</p>
        <p className="card-text">Muscle: {exercise.muscle}</p>
        <p className="card-text">Difficulty: {exercise.difficulty}</p>
        <p className="card-text">Instructions: {exercise.instructions}</p>
        <div className="set-tracking">
          {sets.map((set, index) => (
            <div key={index}>
              <p>Set {index + 1}</p>
              <input
                type="text"
                value={set.weight}
                onChange={(e) => handleWeightChange(index, e.target.value)}
                placeholder="Weight"
              />
              <input
                type="text"
                value={set.reps}
                onChange={(e) => handleRepsChange(index, e.target.value)}
                placeholder="Reps"
              />
              {index === currentSetIndex && timerStarted && (
                <div>
                  <Timer seconds={timerDuration} onComplete={() => console.log('Timer completed')} />
                  <select value={timerDuration} onChange={handleTimerDurationChange}>
                    <option value={60}>60 seconds</option>
                    <option value={90}>90 seconds</option>
                  </select>
                </div>
              )}
            </div>
          ))}
          <button className="btn btn-primary" onClick={handleAddSet}>Add Set</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;