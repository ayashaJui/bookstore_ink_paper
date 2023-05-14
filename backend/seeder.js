import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import authors from "./data/authors.js";
import books from "./data/books.js";
import User from "./models/User.js";
import Book from "./models/Book.js";
import Author from "./models/Author.js";
import Order from "./models/Order.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Book.deleteMany();
    await Author.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleAuthors = authors.map((author) => {
      return { ...author, user: adminUser };
    });

    await Author.insertMany(sampleAuthors);

    console.log("User & Author Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const importBookData = async () => {
  try {
    await Order.deleteMany();
    await Book.deleteMany();

    await Book.insertMany(books);

    console.log("Books Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Book.deleteMany();
    await Author.deleteMany();
    await User.deleteMany();

    console.log("All Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "-b") {
  importBookData();
} else {
  importData();
}
