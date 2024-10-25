import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import playersRouter from "./routes/players.js";
import teamsRouter from "./routes/teams.js";

dotenv.config();
const app = express();
const PORT = 4000;

// Connect to the database
mongoose.connect(process.env.MONGODB_URI);


function logger(req, res, next) {
  console.log(`Received a request: ${req.method}, ${req.url}, ${req.hostname}`);
  next();
}

app.use(logger);

// Middleware
app._router.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.get("/", (req, res) => {
  res.send("HOME");
});


app.use("/players", playersRouter);
app.use("/teams", teamsRouter);

// Error Middleware
app.use((e, req, res, next) => {
  console.error(e);
  res.status(500).json({extended:true})
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
