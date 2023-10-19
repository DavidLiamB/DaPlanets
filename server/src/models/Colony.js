import { Schema } from "mongoose";

export const ColonySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  population: { type: Number, required: true, min: 100000, max: 1000000000000000 },
  planetId: { type: Schema.Types.ObjectId, required: true, ref: 'planet' },
  speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'species' }
}, { timestamps: true, toJSON: { virtuals: true } })