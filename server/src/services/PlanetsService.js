import { dbContext } from "../db/DbContext.js";

class PlanetsService {
  async getPlanets() {
    const planets = await dbContext.Planets.find().populate({
      path: 'solarSystem',
      populate: {
        path: 'galaxy'
      }
    })
    return planets
  }
  async createPlanet(newPlanet) {
    const planet = await dbContext.Planets.create(newPlanet)
    await planet.populate({
      path: 'solarSystem',
      populate: {
        path: 'galaxy'
      }
    })
    return planet
  }

}

export const planetsService = new PlanetsService()