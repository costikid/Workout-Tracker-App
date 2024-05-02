import React, { useState } from "react";
import "../App.css";
import { fetchExercises, addExercise } from "../services/exerciseService";

export interface Exercise {
  _id: string;
  name: string;
  type: string;
  muscle: string;
  difficulty: string;
  instructions: string;
}
interface FormData {
  muscle: string;
  type: string;
  difficulty: string;
  exercises: string[];
}
const ExerciseForm = ({ onExerciseAdded }) => {
  const [formData, setFormData] = useState<FormData>({
    muscle: "",
    type: "",
    difficulty: "",
    exercises: [],
  });

  const [error, setError] = useState<null | string>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [workoutInProgress, setWorkoutInProgress] = useState<Boolean>(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<Number>(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchExercises(
        formData.muscle,
        formData.type,
        formData.difficulty
      );
      setExercises(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching exercises:", error);
      setError("Failed to fetch exercises. Please try again.");
    }
  };

  const handleAddExercise = async (exercise) => {
    try {
      const updatedExercises = [
        ...formData.exercises,
        { ...exercise, sets: [] },
      ];
      setFormData({ ...formData, exercises: updatedExercises });
      const { data } = await addExercise(exercise);
      console.log("received data", data);
      onExerciseAdded(data);
    } catch (error) {
      console.error("Error adding exercise:", error);
      setError("Failed to add exercise. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //i decided to enter them manually according to the api list
  const muscleGroupOptions = [
    "Abdominals",
    "Abductors",
    "Adductors",
    "Biceps",
    "Calves",
    "Chest",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Lower_back",
    "Middle_back",
    "Neck",
    "Quadriceps",
    "Traps",
    "Triceps",
  ];
  const exerciseTypeOptions = [
    "Strength",
    "Cardio",
    "Powerlifting",
    "Stretching",
  ];
  const difficultyOptions = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="setback">
    
    <div className="container">
      <div className="card">
        <div className="card-body">
          {error && <p className="error-message">{error}</p>}
          <form
            onSubmit={handleSubmit}
            className="row g-3 align-items-center centered-form"
          >
            <div className="col-auto">
              <label htmlFor="muscle" className="visually-hidden">
                Muscle Group
              </label>
              <select
                id="muscle"
                className="form-select"
                name="muscle"
                value={formData.muscle}
                onChange={handleChange}
              >
                <option value="">Muscle Group</option>
                {muscleGroupOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <label htmlFor="type" className="visually-hidden">
                Exercise Type
              </label>
              <select
                id="type"
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Exercise Type</option>
                {exerciseTypeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <label htmlFor="difficulty" className="visually-hidden">
                Difficulty Level
              </label>
              <select
                id="difficulty"
                className="form-select"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              >
                <option value="">Difficulty Level</option>
                {difficultyOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary my-search-button"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {exercises.length > 0 && (
        <div className="mt-4 found-exercises">
          <h4>Found Exercises:</h4>
          <ul className="list-group">
            {exercises.map((exercise, index) => (
              <li key={index} className="list-group-item">
                <h5 className="exercise-name">{exercise.name}</h5> {}
                <p className="exercise-type">Type: {exercise.type}</p>
                <p className="exercise-muscle">Muscle: {exercise.muscle}</p>
                <p className="exercise-difficulty">
                  Difficulty: {exercise.difficulty}
                </p>
                <p className="exercise-instructions">{exercise.instructions}</p>
                <button
                  onClick={() => handleAddExercise(exercise)}
                  className="btn btn-primary my-add-exercise-button"
                >
                  Add Exercise
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default ExerciseForm;
