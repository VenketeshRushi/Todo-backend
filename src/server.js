const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const dbConnect = require("./config/db");

const userRouter = require("./user/user.router");
const taskRoute = require("./task/task.router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`listening on http://localhost:${PORT}`);
});
