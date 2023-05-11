import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
