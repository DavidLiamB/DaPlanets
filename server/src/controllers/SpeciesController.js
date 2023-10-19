import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { speciesService } from "../services/SpeciesService.js";
import { dbContext } from "../db/DbContext.js";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router.get('', this.getSpecies).post('', this.createSpecies).put('/:id', this.updateSpecies)
  }

  async getSpecies(req, res, next) {
    try {
      const species = await speciesService.getSpecies()
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async createSpecies(req, res, next) {
    try {
      const newSpecies = req.body
      const species = await speciesService.createSpecies(newSpecies)
      return res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async updateSpecies(req, res, next) {
    try {
      const speciesData = req.body
      const speciesId = req.params.id
      const changedSpecies = await speciesService.updateSpecies(speciesData, speciesId)
      return res.send(changedSpecies)
    } catch (error) {
      next(error)
    }
  }
}