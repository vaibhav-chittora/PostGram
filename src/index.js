import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import { isAuthenticated } from "./middlewares/authMiddleware.js";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/ping", isAuthenticated, (req, res) => {
  console.log(req.user);
  return res.json({
    message: "Pong, the server is Up.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
