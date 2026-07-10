import express from "express";
import { body } from "express-validator";
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
import { validate } from "../middleware/validateMiddleware.js";

const router = express();

router
  .route("/")
  .post(
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
      body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],
    validate,
    registerUser
  )
  .get(protect, admin, getAllUsers);

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

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  authUser
);

export default router;
