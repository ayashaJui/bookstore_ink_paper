import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import Book from "../models/Book.js";
import Author from "../models/Author.js";
import User from "../models/User.js";

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
  const userLookup = {
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "users",
    },
  };

  const project = {
    $project: {
      _id: 1,
      user: "$users.name",
      authorInfo: "$$ROOT",
      totalBooks: { $size: "$books" },
    },
  };

  const pipeline = [...lookup, userLookup, project];

  const authors = await Author.aggregate(pipeline);

  res.json(authors);
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
    preserveNullAndEmptyArrays: true,
  };

  const project = {
    $project: {
      _id: 1,
      authorInfo: "$$ROOT",
      totalBooks: { $cond: [{ $isArray: "$books" }, { $size: "$books" }, 0] },
      avgRating: { $avg: "$books.rating" },
      totalNumReviews: { $sum: "$books.numReviews" },
      uniqueGenres: {
        $cond: [
          { $isArray: "$books" },
          {
            $reduce: {
              input: "$books.genres",
              initialValue: [],
              in: { $setUnion: ["$$value", "$$this"] },
            },
          },
          [],
        ],
      },
      books: { $ifNull: ["$books", []] },
    },
  };

  const pipeline = [match, ...lookup, project];

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
      totalBooks: { $cond: [{ $isArray: "$books" }, { $size: "$books" }, 0] },
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

  res.json(popularAuthors);
});

// @desc    Create new author
// @route   POST /api/authors
// @access  Private, Admin
export const createAuthor = asyncHandler(async (req, res) => {
  const { name, email, description, dob, dod, website, social } = req.body;

  const author = await Author.create({
    name,
    email,
    description,
    dob,
    dod,
    website,
    social,
    user: req.user._id,
  });

  if (author) {
    res.json(author);
  } else {
    res.status(400);
    throw new Error("Invalid author data");
  }
});

// @desc    Update author
// @route   PUT /api/authors/:id/
// @access  Private, Admin
export const updateAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);

  if (author) {
    author.name = req.body.name || author.name;
    author.email = req.body.email || author.email;
    author.description = req.body.description || author.description;
    author.website = req.body.website || author.website;
    author.dob = req.body.dob || author.dob;
    author.dod = req.body.dod || author.dod;
    author.social = req.body.social || author.social;

    const updatedAuthor = await author.save();
    res.json(updatedAuthor);
  } else {
    res.status(404);
    throw new Error("Author not found");
  }
});

// @desc    Delete author
// @route   DELETE /api/authors/:id
// @access  Private, Admin
export const deleteAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);

  if (author) {
    res.json({ message: "Author removed" });
  } else {
    res.status(404);
    throw new Error("Author not found");
  }
});
