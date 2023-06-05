import express from "express";
const router = express();

import { getAllBlogs } from "../controllers/blogControllers.js";

router.get("/", getAllBlogs);

export default router;
