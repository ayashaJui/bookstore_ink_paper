import express from "express";
const router = express();
import asyncHandler from "express-async-handler";

import Book from "../models/Book.js";
import Author from "../models/Author.js";

// @desc        get all books
// @route       GET     /api/books/
// @access      Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const books = await Book.find({}).populate("author").sort("createdAt");

    res.json(books);
  })
);

// @desc        get a book by id
// @route       GET     /api/books/:id
// @access      Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id).populate([
      "author",
      "series",
      "reviews",
    ]);

    if (book) {
      res.json(book);
    } else {
      res.status(400);
      throw new Error("Book not Found");
    }
  })
);

export default router;
