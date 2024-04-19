import React, { useState } from 'react';
import Timer from './Timer';

const WorkoutItem = ({ exercise }) => {
  const [sets, setSets] = useState([]);
  const [timerDuration, setTimerDuration] = useState(60); //default timer duration
  const [currentSetIndex, setCurrentSetIndex] = useState(-1); //currently selected set
  const [timerStarted, setTimerStarted] = useState(false); //indicates if the timer has started for the current set

  const handleAddSet = () => {
    const newSet = { weight: '', reps: '' };
    setSets([...sets, newSet]);
    setCurrentSetIndex(sets.length); //set the current set index to the newly added set
    setTimerStarted(false); //reset the timer started state when adding a new set
  };

  const handleWeightChange = (index, value) => {
    const updatedSets = [...sets];
    updatedSets[index].weight = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].reps !== '') {
      setTimerStarted(true); //start the timer when weight and reps are entered
    }
  };

  const handleRepsChange = (index, value) => {
    const updatedSets = [...sets];
    updatedSets[index].reps = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].weight !== '') {
      setTimerStarted(true); //start the timer when weight and reps are entered
    }
  };

  const handleTimerDurationChange = (e) => {
    setTimerDuration(parseInt(e.target.value));
    setTimerStarted(false); //restart the timer when changing the timer duration
  };

  return (
    <div className="workout-item">
      <h4>{exercise.name}</h4>
      <p>Type: {exercise.type}</p>
      <p>Muscle: {exercise.muscle}</p>
      <p>Difficulty: {exercise.difficulty}</p>
      <p>Instructions: {exercise.instructions}</p>
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
                <Timer seconds={timerDuration} />
                <select value={timerDuration} onChange={handleTimerDurationChange}>
                  <option value={60}>60 seconds</option>
                  <option value={90}>90 seconds</option>
                </select>
              </div>
            )}
          </div>
        ))}
        <button onClick={handleAddSet}>Add Set</button>
      </div>
    </div>
  );
};

export default WorkoutItem;