import express from "express";
const router = express();

import {
  createBook,
  deleteBook,
  getAllAuthorsBooks,
  getAllBooks,
  getAllBooksWithOrder,
  getAllFormats,
  getAllGenres,
  getAllPublishers,
  getBookById,
  getFeaturedBooks,
  getLatestRelease,
  getPopularBooks,
  getSaleBooks,
  updateBook,
} from "../controllers/bookControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/orders").get(protect, getAllBooksWithOrder);
router.get("/genres", getAllGenres);
router.get("/authors", getAllAuthorsBooks);
router.get("/formats", getAllFormats);
router.get("/publishers", getAllPublishers);
router.get("/latestRelease", getLatestRelease);
router.get("/popular", getPopularBooks);
router.get("/featured", getFeaturedBooks);
router.get("/sale", getSaleBooks);

router.get("/search", getAllBooks);
router.route("/").get(getAllBooks).post(protect, admin, createBook);
router
  .route("/:id")
  .get(getBookById)
  .put(protect, admin, updateBook)
  .delete(protect, admin, deleteBook);

export default router;
