import express from "express";
const router = express();

import {
  getAllBlogCategories,
  getAllBlogTags,
  getAllBlogs,
  getBlogById,
} from "../controllers/blogControllers.js";

router.get("/categories", getAllBlogCategories);
router.get("/tags", getAllBlogTags);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

export default router;
