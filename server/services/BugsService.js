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
    let bug = await _repository.findById(id)
    if (!bug.closed) {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
    throw new Error("cannot edit closed bug")
  }

  async delete(id) {
    // let bug = await _repository.findById(id)
    let update = {
      closed: true
    }
    return await _repository.findByIdAndUpdate(id, update, { new: true })
    // return await _repository.findByIdAndDelete(id);
  }

}
const bugsService = new BugsService();
export default bugsService;