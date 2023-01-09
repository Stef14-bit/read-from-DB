const express = require("express");
const getUsers = require("./users-handler");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = 5005;

const userHandler = require("./users-handler");

app.get("/", (req, res) => {
  res.send("Welcome to homepage!");
});

app.get("/api/users", userHandler.getUsers);
app.post("/api/users/", userHandler.postUser);
app.get("/api/users/:id", userHandler.getUserId);
app.put("/api/users/:id", userHandler.updateUser);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
