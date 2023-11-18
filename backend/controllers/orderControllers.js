import asyncHandler from "express-async-handler";

import Order from "../models/Order.js";
import User from "../models/User.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(400);
    throw new Error("Order not found");
  }
});

// @desc        Get logged in user orders
// @route       GET     /api/orders/myorders
// @access      Private
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  res.json({ count: orders.length, orders });
});

// @desc        Get Users who ordered
// @route       GET     /api/orders/customers
// @access      Private
export const getOrderedByCustomers = asyncHandler(async (req, res) => {
  const pipeline = [
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $unwind: "$userInfo",
    },
    {
      $sort: {
        "userInfo.createdAt": -1,
      },
    },

    {
      // $group: {
      //   _id: "$user",
      //   orders: { $push: "$$ROOT" },
      // },
      $group: {
        _id: "$user",
        name: { $first: "$userInfo.name" },
        email: { $first: "$userInfo.email" },
        user_created: { $first: "$userInfo.createdAt" },
        orders: {
          $push: {
            totalPrice: "$totalPrice",
            orderedItems: "$orderItems",
            itemQuantity: { $sum: "$orderItems.qty" },
          },
        },
        totalSpend: { $sum: "$totalPrice" },
        avgSpend: { $avg: "$totalPrice" },
      },
    },
  ];

  const orders = await Order.aggregate(pipeline);

  res.json(orders);
});

// @desc        Get All Orders
// @route       GET     /api/orders/
// @access      Private, Admin
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .sort({ createdAt: -1 })
    .populate("user", "name");

  res.json(orders);
});

// @desc        Delete order when its not paid or delivered
// @route       DELETE   /api/orders/:id
// @access      Private
export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    if (!order.isPaid || !order.isDelivered) {
      await order.deleteOne();
      res.json({ message: "Order removed" });
    } else {
      return res.json({ message: "Can not delete this order" });
    }
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});
