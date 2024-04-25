import mongoose, { Schema, Document } from "mongoose";

export interface IExercise extends Document {
  name: string;
  type?: string;
  muscle?: string;
  equipment?: string;
  difficulty?: string;
  instructions?: string;
  workoutHistory: Array<{
    sets: number;
    reps: number;
    weight: number;
  }>;
}

const exerciseSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
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
    },
  ],
});

export default mongoose.model<IExercise>("Exercise", exerciseSchema);
