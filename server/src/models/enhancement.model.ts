import mongoose from "mongoose";
import { IEnhancement } from "../interfaces/enhancement.interface";

export const EnhancementSchema = new mongoose.Schema<IEnhancement>({
  original: { type: String, required: true },
  enhanced: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

export const EnhancementModel = mongoose.model<IEnhancement>(
  "Enhancement",
  EnhancementSchema
);
