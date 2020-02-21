import express from "express";
import notesService from "../services/NotesService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await bugsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.getNotesByBugId(req.params.id)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await bugsService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await bugsService.update(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await bugsService.delete(req.params.id)
      res.send("deleted")
    } catch (error) {
      next(error);
    }
  }

}