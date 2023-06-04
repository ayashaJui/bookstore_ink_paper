import asyncHandler from "express-async-handler";

import Book from "../models/Book.js";
import Author from "../models/Author.js";

// @desc        get all books
// @route       GET     /api/books/
// @access      Public
export const getAllBooks = asyncHandler(async (req, res) => {
  const { genre, author, format, price, rating, sort, offer } = req.query;
  const queryParams = {};

  if (genre) {
    const genreRegex = genre.split(",").map((g) => new RegExp(g, "i"));
    queryParams.genres = { $in: genreRegex };
  }

  if (author) {
    queryParams.author = { $in: author };
  }

  if (format) {
    queryParams.format = { $regex: format, $options: "i" };
  }

  if (price) {
    const [minPrice, maxPrice] = price.split(",");

    queryParams.price = {
      $elemMatch: {
        $gte: Number(minPrice),
        $lte: Number(maxPrice),
      },
    };
  }

  if (rating) {
    queryParams.rating = {
      $gte: Number(rating),
    };
  }

  if (offer) {
    queryParams.offer = {
      $gt: 0,
    };
  }

  let books;

  if (sort) {
    if (sort === "release") {
      books = await Book.find(queryParams)
        .sort({ release: -1 })
        .populate("author");
    } else if (sort === "popular") {
      books = await Book.find(queryParams)
        .sort({ rating: -1 })
        .populate("author");
    }
  } else {
    books = await Book.find(queryParams).populate("author");
  }

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

// @desc        get all publishers
// @route       GET     /api/books/publishers/
// @access      Public
export const getAllPublishers = asyncHandler(async (req, res) => {
  const publishers = await Book.aggregate([
    {
      $group: {
        _id: "$publisher",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        publisher: "$_id",
        count: 1,
      },
    },
  ]);

  res.json({ publishers });
});

// @desc        get latest releasr
// @route       GET     /api/books/latestRelease/
// @access      Public
export const getLatestRelease = asyncHandler(async (req, res) => {
  const latestReleases = await Book.find({})
    .sort({ release: -1 })
    .populate("author")
    .limit(8);
  res.json({ count: latestReleases.length, latestReleases });
});

// @desc        get popular books
// @route       GET     /api/books/popular/
// @access      Public
export const getPopularBooks = asyncHandler(async (req, res) => {
  const popular = await Book.find({})
    .sort({ rating: -1 })
    .populate("author")
    .limit(7);
  res.json({ count: popular.length, popular });
});

// @desc        get featured books
// @route       GET     /api/books/featured/
// @access      Public
export const getFeaturedBooks = asyncHandler(async (req, res) => {
  const featured = await Book.find({ isFeatured: true }).populate("author");

  res.json({ count: featured.length, featured });
});

// @desc        get featured books
// @route       GET     /api/books/sale/
// @access      Public
export const getSaleBooks = asyncHandler(async (req, res) => {
  const sales = await Book.find({ offer: { $gt: 0 } })
    .populate("author")
    .limit(4);

  res.json({ count: sales.length, sales });
});
