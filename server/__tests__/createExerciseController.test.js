const { createExercise } = require('../dist/controllers/exerciseController');
const Exercise = require('../dist/models/Exercise');

const mockRequest = () => {
  const req = {};
  req.body = {};
  return req;
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('createExercise', () => {
  it('should return an error if request body is empty', async () => {
    const req = mockRequest();
    const res = mockResponse();

    // Call the controller function without setting req.body
    await createExercise(req, res);

    // Check if status 500 (Server error) is returned
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: "Server error" });
  });
});