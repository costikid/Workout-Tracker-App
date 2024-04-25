import express, { Router } from "express";
import * as exerciseController from "./controllers/exerciseController";
const router: Router = express.Router();

router.post("/exercises", exerciseController.createExercise);
router.get("/exercises", exerciseController.getExercises);
router.put("/exercises/:id", exerciseController.updateExercise);
router.delete("/exercises/:id", exerciseController.deleteExercise);
router.post("/exercises/workoutDone", exerciseController.markWorkoutDone);
router.get(
  "/exercises/:id/lift-history",
  exerciseController.getExerciseLiftHistory
);

export default router;
