const mongoose = require("mongoose");

const { Schema } = mongoose;

const authSchema = new Schema(
  {
    username: {
      type: String,

      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,

      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    fullName: {
      type: String,

      trim: true,
      index: true,
    },
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://via.placeholder.com/200x200.png`,
        localPath: "",
      },
    },
    password: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

const AuthModel = mongoose.model("AuthModel", authSchema);

module.exports = AuthModel;
