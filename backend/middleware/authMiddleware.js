import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/User.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  // console.log(req.cookies.token);

  if (
    req.cookies.token
    // &&
    // req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // token = req.cookies.token.split(" ")[1];
      token = req.cookies.token;

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, You are not allowed!");
  }
});