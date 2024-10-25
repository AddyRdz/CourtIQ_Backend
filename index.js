import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import playersRouter from "./routes/players.js";
import teamsRouter from "./routes/teams.js";

dotenv.config();

// connect to the database
mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = 4000;

function logger(req, res, next) {
  console.log(`Received a request: ${req.method}, ${req.url}, ${req.hostname}`);
  next();
}

app.use(logger);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME");
});

app.use("/players", playersRouter);
app.use("/teams", teamsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
