import express from "express";
import {
  authUser,
  getAllUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express();

router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
