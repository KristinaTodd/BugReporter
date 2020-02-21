import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async getNotesByBugId(bugId) {
    return await _repository.find({ bugId })
  }

  async create(body) {
    return await _repository.create(body);
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }

  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const notesService = new NotesService();
export default notesService;