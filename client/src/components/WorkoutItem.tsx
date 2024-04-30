import React, { useState, useEffect } from 'react';
import Timer from './Timer';


interface Exercise {
  _id: string;
  name: string;
  type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
}

interface ExerciseSet {
  weight: string;
  reps: string;
}

interface LiftHistory {
  sets: number;
  reps: number;
  weight: number;
}

interface Props {
  exercise: Exercise;
  setWorkoutData: Function;
}

const WorkoutItem: React.FC<Props> = ({ exercise, setWorkoutData }) => {
  const [sets, setSets] = useState<ExerciseSet[]>([]);
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(-1);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timerDuration, setTimerDuration] = useState<number>(60);
  const [liftHistory, setLiftHistory] = useState<LiftHistory | null>(null);
  const [showWorkoutHistory, setShowWorkoutHistory] = useState<boolean>(false);

  useEffect(() => {
    if (exercise && sets.length) {
      setWorkoutData((data: any) => {
        const updatedData = { ...data };
        updatedData[String(exercise._id)] = sets;
        return updatedData;
      });
    }
  }, [exercise, sets, setWorkoutData]);

  useEffect(() => {
    const fetchLiftHistory = async () => {
      try {
        const response = await fetch(`http://localhost:3000/exercises/${exercise._id}/lift-history`);
        if (!response.ok) {
          throw new Error('Failed to fetch lift history');
        }
        const data = await response.json();
        setLiftHistory(data.data);
      } catch (error) {
        console.error('Error fetching lift history:', error);
      }
    };

    fetchLiftHistory();
  }, [exercise._id]);

  const handleAddSet = () => {
    const newSet: ExerciseSet = { weight: '', reps: '' };
    setSets([...sets, newSet]);
    setCurrentSetIndex(sets.length);
    setTimerStarted(false);
  };

  const handleWeightChange = (index: number, value: string) => {
    const updatedSets = [...sets];
    updatedSets[index].weight = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].reps !== '') {
      setTimerStarted(true);
    }
  };

  const handleRepsChange = (index: number, value: string) => {
    const updatedSets = [...sets];
    updatedSets[index].reps = value;
    setSets(updatedSets);
    if (value !== '' && sets[index].weight !== '') {
      setTimerStarted(true);
    }
  };

  const handleTimerDurationChange = (value: string) => {
    setTimerDuration(parseInt(value));
    setTimerStarted(false);
  };

  useEffect(() => {
    // send exercise data back to workoutlist
    setWorkoutData((prevData: any) => ({ ...prevData, [exercise._id]: sets }));
  }, [sets, exercise, setWorkoutData]);

  return (
    <div className="workout-item card card-custom mb-3">
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
                <div style={{ textAlign: 'center' }}>
                  <Timer seconds={timerDuration} onComplete={() => console.log('Timer completed')} />
                  <select value={timerDuration} onChange={(e) => handleTimerDurationChange(e.target.value)}>
                    <option value="60">60 seconds</option>
                    <option value="90">90 seconds</option>
                  </select>
                </div>
              )}
            </div>
          ))}
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-custom" onClick={handleAddSet}>
              Add Set
            </button>
            {/* display lift history button if lift history is available */}
            {liftHistory && (
              <button className="btn btn-custom" onClick={() => setShowWorkoutHistory(!showWorkoutHistory)}>
                {showWorkoutHistory ? 'Hide Lift History' : 'View Lift History'}
              </button>
            )}
          </div>
          {/* display lift history details if available and showWorkoutHistory is true */}
          {liftHistory && showWorkoutHistory && (
            <div className="lift-history-details">
              <p>Last Lift:</p>
              <p>Sets: {liftHistory.sets}</p>
              <p>Reps: {liftHistory.reps}</p>
              <p>Weight: {liftHistory.weight}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
