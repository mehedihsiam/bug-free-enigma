import mongoose from "mongoose";
import { TProcess } from "../types/process";

export const processSchema = new mongoose.Schema<TProcess>({
  name: {
    type: String,
    required: true,
  },
  logs: {
    type: [Date],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Process = mongoose.model("process", processSchema);
