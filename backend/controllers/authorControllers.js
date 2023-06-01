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