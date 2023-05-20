import express from "express";
const router = express();

import Book from "../models/Book.js";
import asyncHandler from "express-async-handler";

// @desc        get all books
// @route       GET     /api/books/
// @access      Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const books = await Book.find({});

    res.json(books);
  })
);

// @desc        get a book by id
// @route       GET     /api/books/:id
// @access      Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
      res.json(book);
    } else {
      res.status(400);
      throw new Error("Product not Found");
    }
  })
);

export default router;
