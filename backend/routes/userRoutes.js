import express from "express";
import {
  authUser,
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserProfile,
  registerUser,
  requestDeleteUserProfile,
  updateIsAdmin,
  updateUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express();

router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router.route("/create").post(protect, admin, createUser);
router.route("/:id/isAdmin").put(protect, admin, updateIsAdmin);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

router.route("/:id/isDeleted").put(protect, requestDeleteUserProfile);

router.post("/login", authUser);

export default router;
