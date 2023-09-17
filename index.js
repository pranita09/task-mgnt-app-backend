const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
require("./db/db.connect");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const taskRouter = require("./routes/task.routes");

const app = express();

app.use(
  cors()
);

app.use(helmet());

app.use(express.json());

app.use("/tasks", taskRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.get("/", (req, res) => {
  res.send("Welcome to Organizely's Express app!");
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
