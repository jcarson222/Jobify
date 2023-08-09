import { Router } from "express";
import { register, login } from "../controllers/authController.js";
// validation
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(validateLoginInput, login);

export default router;
