import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { speciesService } from "../services/SpeciesService.js";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router.get('', this.getSpecies).post('', this.createSpecies)
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
}