import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    reportedBy: { type: String, required: true },
    closed: { type: Boolean, required: true, default: false },
    closedDate: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;