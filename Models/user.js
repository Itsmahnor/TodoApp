const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    list: [
      {
        type: mongoose.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);

User.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", User);
