import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";

router.route("/current-user").get(getCurrentUser);
router.route("/admin/app-stats").get(getApplicationStats);
router.route("/update-user").patch(updateUser);

export default router;
