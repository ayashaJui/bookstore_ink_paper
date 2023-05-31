import express from "express";
const router = express();

import {
  getAllBooks,
  getAllGenres,
  getBookById,
} from "../controllers/bookControllers.js";

// genres
router.get("/genres", getAllGenres);

router.get("/search", getAllBooks);
router.get("/", getAllBooks);
router.get("/:id", getBookById);

export default router;
