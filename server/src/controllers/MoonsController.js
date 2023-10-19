import { moonsService } from "../services/MoonsService.js"
import BaseController from "../utils/BaseController.js"

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router.get('', this.getMoons).post('', this.createMoon)
  }

  async getMoons(req, res, next) {
    try {
      const moons = await moonsService.getMoons()
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async createMoon(req, res, next) {
    try {
      const newMoon = req.body
      const moon = await moonsService.createMoon(newMoon)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }
}