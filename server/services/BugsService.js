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
    let bug = await _repository.findById(id);
    if (bug.status == false) {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
  }


  async delete(id) {
    let bug = await _repository.findById(id);
    bug.status = true;
  }

}
const bugsService = new BugsService();
export default bugsService;