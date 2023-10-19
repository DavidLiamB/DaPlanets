import { dbContext } from "../db/DbContext.js";

class PlanetsService {
  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }
  async createPlanet(newPlanet) {
    const planet = await dbContext.Planets.create(newPlanet)
    return planet
  }

}

export const planetsService = new PlanetsService()