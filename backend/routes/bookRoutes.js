import express from "express";
const router = express();

import {
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
} from "../controllers/bookControllers.js";
import { protect } from "../middleware/authMiddleware.js";

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
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
