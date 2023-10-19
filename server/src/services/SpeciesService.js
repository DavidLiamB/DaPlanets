import { dbContext } from "../db/DbContext.js"

class SpeciesService {
  async createSpecies(newSpecies) {
    const species = await dbContext.Species.create(newSpecies)
    return species
  }
  async getSpecies() {
    const species = await dbContext.Species.find()
    return species
  }

}

export const speciesService = new SpeciesService()