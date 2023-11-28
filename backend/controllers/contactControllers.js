import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import Contact from "../models/Contact.js";

// @desc        Create a Contact
// @route       POST     /api/contacts/
// @access      Public
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  if (contact) {
    res.json(contact);
  } else {
    res.status(400);
    throw new Error("Invalid contact data");
  }
});

// @desc        Get all contact messages
// @route       GET     /api/contacts/
// @access      Private, Admin
export const getAllContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});

  res.json(contacts);
});
