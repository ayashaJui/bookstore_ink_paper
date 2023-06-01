import asyncHandler from "express-async-handler";

import Book from "../models/Book.js";
import Author from "../models/Author.js";

// @desc        get all books
// @route       GET     /api/books/
// @access      Public
export const getAllBooks = asyncHandler(async (req, res) => {
  const { genre } = req.query;
  const { author } = req.query;
  const queryParams = {};

  if (genre) {
    const genreRegex = genre.split(",").map((g) => new RegExp(g, "i"));
    queryParams.genres = { $in: genreRegex };
  }

  if (author) {
    queryParams.author = { $in: author };
  }

  // console.log(queryParams);

  const books = await Book.find(queryParams)
    .populate("author")
    .sort("createdAt");

  res.json({ count: books.length, books });
});

// @desc        get a book by id
// @route       GET     /api/books/:id
// @access      Public
export const getBookById = asyncHandler(async (req, res) => {
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
});

// @desc        get all genres
// @route       GET     /api/books/genres/
// @access      Public
export const getAllGenres = asyncHandler(async (req, res) => {
  const genres = await Book.find({}).select("genres");

  res.json({ count: genres.length, genres });
  // res.json(genres);
});

// @desc        get all genres
// @route       GET     /api/books/authors/
// @access      Public
export const getAllAuthorsBooks = asyncHandler(async (req, res) => {
  const pipeline = [
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "author",
        as: "books",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        totalBooks: { $size: "$books" },
      },
    },
  ];

  const authors = await Author.aggregate(pipeline);

  res.json({ count: authors.length, authors });
});

// @desc        get all formats
// @route       GET     /api/books/formats/
// @access      Public
export const getAllFormats = asyncHandler(async (req, res) => {
  const formats = await Book.find({}).select("format");

  res.json({ count: formats.length, formats });
  // res.json(genres);
});
