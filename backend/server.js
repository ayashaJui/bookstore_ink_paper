import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import corsMiddleware from "./middleware/corsMiddleware.js";

dotenv.config();

connectDB();

const app = express();

// cors middleware
app.use(corsMiddleware);

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
      .underline
  );
});
