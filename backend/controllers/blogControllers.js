import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import User from "../models/User.js";
import Blog from "../models/Blog.js";

// @desc        get all blogs
// @route       GET     /api/blogs/
// @access      Public
export const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).populate("user");

  res.json({ count: blogs.length, blogs });
});

// @desc        get blog by id
// @route       GET     /api/blogs/:id
// @access      Public
export const getBlogById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const blog = await Blog.findById(id)
    .populate("user")
    .populate("comments.user");

  res.json(blog);
});
