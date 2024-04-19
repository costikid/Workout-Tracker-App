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
    instructions: String
});

module.exports = mongoose.model('Exercise', exerciseSchema);