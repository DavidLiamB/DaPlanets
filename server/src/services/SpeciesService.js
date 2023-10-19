import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class SpeciesService {
  async updateSpecies(speciesData, speciesId) {
    const species = await dbContext.Species.findById(speciesId)
    if (!species) {
      throw new BadRequest(`${speciesId} is a invalid Id`)
    }

    species.name = speciesData.name || species.name
    species.homePlanetId = speciesData.homePlanetId || species.homePlanetId

    await species.save()
    await species.populate({
      path: 'homePlanet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    return species
  }
  async createSpecies(newSpecies) {
    const species = await dbContext.Species.create(newSpecies)
    await species.populate({
      path: 'homePlanet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    return species
  }
  async getSpecies() {
    const species = await dbContext.Species.find().populate({
      path: 'homePlanet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    return species
  }

}

export const speciesService = new SpeciesService()