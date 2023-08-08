import { Router } from "express";
import { register, login } from "../controllers/authController.js";
// validation
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(login);

export default router;
