import app from "./App";
import express from 'express';
const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port);