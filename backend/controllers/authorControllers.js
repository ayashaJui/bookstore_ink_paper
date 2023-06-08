import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import Book from "../models/Book.js";
import Author from "../models/Author.js";

const lookup = [
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "author",
      as: "books",
    },
  },
];

// @desc        get all authors
// @route       GET     /api/authors/
// @access      Public
export const getAllAuthors = asyncHandler(async (req, res) => {
  const project = {
    $project: {
      _id: 1,
      authorInfo: "$$ROOT",
      totalBooks: { $size: "$books" },
    },
  };

  const pipeline = [...lookup, project];

  const authors = await Author.aggregate(pipeline);

  res.json({ count: authors.length, authors });
});

// @desc        get author by id
// @route       GET     /api/authors/:id
// @access      Public
export const getAuthorsById = asyncHandler(async (req, res) => {
  const match = {
    $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
  };

  const unwind = {
    $unwind: "$books",
  };

  const grouping = {
    $group: {
      _id: null,
      authorInfo: { $first: "$$ROOT" },
      books: { $push: "$books" },
      totalBooks: { $sum: 1 },
      avgRating: { $avg: "$books.rating" },
      totalNumReviews: { $sum: "$books.numReviews" },
      uniqueGenres: { $addToSet: "$books.genres" },
    },
  };

  const project = {
    $project: {
      _id: 1,
      authorInfo: 1,
      totalBooks: 1,
      avgRating: 1,
      totalNumReviews: 1,
      uniqueGenres: 1,
      books: 1,
    },
  };

  const pipeline = [match, ...lookup, unwind, grouping, project];

  const author = await Author.aggregate(pipeline);

  res.json(author[0]);
});

// @desc        get author by popularity
// @route       GET     /api/authors/popular
// @access      Public
export const getAuthorsByPopularity = asyncHandler(async (req, res) => {
  const project = {
    $project: {
      _id: 1,
      authorInfo: "$$ROOT",
      totalBooks: { $size: "$books" },
      avgRating: { $avg: "$books.rating" },
    },
  };

  const sort = {
    $sort: {
      avgRating: -1,
    },
  };

  const limit = {
    $limit: 8,
  };

  const pipeline = [...lookup, project, sort, limit];

  const popularAuthors = await Author.aggregate(pipeline);

  res.json({ count: popularAuthors.length, popularAuthors });
});
