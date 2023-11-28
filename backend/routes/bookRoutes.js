import express from "express";
const router = express();

import {
  createBook,
  createBookRating,
  deleteBook,
  deleteBookRating,
  getAllAuthorsBooks,
  getAllBooks,
  getAllBooksWithOrder,
  getAllFormats,
  getAllGenres,
  getAllPublishers,
  getAllReviews,
  getBookById,
  getFeaturedBooks,
  getLatestRelease,
  getPopularBooks,
  getSaleBooks,
  getTotalAvgRatings,
  ratingDistribution,
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

router.route("/").get(getAllBooks).post(protect, admin, createBook);
router.route("/search").get(getAllBooks);
router.route("/reviews").get(protect, admin, getAllReviews);
router
  .route("/:id")
  .get(getBookById)
  .put(protect, admin, updateBook)
  .delete(protect, admin, deleteBook);

router
  .route("/:id/ratings")
  .get(getTotalAvgRatings)
  .post(protect, createBookRating);

router.route("/:id/ratingsDistribution").get(ratingDistribution);

router.route("/:id/ratings/:ratingId").delete(protect, deleteBookRating);

export default router;
