import express from "express";
const router = express();

import {
  createBlog,
  deleteBlog,
  getAllBlogCategories,
  getAllBlogTags,
  getAllBlogs,
  getBlogById,
  getMyBlogs,
  updateBlog,
  updateIsHidden,
} from "../controllers/blogControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/:id/isHidden").put(protect, admin, updateIsHidden);

router.route("/myblogs").get(protect, getMyBlogs);

router.get("/categories", getAllBlogCategories);
router.get("/tags", getAllBlogTags);

router.route("/").get(getAllBlogs).post(protect, createBlog);
router
  .route("/:id")
  .get(getBlogById)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

export default router;
