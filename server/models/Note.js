import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Note = new Schema(
  {
    reportedBy: { type: String, required: true },
    content: { type: String, required: true },
    bugId: { type: ObjectId, ref: "Bug", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Note;