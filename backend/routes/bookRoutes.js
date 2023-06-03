import express from "express";
const router = express();

import {
  getAllAuthorsBooks,
  getAllBooks,
  getAllFormats,
  getAllGenres,
  getAllPublishers,
  getBookById,
  getFeaturedBooks,
  getLatestRelease,
  getPopularBooks,
} from "../controllers/bookControllers.js";

// genres
router.get("/genres", getAllGenres);
router.get("/authors", getAllAuthorsBooks);
router.get("/formats", getAllFormats);
router.get("/publishers", getAllPublishers);
router.get("/latestRelease", getLatestRelease);
router.get("/popular", getPopularBooks);
router.get("/featured", getFeaturedBooks);

router.get("/search", getAllBooks);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
