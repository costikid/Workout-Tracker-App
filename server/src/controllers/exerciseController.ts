import { Request, Response } from "express";
import Exercise, { ExerciseModel } from "../models/Exercise";

export const createExercise = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type, muscle, difficulty, instructions } = req.body;
    const exercise: ExerciseModel = new Exercise({
      name,
      type,
      muscle,
      difficulty,
      instructions,
    });
    await exercise.save();
    res.status(201).json({ success: true, data: exercise });
  } catch (err) {
    console.error("Error creating exercise:", err); // Log the error
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getExercises = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const exercises: ExerciseModel[] = await Exercise.find();
    res.status(200).json({ success: true, data: exercises });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const updateExercise = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { name, sets, reps, restInterval } = req.body;
    const exercise: ExerciseModel | null = await Exercise.findByIdAndUpdate(
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
    return res.status(200).json({ success: true, data: exercise });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export const deleteExercise = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const exercise: ExerciseModel | null = await Exercise.findByIdAndDelete(
      req.params.id
    );
    if (!exercise) {
      return res
        .status(404)
        .json({ success: false, error: "Exercise not found" });
    }
    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export const markWorkoutDone = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Your implementation
  } catch (error) {
    console.error("Error updating workout history:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getExerciseLiftHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Your implementation
  } catch (error) {
    console.error("Error fetching lift history:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
