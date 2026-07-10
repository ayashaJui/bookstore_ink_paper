import express from "express";
import { body } from "express-validator";
import { admin, protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";

import {
  createContact,
  getAllContact,
} from "../controllers/contactControllers.js";

const router = express();

router
  .route("/")
  .post(
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Valid email is required"),
      body("subject").trim().notEmpty().withMessage("Subject is required"),
      body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
    ],
    validate,
    createContact
  )
  .get(protect, admin, getAllContact);

export default router;
