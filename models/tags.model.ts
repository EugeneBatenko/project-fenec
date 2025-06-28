import mongoose from 'mongoose';
import { TagsItem } from '@/types';

const tagsSchema = new mongoose.Schema<TagsItem>({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ['common', 'tech'], required: true },
}, { timestamps: true });

export default mongoose.models.tags || mongoose.model<TagsItem>('tags', tagsSchema);
