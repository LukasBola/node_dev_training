import express from "express";

const app = express();

const users = ["lukasz", "Jasiu", "hania"];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  res.send({ name: "Lukasz", lastname: "bola" });
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  res.send({ id: `${req.params.id}` });
});

app.listen(3000);
