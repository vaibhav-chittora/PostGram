import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

function m1(req, res, next) {
  console.log("m1");
  next();
}

app.use(m1);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/posts", createPost);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
