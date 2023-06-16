import express from "express";
const router = express();

import {
  getAllBlogCategories,
  getAllBlogTags,
  getAllBlogs,
  getBlogById,
  getMyBlogs,
} from "../controllers/blogControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/myblogs").get(protect, getMyBlogs);

router.get("/categories", getAllBlogCategories);
router.get("/tags", getAllBlogTags);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

export default router;
