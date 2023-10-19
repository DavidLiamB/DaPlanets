import { dbContext } from "../db/DbContext.js";

class SolarSystemsService {
  async getSolarSystems() {
    const solarSystems = await dbContext.SolarSystems.find()
    solarSystems.forEach(async (solarSystem) => { await solarSystem.populate('galaxy') })
    return solarSystems
  }
  async createSolarSystem(newSolarSystem) {
    const solarSystem = await dbContext.SolarSystems.create(newSolarSystem)
    return solarSystem
  }

}

export const solarSystemsService = new SolarSystemsService()