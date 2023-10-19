import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  numofCelestialBodies: { type: Number, required: true, min: 1, max: 1000000000000000 }
}, { timestamps: true, toJSON: { virtuals: true } })