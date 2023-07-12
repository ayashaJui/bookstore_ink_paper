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
router.route("/genres").get(getAllGenres);
router.route("/authors").get(getAllAuthorsBooks);
router.route("/formats").get(getAllFormats);
router.route("/publishers").get(getAllPublishers);
router.route("/latestRelease").get(getLatestRelease);
router.route("/popular").get(getPopularBooks);
router.route("/featured").get(getFeaturedBooks);
router.route("/sale").get(getSaleBooks);

router.route("/search", getAllBooks);
router.route("/").get(getAllBooks).post(protect, admin, createBook);
router
  .route("/:id")
  .get(getBookById)
  .put(protect, admin, updateBook)
  .delete(protect, admin, deleteBook);

export default router;
