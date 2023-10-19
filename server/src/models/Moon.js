import { Schema } from "mongoose";

export const MoonSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  planetId: { type: Schema.Types.ObjectId, required: true, ref: 'planet' },
}, { timestamps: true, toJSON: { virtuals: true } })

MoonSchema.virtual('planet', {
  localField: 'planetId',
  ref: 'planet',
  foreignField: '_id',
  justOne: true
})