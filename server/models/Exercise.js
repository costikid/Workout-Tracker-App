"use strict";
const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    muscle: String,
    equipment: String,
    difficulty: String,
    instructions: String,
    workoutHistory: [
        {
            sets: Number,
            reps: Number,
            weight: Number,
        }
    ]
});
module.exports = mongoose.model('Exercise', exerciseSchema);
