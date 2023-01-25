const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foundedYear: {
    type: String,
  },
  specialized: {
    type: [String],
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
const School = mongoose.model("School", schoolSchema);

module.exports = { User, School };
