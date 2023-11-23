import express from "express";
const router = express();

import {
  createBlog,
  createBlogComment,
  deleteBlog,
  deletelogComment,
  getAllBlogCategories,
  getAllBlogTags,
  getAllBlogs,
  getBlogById,
  getMyBlogs,
  likeUnlikeBlog,
  likeUnlikeBlogComment,
  updateBlog,
  updateBlogComment,
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

router.route("/:id/like").post(protect, likeUnlikeBlog);

router.route("/:id/comment").post(protect, createBlogComment);

router
  .route("/:id/comment/:commentId")
  .put(protect, updateBlogComment)
  .delete(protect, deletelogComment);

router
  .route("/:id/comment/:commentId/like")
  .post(protect, likeUnlikeBlogComment);

export default router;
