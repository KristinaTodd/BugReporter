import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async create(body) {
    return await _repository.create(body);
  }

  async update(id, update) {
    if (Bug.status == false) {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
  }

  async delete(id) {
    await _repository.findByIdAndUpdate(id, (Bug.status = true));
  }

}
const bugsService = new BugsService();
export default bugsService;