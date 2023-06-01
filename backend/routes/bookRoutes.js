import express from "express";
const router = express();

import {
  getAllAuthorsBooks,
  getAllBooks,
  getAllFormats,
  getAllGenres,
  getBookById,
} from "../controllers/bookControllers.js";

// genres
router.get("/genres", getAllGenres);
router.get("/authors", getAllAuthorsBooks);
router.get("/formats", getAllFormats);

router.get("/search", getAllBooks);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
