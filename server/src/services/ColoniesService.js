import { dbContext } from "../db/DbContext.js";

class ColoniesService {
  async getColonies() {
    const colonies = await dbContext.Colonies.find().populate({
      path: 'planet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    }).populate({
      path: 'species',
      populate: {
        path: 'homePlanet',
        populate: {
          path: 'solarSystem',
          populate: {
            path: 'galaxy'
          }
        }
      }
    })
    return colonies
  }
  async createColony(newColony) {
    const colony = await dbContext.Colonies.create(newColony)
    await colony.populate({
      path: 'planet',
      populate: {
        path: 'solarSystem',
        populate: {
          path: 'galaxy'
        }
      }
    })
    await colony.populate('species')
    return colony
  }

}

export const coloniesService = new ColoniesService()