import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add name"],
      maxlength: [50, "Name cannot be more than 50 chars"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
      maxlength: [10, "Phone number cannot be longer than 10 characters"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
