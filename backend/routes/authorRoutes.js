import express from "express";
const router = express();

import { getAllAuthors } from "../controllers/authorControllers.js";

router.get("/", getAllAuthors);

export default router;
