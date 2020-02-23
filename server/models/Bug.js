import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    reportedBy: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    modifiedDate: { type: Date, default: Date.now }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Bug;