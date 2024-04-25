"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Exercise = require("../models/Exercise");
//creating a new exercise
exports.createExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, muscle, difficulty, instructions } = req.body;
        const exercise = new Exercise({
            name,
            type,
            muscle,
            difficulty,
            instructions,
        });
        yield exercise.save();
        res.status(201).json({ success: true, data: exercise });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
//getting all exercises
exports.getExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercises = yield Exercise.find();
        res.status(200).json({ success: true, data: exercises });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
//updating an exercise by ID
exports.updateExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, sets, reps, restInterval } = req.body;
        const exercise = yield Exercise.findByIdAndUpdate(req.params.id, {
            name,
            sets,
            reps,
            restInterval,
        }, { new: true });
        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: "Exercise not found" });
        }
        res.status(200).json({ success: true, data: exercise });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
//deleting an exercise by ID
exports.deleteExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercise = yield Exercise.findByIdAndDelete(req.params.id);
        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: "Exercise not found" });
        }
        res.status(200).json({ success: true, data: {} });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
//workout is done and storing workout history
exports.markWorkoutDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Request Body:", req.body);
        for (const [exerciseId, sets] of Object.entries(req.body)) {
            console.log("Exercise ID:", exerciseId);
            console.log("Sets:", sets);
            const exercise = yield Exercise.findById(exerciseId);
            console.log("Exercise:", exercise);
            if (exercise) {
                const formattedSets = sets.map((set) => ({
                    sets: set.sets,
                    reps: set.reps,
                    weight: set.weight,
                }));
                console.log("Formatted Sets:", formattedSets);
                exercise.workoutHistory.push(...formattedSets);
                console.log("Updated Exercise:", exercise);
                yield exercise.save();
            }
        }
        res
            .status(200)
            .json({
            success: true,
            message: "Workout history updated for all exercises",
        });
    }
    catch (error) {
        console.error("Error updating workout history:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
//fetch last lift history for exercise by ID
exports.getExerciseLiftHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exerciseId = req.params.id;
        const exercise = yield Exercise.findById(exerciseId);
        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: "Exercise not found" });
        }
        const liftHistory = exercise.workoutHistory.slice(-1)[0];
        res.status(200).json({ success: true, data: liftHistory });
    }
    catch (error) {
        console.error("Error fetching lift history:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
