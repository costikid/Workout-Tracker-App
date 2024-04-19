const Exercise = require('../models/Exercise');

// Controller for creating a new exercise
exports.createExercise = async (req, res) => {
    try {
        const { name, sets, reps, restInterval } = req.body;
        const exercise = new Exercise({
            name,
            sets,
            reps,
            restInterval
        });
        await exercise.save();
        res.status(201).json({ success: true, data: exercise });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// Controller for getting all exercises
exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json({ success: true, data: exercises });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// Controller for updating an exercise by ID
exports.updateExercise = async (req, res) => {
    try {
        const { name, sets, reps, restInterval } = req.body;
        const exercise = await Exercise.findByIdAndUpdate(req.params.id, {
            name,
            sets,
            reps,
            restInterval
        }, { new: true });
        if (!exercise) {
            return res.status(404).json({ success: false, error: 'Exercise not found' });
        }
        res.status(200).json({ success: true, data: exercise });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};

// Controller for deleting an exercise by ID
exports.deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        if (!exercise) {
            return res.status(404).json({ success: false, error: 'Exercise not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};