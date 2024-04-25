const express = require('express');
const router = express.Router();
const exerciseController = require('./controllers/exerciseController');

router.post('/exercises', exerciseController.createExercise);
router.get('/exercises', exerciseController.getExercises);
router.put('/exercises/:id', exerciseController.updateExercise);
router.delete('/exercises/:id', exerciseController.deleteExercise);

router.post('/exercises/workoutDone', exerciseController.markWorkoutDone);
router.get('/exercises/:id/lift-history', exerciseController.getExerciseLiftHistory);

module.exports = router;