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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExerciseLiftHistory = exports.markWorkoutDone = exports.deleteExercise = exports.updateExercise = exports.getExercises = exports.createExercise = void 0;
const Exercise_1 = __importDefault(require("../models/Exercise"));
const createExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, muscle, difficulty, instructions } = req.body;
        const exercise = new Exercise_1.default({
            name: req.body.name,
            type: req.body.type,
            muscle: req.body.muscle,
            difficulty: req.body.difficulty,
            instructions: req.body.instructions,
        });
        yield exercise.save();
        res.status(201).json({ success: true, data: exercise });
    }
    catch (err) {
        console.error("Error creating exercise:", err); // Log the error
        res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.createExercise = createExercise;
const getExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercises = yield Exercise_1.default.find();
        res.status(200).json({ success: true, data: exercises });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.getExercises = getExercises;
const updateExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, sets, reps, restInterval } = req.body;
        const exercise = yield Exercise_1.default.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            sets: req.body.sets,
            reps: req.body.sets,
            restInterval,
        }, { new: true });
        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: "Exercise not found" });
        }
        return res.status(200).json({ success: true, data: exercise });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.updateExercise = updateExercise;
const deleteExercise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exercise = yield Exercise_1.default.findByIdAndDelete(req.params.id);
        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: "Exercise not found" });
        }
        return res.status(200).json({ success: true, data: {} });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.deleteExercise = deleteExercise;
const markWorkoutDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.error("Error updating workout history:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.markWorkoutDone = markWorkoutDone;
const getExerciseLiftHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.error("Error fetching lift history:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});
exports.getExerciseLiftHistory = getExerciseLiftHistory;
