import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    dob: {
      type: Date,
    },
    dod: {
      type: Date,
    },
    image: {
      type: String,
    },
    // numBooks: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    social: {
      youtube: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
