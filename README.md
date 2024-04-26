# Workout-Tracker-App

Weightlifting workout planner with exercise input, rest timer and lift history.

Front End:
React
Vite
Bootstrap

Back End:
Express.js
MongoDB
Mongoose

Installation
Front End (React with Vite)

Install dependencies:
npm install
npm run dev

Navigate to the back end directory:
Install dependencies:
npm install
npm start

# API endpoints

### Create exercise

`POST  /exercises`

- **Sample Request Body**:

```json
{
  "name": "Exercise Name",
  "type": "Type of exercise",
  "muscle": "Muscle targeted",
  "difficulty": "Difficulty level",
  "instructions": "Exercise instructions"
}
```

### Get all exercises

`GET  http://localhost:3000/exercises`

### Update exercise

`PUT  http://localhost:3000/exercises/:id`

- **Sample Request Body**:

```json
{
  "name": "Updated Exercise Name",
  "sets": 5,
  "reps": 10,
  "restInterval": 60
}
```

### Delete an exercise

`DELETE  http://localhost:3000/exercises/:id`

### Mark workout done

`POST http://localhost:3000/exercises/workoutDone`

### Get Exercise Lift History

`GET http://localhost:3000/exercises/:id/lift-history`

# External API

1. Go to [APINinjas](https://api-ninjas.com/api/exercises)
2. Sign up and get an API key
3. Create a .env file inside the client folder
4. Insert the API key inside the .env file
