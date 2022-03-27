const express = require("express");
const app = express();
const stats = require("./database/data.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api/stats", (req, res) => {
  res.status(200).send(stats);
});

const port = 9020;
app.listen(port, () => console.log(`Listening on port ${port}...`));
