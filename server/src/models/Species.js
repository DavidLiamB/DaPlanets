import { Schema } from "mongoose";

export const SpeciesSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  homePlanetId: { type: Schema.Types.ObjectId, ref: 'planet' },
}, { timestamps: true, toJSON: { virtuals: true } })

SpeciesSchema.virtual('homePlanet', {
  localField: 'homePlanetId',
  ref: 'planet',
  foreignField: '_id',
  justOne: true
})