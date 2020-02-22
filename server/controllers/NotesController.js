import express from "express";
import notesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await notesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await notesService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await notesService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await notesService.update(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await notesService.delete(req.params.id)
      res.send("deleted")
    } catch (error) {
      next(error);
    }
  }

}