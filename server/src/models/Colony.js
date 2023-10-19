import { Schema } from "mongoose";

export const ColonySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  population: { type: Number, required: true, min: 100000, max: 1000000000000000 },
  planetId: { type: Schema.Types.ObjectId, required: true, ref: 'planet' },
  speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'species' }
}, { timestamps: true, toJSON: { virtuals: true } })

ColonySchema.virtual('planet', {
  localField: 'planetId',
  ref: 'planet',
  foreignField: '_id',
  justOne: true
})
ColonySchema.virtual('species', {
  localField: 'speciesId',
  ref: 'species',
  foreignField: '_id',
  justOne: true
})

ColonySchema.index({ planetId: 1, speciesId: 1 }, { unique: true })