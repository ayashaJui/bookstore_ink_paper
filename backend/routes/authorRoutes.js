import express from "express";
const router = express();

import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorsById,
  getAuthorsByPopularity,
  updateAuthor,
} from "../controllers/authorControllers.js";

import { admin, protect } from "../middleware/authMiddleware.js";

router
  .route("/:id")
  .get(getAuthorsById)
  .put(protect, admin, updateAuthor)
  .delete(protect, admin, deleteAuthor);
router.route("/").get(getAllAuthors).post(protect, admin, createAuthor);
router.get("/popular", getAuthorsByPopularity);

export default router;
