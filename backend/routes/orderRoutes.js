import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  getOrderedByCustomers,
} from "../controllers/orderControllers.js";

const router = express();

router.route("/myorders").get(protect, getMyOrders);

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);
router.route("/customers").get(protect, admin, getOrderedByCustomers);
router.route("/:id").get(protect, getOrderById);

export default router;
