import express from "express";
const router = express();

import { getAllBlogs, getBlogById } from "../controllers/blogControllers.js";

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

export default router;
