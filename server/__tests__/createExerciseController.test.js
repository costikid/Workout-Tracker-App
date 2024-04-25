const { createExercise, getExercises } = require('../dist/controllers/exerciseController');
const Exercise = require('../dist/models/Exercise');

const mockRequest = () => {
  const req = {};
  req.body = {
    name: 'Test Exercise',
    type: 'Test Type',
    muscle: 'Test Muscle',
    difficulty: 'Test Difficulty',
    instructions: 'Test Instructions',
  };
  return req;
};
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Exercise Controller', () => {
  describe('getExercises', () => {
    it('should return a list of exercises', async () => {
      // Test implementation for getExercises
    });
  });

  describe('createExercise', () => {
    it('should return an error if request body is empty', async () => {
      const req = mockRequest();
      const res = mockResponse();

      await createExercise(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ success: false, error: "Server error" });
    });
  });
});
