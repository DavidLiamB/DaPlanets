import { solarSystemsService } from "../services/SolarSystemsService.js";
import BaseController from "../utils/BaseController.js";


export class SolarSystemsController extends BaseController {
  constructor() {
    super('api/solarSystems')
    this.router.get('', this.getSolarSystems).post('', this.createSolarSystem)
  }

  async getSolarSystems(req, res, next) {
    try {
      const solarSystems = await solarSystemsService.getSolarSystems()
      return res.send(solarSystems)
    } catch (error) {
      next(error)
    }
  }

  async createSolarSystem(req, res, next) {
    try {
      const newSolarSystem = req.body
      const solarSystem = await solarSystemsService.createSolarSystem(newSolarSystem)
      return res.send(solarSystem)
    } catch (error) {
      next(error)
    }
  }
}