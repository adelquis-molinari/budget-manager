import mongoose from "mongoose";

const budgetSchema = mongoose.Schema({
  state: {
    type: Number,
    require: true,
    trim: true,
  },
  spent: {
    type: Number,
  },
  quantity: {
    type: Number,
    require: true,
    trim: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    enum: [
      "saving",
      "home",
      "food",
      "various expenses",
      "rental",
      "leisure",
      "Health",
      "subscriptions",
    ],
  },
  type: {
    type: String,
    require: true,
    enum: ["entry", "egress"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Budget = mongoose.model("Budget", budgetSchema);
export default Budget;
