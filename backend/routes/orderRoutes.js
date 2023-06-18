import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
} from "../controllers/orderControllers.js";

const router = express();

router.route("/myorders").get(protect, getMyOrders);

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
