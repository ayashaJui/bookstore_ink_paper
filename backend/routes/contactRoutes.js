import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";

import {
  createContact,
  getAllContact,
} from "../controllers/contactControllers.js";

const router = express();

router.route("/").post(createContact).get(protect, admin, getAllContact);

export default router;
