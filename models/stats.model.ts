import mongoose from "mongoose";
import { UserAgent } from "@/types";

const UserDownloadStatsSchema = new mongoose.Schema<UserAgent>({
  timestamp: { type: Date, default: Date.now, index: true },
  userAgent: { type: String },
  language: { type: String },
  ip: { type: String, index: true },
  location: { type: String },
  extraData: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true, collection: "userDownloadStats" });

export default mongoose.model("userDownloadStats", UserDownloadStatsSchema);