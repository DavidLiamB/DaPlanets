import { Schema } from "mongoose";

export const SolarSystemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  stars: { type: Number, required: true, min: 1, max: 10 },
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'galaxy' }
}, { timestamps: true, toJSON: { virtuals: true } })

SolarSystemSchema.virtual('galaxy', {
  localField: 'galaxyId',
  ref: 'galaxy',
  foreignField: '_id',
  justOne: true
})