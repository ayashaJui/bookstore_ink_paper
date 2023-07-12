import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import path, { dirname } from "path";

import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import corsMiddleware from "./middleware/corsMiddleware.js";
import { fileURLToPath } from "url";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// cors middleware
app.use(corsMiddleware);

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// const __dirname = path.resolve();

app.use("/uploads", express.static("uploads"));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
      .underline
  );
});
