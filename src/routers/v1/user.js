import express from "express";
import {
  getProfile,
  signIn,
  signUp,
} from "../../controllers/userController.js";
import { validate } from "../../validators/zodValidator.js";
import { zodSignUpSchema } from "../../validators/zodSignUpSchema.js";
import { zodSignInSchema } from "../../validators/zodSignInSchema.js";

const router = express.Router();

router.get("/profile", getProfile);

router.post("/signup", validate(zodSignUpSchema), signUp);

router.post("/signin", validate(zodSignInSchema), signIn);

export default router;
