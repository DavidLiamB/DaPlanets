import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from "../models/Galaxy.js";
import { SolarSystemSchema } from "../models/SolarSystem.js";
import { PlanetSchema } from "../models/Planet.js";
import { MoonSchema } from "../models/Moon.js";
import { ColonySchema } from "../models/Colony.js";
import { SpeicesSchema } from "../models/Species.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('galaxy', GalaxySchema);
  SolarSystems = mongoose.model('solarSystem', SolarSystemSchema);
  Planets = mongoose.model('planet', PlanetSchema);
  Moons = mongoose.model('moons', MoonSchema);
  Colonies = mongoose.model('colony', ColonySchema);
  Species = mongoose.model('species', SpeicesSchema)
}

export const dbContext = new DbContext()
