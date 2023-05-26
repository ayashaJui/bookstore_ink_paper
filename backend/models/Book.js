import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const literaryReviewSchema = new mongoose.Schema({
  literar: { type: String, required: true },
  comment: { type: String, required: true },
});

const seriesSchema = new mongoose.Schema({
  no: { type: Number, required: true },
  name: { type: String, required: true },
});

const BookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author",
      },
    ],

    isbn: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    genres: [
      {
        type: String,
        required: true,
      },
    ],
    format: [
      {
        type: String,
      },
    ],
    price: [
      {
        type: Number,
        required: true,
        default: 0,
      },
    ],

    publisher: {
      type: String,
    },

    release: {
      type: Date,
    },

    image: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
    },

    series: [seriesSchema],

    isFeatured: {
      type: String,
      required: true,
      default: false,
    },

    offer: {
      type: Number,
      required: true,
      default: 0,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    numCopySold: {
      type: String,
    },

    reviews: [reviewSchema],

    literaryReviews: [literaryReviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: [
      {
        type: Number,
        required: true,
        default: 0,
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
