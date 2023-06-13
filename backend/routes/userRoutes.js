import express from "express";
import {
  authUser,
  getUserProfile,
  logOutUser,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express();

router.post("/", registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.post("/logout", logOutUser);

export default router;
