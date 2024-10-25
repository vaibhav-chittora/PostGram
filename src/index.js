import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";
import { s3Uploader } from "./config/multerConfig.js";


const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//create post
app.post("/posts", s3Uploader.single('image'), createPost);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); 
});
