import mongoose, { Document, Model, Schema } from 'mongoose';
import { CvItemType } from '@/types';

export interface ICvItem extends Document {
    title: string;
    content?: string;
    secondaryContent?: string,
    order: number;
    type: CvItemType;
}

const CvItemSchema = new Schema<ICvItem>(
    {
        title: { type: String, required: true },
        content: { type: String },
        secondaryContent: { type: String, default: '' },
        order: { type: Number, required: true },
        type: {
            type: String,
            enum: [CvItemType.HEADER, CvItemType.SECTION, CvItemType.DOUBLE_SECTION],
            required: true,
        },
    },
    { timestamps: true },
);

export const CvItemModel: Model<ICvItem> =
    mongoose.models.CvItem || mongoose.model<ICvItem>('CvItem', CvItemSchema);