import { Schema } from "mongoose";

export const SpeicesSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  homePlanetId: { type: Schema.Types.ObjectId, ref: 'planet' },
}, { timestamps: true, toJSON: { virtuals: true } })