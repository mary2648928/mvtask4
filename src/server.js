import app from "./App";
import express from  'express';
const path = require("path")
const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
require("dotenv").config();
app.listen(port)
