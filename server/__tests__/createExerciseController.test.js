
const { createExercise } = require('../dist/controllers/exerciseController');
const Exercise = require('../dist/models/Exercise');
jest.mock('../dist/models/Exercise', () => ({
  __esModule: true,
  default: jest.fn(),
  save: jest.fn(),
}));

describe('Exercise Controller', () => {
  it('should create a new exercise', async () => {
    // Mock request body
    const exerciseData = {
      name: 'Test Exercise',
      type: 'Strength',
      muscle: 'Chest',
      difficulty: 'Intermediate',
      instructions: 'Do some exercise',
    };

    // Mock request and response objects
    const req = { body: exerciseData };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Call the controller function
    await createExercise(req, res);

    // Expectations
    expect(Exercise.default).toHaveBeenCalled(); // Ensure the default export of Exercise was called
    expect(Exercise.default).toHaveBeenCalledWith(expect.objectContaining(exerciseData)); // Ensure Exercise was called with the correct data
    expect(Exercise.save).toHaveBeenCalled(); // Ensure the save method of Exercise was called
    expect(res.status).toHaveBeenCalledWith(201); // Ensure that status 201 (Created) was sent
    expect(res.json).toHaveBeenCalledWith({ success: true, data: expect.any(Object) }); // Ensure the correct response
  });
});
