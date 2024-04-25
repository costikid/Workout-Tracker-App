import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import exerciseRouter from "../router";
import path from "path";
import { connectToDB, startServer } from "../setup";

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(exerciseRouter);

// Connect to MongoDB and start server
connectToDB()
  .then(() => {
    startServer(app, PORT);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
