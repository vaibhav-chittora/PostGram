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

/**
 * @openapi
 * /users/profile:
 *   get:
 *     description: get user profile
 *     responses:
 *       200:
 *         description: user profile
 *
 *
 */

router.get("/profile", getProfile);

/**
 * @openapi
 * /users/signup:
 *   post:
 *     description: Signup
 *     responses:
 *       201:
 *         description: profile created
 *
 *
 */
router.post("/signup", validate(zodSignUpSchema), signUp);

/**
 * @openapi
 * /users/signin:
 *   post:
 *     description: Signin
 *     responses:
 *       200:
 *         description: profile created
 *
 *
 */

router.post("/signin", validate(zodSignInSchema), signIn);

export default router;
