import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import exerciseRouter from "./router";
import { connectToDB } from "./setup";

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(exerciseRouter);

// Connect to MongoDB
connectToDB()
  .then(() => {
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
