import express from "express";
const router = express();

import {
  getAllAuthors,
  getAuthorsById,
  getAuthorsByPopularity,
} from "../controllers/authorControllers.js";

router.get("/popular", getAuthorsByPopularity);
router.get("/:id", getAuthorsById);

router.get("/", getAllAuthors);

export default router;
