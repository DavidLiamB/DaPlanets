import { dbContext } from "../db/DbContext.js";

class MoonsService {
  async getMoons() {
    const moons = await dbContext.Moons.find().populate({
      path: 'planet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    return moons
  }
  async createMoon(newMoon) {
    const moon = await dbContext.Moons.create(newMoon)
    await moon.populate({
      path: 'planet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    return moon
  }

}

export const moonsService = new MoonsService()