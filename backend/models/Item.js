const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Item", itemSchema);
