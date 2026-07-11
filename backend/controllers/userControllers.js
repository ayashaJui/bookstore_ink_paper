import asyncHandler from "express-async-handler";
import crypto from "crypto";

import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";
import User from "../models/User.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && !user.isDeleted && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    if (user && user.isDeleted) {
      throw new Error("Account is deleted");
    } else {
      throw new Error("Invalid email or password");
    }
  }
});

// @desc    Register user & get token
// @route   POST /api/users/
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    User Logout & remove token
// @route   POST /api/users/logout
// @access  Private
// export const logOutUser = asyncHandler(async (Req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logout Successful" });
// });

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    Update isDeleted
// @route   PUT /api/users/:id/isDeleted
// @access  Private
export const requestDeleteUserProfile = asyncHandler(async (req, res) => {
  if (req.user._id.toString() !== req.params.id && !req.user.isAdmin) {
    res.status(403);
    throw new Error("Not authorized");
  }

  const user = await User.findById(req.params.id);

  if (user) {
    user.isDeleted = !user.isDeleted;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users/
// @access  Private, Admin
export const getAllUsers = asyncHandler(async (req, res) => {
  const pageNum = Number(req.query.page) || 1;
  const limitNum = Number(req.query.limit) || 20;
  const skip = (pageNum - 1) * limitNum;

  const total = await User.countDocuments({});
  const users = await User.find({}).skip(skip).limit(limitNum);

  res.json({ users, page: pageNum, pages: Math.ceil(total / limitNum), total });
});

// @desc    Update isAdmin
// @route   PUT /api/users/:id/isAdmin
// @access  Private, Admin
export const updateIsAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isAdmin = !user.isAdmin;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    Create user
// @route   POST /api/users/create
// @access  Private, Admin
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, address, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    address,
    phone,
  });

  if (user) {
    res.json(user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id/
// @access  Private, Admin
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    Update user
// @route   PUT /api/users/:id/
// @access  Private, Admin
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json(user);
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (user) {
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Send password reset email
// @route   POST /api/users/forgotpassword
// @access  Public
export const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404);
    throw new Error("No account found with that email");
  }

  const rawToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const resetUrl = `${frontendUrl}/resetpassword/${rawToken}`;

  const html = `
    <h2>Password Reset — Ink & Paper</h2>
    <p>You requested a password reset. Click the link below to set a new password.</p>
    <p>This link expires in <strong>30 minutes</strong>.</p>
    <a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#272643;color:#fff;text-decoration:none;border-radius:4px;">
      Reset Password
    </a>
    <p>If you did not request this, you can safely ignore this email.</p>
  `;

  try {
    await sendEmail({ to: user.email, subject: "Password Reset — Ink & Paper", html });
    res.json({ message: "Reset email sent" });
  } catch {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(500);
    throw new Error("Email could not be sent");
  }
});

// @desc    Reset password using token
// @route   PUT /api/users/resetpassword/:token
// @access  Public
export const resetPassword = asyncHandler(async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid or expired reset token");
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
});
