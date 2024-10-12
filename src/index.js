import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
