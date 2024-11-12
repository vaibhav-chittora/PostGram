import express from "express";
import { getProfile, signUp } from "../../controllers/userController.js";
import { validate } from "../../validators/zodValidator.js";
import { zodSignUpSchema } from "../../validators/zodSignUpSchema.js";

const router = express.Router();

router.get("/profile", getProfile);

router.post("/signup", validate(zodSignUpSchema), signUp);

export default router;
