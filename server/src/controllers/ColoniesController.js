import { coloniesService } from "../services/ColoniesService.js"
import BaseController from "../utils/BaseController.js"

export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router.get('', this.getColonies).post('', this.createColony)
  }

  async getColonies(req, res, next) {
    try {
      const colonies = await coloniesService.getColonies()
      return res.send(colonies)
    } catch (error) {
      next(error)
    }
  }

  async createColony(req, res, next) {
    try {
      const newColony = req.body
      const colony = await coloniesService.createColony(newColony)
      return res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}