import asyncHandler from "express-async-handler";

import Book from "../models/Book.js";
import Author from "../models/Author.js";
import User from "../models/User.js";

// @desc        get all books
// @route       GET     /api/books/
// @access      Public
export const getAllBooks = asyncHandler(async (req, res) => {
  const { genre, author, format, price, rating, sort, offer, publisher } = req.query;
  const queryParams = {};

  if (genre) {
    const genreRegex = genre.split(",").map((g) => new RegExp(g, "i"));
    queryParams.genres = { $in: genreRegex };
  }

  if (author) {
    queryParams.author = { $in: author };
  }

  if (format) {
    queryParams.format = { $regex: format, $options: "i" };
  }

  if (price) {
    const [minPrice, maxPrice] = price.split(",");

    queryParams.price = {
      $elemMatch: {
        $gte: Number(minPrice),
        $lte: Number(maxPrice),
      },
    };
  }

  if (rating) {
    queryParams.rating = {
      $gte: Number(rating),
    };
  }

  if (offer) {
    queryParams.offer = {
      $gt: 0,
    };
  }

  if(publisher){
    queryParams.publisher = { $regex: publisher, $options: "i" };
  }

  let books;

  if (sort) {
    if (sort === "release") {
      books = await Book.find(queryParams)
        .sort({ release: -1 })
        .populate("author");
    } else if (sort === "popular") {
      books = await Book.find(queryParams)
        .sort({ rating: -1 })
        .populate("author");
    }
  } else {
    books = await Book.find(queryParams)
      .populate("author", "name")
      .populate("user", "name");
  }

  res.json(books);
});

// @desc        get a book by id
// @route       GET     /api/books/:id
// @access      Public
export const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate([
    "author",
    "series",
    "reviews",
  ]);

  if (book) {
    res.json(book);
  } else {
    res.status(400);
    throw new Error("Book not Found");
  }
});

// @desc        get all genres
// @route       GET     /api/books/genres/
// @access      Public
export const getAllGenres = asyncHandler(async (req, res) => {
  const genres = await Book.find({}).select("genres");

  // res.json({ count: genres.length, genres });
  res.json(genres);
});

// @desc        get all authors book
// @route       GET     /api/books/authors/
// @access      Public
export const getAllAuthorsBooks = asyncHandler(async (req, res) => {
  const pipeline = [
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "author",
        as: "books",
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        totalBooks: { $size: "$books" },
      },
    },
  ];

  const authors = await Author.aggregate(pipeline);

  res.json(authors);
});

// @desc        get all formats
// @route       GET     /api/books/formats/
// @access      Public
export const getAllFormats = asyncHandler(async (req, res) => {
  const formats = await Book.find({}).select("format");

  res.json(formats);
  // res.json(genres);
});

// @desc        get all publishers
// @route       GET     /api/books/publishers/
// @access      Public
export const getAllPublishers = asyncHandler(async (req, res) => {
  const publishers = await Book.aggregate([
    {
      $group: {
        _id: "$publisher",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        publisher: "$_id",
        count: 1,
      },
    },
  ]);

  res.json(publishers);
});

// @desc        get latest releasr
// @route       GET     /api/books/latestRelease/
// @access      Public
export const getLatestRelease = asyncHandler(async (req, res) => {
  const latestReleases = await Book.find({})
    .sort({ release: -1 })
    .populate("author")
    .limit(8);
  res.json(latestReleases);
});

// @desc        get popular books
// @route       GET     /api/books/popular/
// @access      Public
export const getPopularBooks = asyncHandler(async (req, res) => {
  const popular = await Book.find({})
    .sort({ rating: -1 })
    .populate("author")
    .limit(7);
  res.json(popular);
});

// @desc        get featured books
// @route       GET     /api/books/featured/
// @access      Public
export const getFeaturedBooks = asyncHandler(async (req, res) => {
  const featured = await Book.find({ isFeatured: true }).populate("author");

  res.json(featured);
});

// @desc        get featured books
// @route       GET     /api/books/sale/
// @access      Public
export const getSaleBooks = asyncHandler(async (req, res) => {
  const sales = await Book.find({ offer: { $gt: 0 } })
    .populate("author")
    .limit(4);

  res.json(sales);
});

// @desc        get all books with order count
// @route       GET     /api/books/orders
// @access      Private, Admin
export const getAllBooksWithOrder = asyncHandler(async (req, res) => {
  const pipeline = [
    {
      $lookup: {
        from: "orders",
        let: { bookId: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$$bookId", "$orderItems.book"],
              },
            },
          },
          {
            $unwind: "$orderItems",
          },
          {
            $match: {
              $expr: {
                $eq: ["$orderItems.book", "$$bookId"],
              },
            },
          },
          {
            $group: {
              _id: null,
              saleCount: { $sum: "$orderItems.qty" },
            },
          },
        ],
        as: "saleCountData",
      },
    },

    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "users",
      },
    },

    {
      $project: {
        _id: 1,
        title: 1,
        user: { $arrayElemAt: ["$users.name", 0] },
        // author: {
        //   $map: {
        //     input: "$authors",
        //     as: "author",
        //     in: "$$author.name",
        //   },
        // },
        image: 1,
        format: 1,
        price: 1,
        countInStock: 1,
        release: 1,
        series: 1,
        literaryReviews: 1,
        offer: 1,
        isFeatured: 1,
        isBestSeller: 1,
        saleCount: {
          $ifNull: [{ $arrayElemAt: ["$saleCountData.saleCount", 0] }, 0],
        },
      },
    },
  ];

  const books = await Book.aggregate(pipeline);
  res.json(books);
});

// @desc    Create new book
// @route   POST /api/books
// @access  Private, Admin
export const createBook = asyncHandler(async (req, res) => {
  const {
    author,
    isbn,
    title,
    description,
    genres,
    format,
    price,
    pages,
    countInStock,
    publisher,
    release,
    offer,
    numCopySold,
    image,
  } = req.body;

  const book = await Book.create({
    author,
    isbn,
    title,
    image,
    description,
    genres,
    format,
    price,
    countInStock,
    publisher,
    release,
    offer,
    pages,
    numCopySold,
    user: req.user._id,
  });

  if (book) {
    res.json(book);
  } else {
    res.status(400);
    throw new Error("Invalid book data");
  }
});

// @desc    Update book
// @route   PUT /api/books/:id/
// @access  Private, Admin
export const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    book.author = req.body.author || book.author;
    book.isbn = req.body.isbn || book.isbn;
    book.title = req.body.title || book.title;
    book.image = req.body.image || book.image;
    book.description = req.body.description || book.description;
    book.genres = req.body.genres || book.genres;
    book.format = req.body.format || book.format;
    book.price = req.body.price || book.price;
    book.countInStock = req.body.countInStock || book.countInStock;
    book.publisher = req.body.publisher || book.publisher;
    book.release = req.body.release || book.release;
    book.offer = req.body.offer || book.offer;
    book.pages = req.body.pages || book.pages;
    book.numCopySold = req.body.numCopySold || book.numCopySold;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private, Admin
export const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (book) {
    res.json({ message: "Book removed" });
  } else {
    res.status(404);
    throw new Error("Book not found");
  }
});
