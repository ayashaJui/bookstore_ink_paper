import express from "express";
import { createContact } from "../controllers/contactControllers.js";
const router = express();


router.route('/').post(createContact);

export default router;