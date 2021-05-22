const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
const db = require("./db");
const Todos = require("./db/models/Todos");

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/todos", async (req, res) => {
  console.log(req.body);
  try {
    let todo = await Todos.create(req.body);
    res.send(todo);
  } catch (err) {
    res.send(JSON.stringify(err));
  }
});
app.get("/api/todos", (req, res) => {
  res.send("hello im working");
});

app.listen(port, () => {
  console.log(`Todos available on http://localhost:${port}`);
});
