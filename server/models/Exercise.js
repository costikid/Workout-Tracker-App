const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    restInterval: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Exercise', exerciseSchema);
