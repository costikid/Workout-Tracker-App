import { Request, Response } from "express";
import Exercise from "../models/Exercise";

// Creating a new exercise
exports.createExercise = async (req: Request, res: Response) => {
  try {
    const { name, type, muscle, difficulty, instructions } = req.body;
    const exercise = new Exercise({
      name,
      type,
      muscle,
      difficulty,
      instructions,
    });
    await exercise.save();
    res.status(201).json({ success: true, data: exercise });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Getting all exercises
exports.getExercises = async (req: Request, res: Response) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json({ success: true, data: exercises });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Updating an exercise by ID
exports.updateExercise = async (req: Request, res: Response) => {
  try {
    const { name, sets, reps, restInterval } = req.body;
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      {
        name,
        sets,
        reps,
        restInterval,
      },
      { new: true }
    );
    if (!exercise) {
      return res
        .status(404)
        .json({ success: false, error: "Exercise not found" });
    }
    res.status(200).json({ success: true, data: exercise });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Deleting an exercise by ID
exports.deleteExercise = async (req: Request, res: Response) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res
        .status(404)
        .json({ success: false, error: "Exercise not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Marking workout as done and storing workout history
exports.markWorkoutDone = async (req: Request, res: Response) => {
  try {
    // Your implementation
  } catch (error) {
    console.error("Error updating workout history:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Fetching last lift history for exercise by ID
exports.getExerciseLiftHistory = async (req: Request, res: Response) => {
  try {
    // Your implementation
  } catch (error) {
    console.error("Error fetching lift history:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
