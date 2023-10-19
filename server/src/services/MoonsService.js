import { dbContext } from "../db/DbContext.js";

class MoonsService {
  async getMoons() {
    const moons = await dbContext.Moons.find()
    return moons
  }
  async createMoon(newMoon) {
    const moon = await dbContext.Moons.create(newMoon)
    return moon
  }

}

export const moonsService = new MoonsService()