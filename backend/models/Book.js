import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
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

const seriesSchema = mongoose.Schema(
  {
    no: { type: Number, required: true },
    name: { type: String , required: true},
  },
);

const BookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    author: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Author",
    }],

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

    genres: [{
      type: String,
      required: true,
    }],
    formate: [{
      type: String
    }],
    price: [{
      type: Number,
      required: true,
      default: 0,
    }],

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
      type: Number
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

    reviews: [reviewSchema],

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

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
