import asyncHandler from "express-async-handler";

import Book from "../models/Book.js";
import Author from "../models/Author.js";

// @desc        get all authors
// @route       GET     /api/authors/
// @access      Public
export const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find({});

  res.json({ count: authors.length, authors });
});

// @desc        get author by popularity
// @route       GET     /api/authors/popular
// @access      Public
export const getAuthorsByPopularity = asyncHandler(async (req, res) => {
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
        authorInfo: "$$ROOT",
        totalBooks: { $size: "$books" },
        avgRating: { $avg: "$books.rating" },
      },
    },
    {
      $sort: {
        avgRating: -1,
      },
    },
    {
      $limit: 8,
    },
  ];

  const popularAuthors = await Author.aggregate(pipeline);

  res.json({ count: popularAuthors.length, popularAuthors });
});
