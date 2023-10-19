import { dbContext } from "../db/DbContext.js";

class ColoniesService {
  async getColonies() {
    const colonies = await dbContext.Colonies.find()
    return colonies
  }
  async createColony(newColony) {
    const colony = await dbContext.Colonies.create(newColony)
    return colony
  }

}

export const coloniesService = new ColoniesService()