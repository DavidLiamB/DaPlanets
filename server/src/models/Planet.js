import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  biome: { type: String, required: true, maxLength: 100 },
  atmosphere: { type: Boolean, required: true, default: true },
  liveable: { type: Boolean, required: true, default: false },
  solarSystemId: { type: Schema.Types.ObjectId, required: true, ref: 'solarSystem' }
}, { timestamps: true, toJSON: { virtuals: true } })