const express = require('express');
const router = express.Router();
const exerciseController = require('./controllers/exerciseController');

router.post('/exercises', exerciseController.createExercise);
router.get('/exercises', exerciseController.getExercises);
router.put('/:id', exerciseController.updateExercise);
router.delete('/:id', exerciseController.deleteExercise);

router.post('/workoutDone', exerciseController.markWorkoutDone);

module.exports = router;