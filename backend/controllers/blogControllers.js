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
  const { title, description, tags, categories, image } = req.body;

  const blog = await Blog.create({
    title,
    description,
    tags,
    categories,
    image,
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
    blog.image = req.body.image || blog.image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });

  if (blog) {
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Like a blog
// @route   POST /api/blogs/:id/like
// @access  Private
export const likeUnlikeBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const userId = req.user._id;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const isLiked = blog.likes.includes(userId);

  if (isLiked) {
    blog.likes = blog.likes.filter((id) => id.toString() !== userId.toString());
  } else {
    blog.likes.push(userId);
  }

  await blog.save();

  res.json({ message: isLiked ? "Blog unliked" : "Blog liked" });
});

// @desc    Create blog comment
// @route   POST /api/blogs/:id/comment
// @access  Private
export const createBlogComment = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const newComment = {
    details: req.body.details,
    user: req.user._id,
  };

  blog.comments.push(newComment);
  await blog.save();

  res.status(201).json(blog);
});

// @desc    Update blog comment
// @route   PUT /api/blogs/:id/comment/:commentId
// @access  Private
export const updateBlogComment = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const comment = blog.comments.id(req.params.commentId);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  if (comment.user._id !== req.user._id) {
    return res.status(403).json({ message: "You are not owner" });
  }

  comment.details = req.body.details;
  await blog.save();

  res.json(blog);
});

// @desc    Delete blog comment
// @route   DELETE /api/blogs/:id/comment/:commentId
// @access  Private
export const deletelogComment = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const comment = blog.comments.id(req.params.commentId);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  if (comment.user._id.toString() == req.user._id.toString() || req.user.isAdmin) {
    blog.comments.pull({ _id: req.params.commentId });
    await blog.save();

    res.json(blog);
  } else {
    return res.status(403).json({ message: "You are not owner or Admin" });
  }
});

// @desc    Like a blog comment
// @route   POST /api/blogs/:id/comment/:commentId/like
// @access  Private
export const likeUnlikeBlogComment = asyncHandler(async (req, res) => {
  const blogId = req.params.id;
  const userId = req.user._id;

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const comment = blog.comments.id(req.params.commentId);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  const isLiked = comment.likes.includes(userId);

  if (isLiked) {
    comment.likes = comment.likes.filter(
      (id) => id.toString() !== userId.toString()
    );
  } else {
    comment.likes.push(userId);
  }

  await blog.save();

  res.json(blog);
});
