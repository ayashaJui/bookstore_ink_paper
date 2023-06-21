import express from "express";
import {
  authUser,
  getAllUsers,
  getUserProfile,
  registerUser,
  updateIsAdmin,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express();

router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router.route("/:id/isAdmin").put(protect, admin, updateIsAdmin);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
