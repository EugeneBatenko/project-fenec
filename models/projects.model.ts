import mongoose from 'mongoose';
import { TagTypeEnum, TagTypes } from "@/types";

type ProjectDoc = {
  name: string;
  description: string;
  image: string;
  start_date: Date;
  end_date: Date;
  slug: string;
  tags: TagTypes[];
};

const projectSchema = new mongoose.Schema<ProjectDoc>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  slug: { type: String, required: true, unique: true },
  tags: [
    {
      name: { type: String },
      type: { type: String, enum: TagTypeEnum}
    }
  ]
}, { timestamps: true });

export default mongoose.models.projects || mongoose.model<ProjectDoc>('projects', projectSchema);
