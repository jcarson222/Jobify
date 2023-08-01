import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";

// routers
import jobRouter from "./routes/jobRouter.js";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  // console.log(req);
  res.json({ message: "Data received", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
