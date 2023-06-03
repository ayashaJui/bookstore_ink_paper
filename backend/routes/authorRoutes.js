import express from "express";
const router = express();

import {
  getAllAuthors,
  getAuthorsByPopularity,
} from "../controllers/authorControllers.js";

router.get("/popular", getAuthorsByPopularity);
router.get("/", getAllAuthors);

export default router;
