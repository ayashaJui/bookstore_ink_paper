import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import User from "../models/User.js";
import Blog from "../models/Blog.js";

// @desc        get all blogs
// @route       GET     /api/blogs/
// @access      Public
export const getAllBlogs = asyncHandler(async (req, res) => {
  const { sort, category, tag } = req.query;

  let blogs;

  const queryParams = {};

  if (category) {
    queryParams.categories = { $regex: category, $options: "i" };
  }

  if (tag) {
    queryParams.tags = { $regex: tag, $options: "i" };
  }

  if (sort === "latest") {
    blogs = await Blog.find(queryParams)
      .populate("user")
      .sort({ createdAt: -1 })
      .limit(3);
  } else {
    blogs = await Blog.find(queryParams).populate("user");
  }

  res.json(blogs);
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

// @desc        get all categories
// @route       GET     /api/blogs/categories
// @access      Public
export const getAllBlogCategories = asyncHandler(async (req, res) => {
  const categories = await Blog.find({}).select("categories");

  res.json(categories);
  // res.json(genres);
});

// @desc        get all tags
// @route       GET     /api/blogs/tags
// @access      Public
export const getAllBlogTags = asyncHandler(async (req, res) => {
  const tags = await Blog.find({}).select("tags");

  res.json(tags);
});

// @desc        Get logged in user blogs
// @route       GET     /api/blogs/myblogs
// @access      Private
export const getMyBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user._id });

  res.json({ count: blogs.length, blogs });
});

// @desc    Update isHidden
// @route   PUT /api/users/:id/isHidden
// @access  Private, Admin
export const updateIsHidden = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.isHidden = !blog.isHidden;

    const updatedBlog = await blog.save();

    res.json(updatedBlog);
  } else {
    res.status(401);
    throw new Error("Blog not found");
  }
});

// @desc    Create new blog
// @route   POST /api/blogs
// @access  Private
export const createBlog = asyncHandler(async (req, res) => {
  const { title, description, tags, categories } = req.body;

  const blog = await Blog.create({
    title,
    description,
    tags,
    categories,
    user: req.user._id,
  });

  if (blog) {
    res.json(blog);
  } else {
    res.status(400);
    throw new Error("Invalid blog data");
  }
});

// @desc    Update blog
// @route   PUT /api/blogs/:id/
// @access  Private
export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id, user: req.user._id });

  if (blog) {
    blog.title = req.body.title || blog.title;
    blog.description = req.body.description || blog.description;
    blog.categories = req.body.categories || blog.categories;
    blog.tags = req.body.tags || blog.tags;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});
