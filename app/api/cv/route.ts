// route.ts
import {NextResponse} from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import {CvItemModel} from '@/models/cv.model';
import {CvHeader, CvItemType, CvSection} from '@/types';
import mongoose from "mongoose";

interface RequestBody {
    headers: CvHeader[];
    sections: CvSection[];
}

type CvItemFromClient =
    | (CvHeader & { type: CvItemType.HEADER })
    | (CvSection & { type: CvItemType.SECTION })
    | (CvSection & { type: CvItemType.DOUBLE_SECTION });


export async function GET() {
    try {
        await connectMongoDB();
        const items = await CvItemModel.find();
        return NextResponse.json(items);
    } catch (error) {
        console.error('Error retrieving CV items:', error);
        return NextResponse.json(
            { message: 'Failed to retrieve CV items', error: (error as Error).message },
            { status: 500 },
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoDB();

        const { headers, sections } = (await request.json()) as RequestBody;

        const itemsFromClient: CvItemFromClient[] = [
            ...headers.map((header) => ({
                ...header,
                type: CvItemType.HEADER as const,
            })),
            ...sections.map((section) => ({
                ...section,
                type: section.type || CvItemType.SECTION as const,
            })),
        ];

        for (const item of itemsFromClient) {
            const filter = item._id && mongoose.isValidObjectId(item._id)
                ? { _id: item._id }
                : { title: item.title, type: item.type };

            // const content = item.type === CvItemType.SECTION ? (item.content ?? '') : '';

            await CvItemModel.findOneAndUpdate(filter, {
                $set: {
                    title: item.title,
                    content: item.type !== CvItemType.HEADER ? item.content ?? '' : '',
                    secondaryContent: item.type === CvItemType.DOUBLE_SECTION ? item.secondaryContent ?? '' : undefined,
                    order: item.order ?? 0,
                    type: item.type, // Explicitly set type as well
                },
            }, { upsert: true, new: true });

        }

        return NextResponse.json({ message: 'CV items processed successfully!' });
    } catch (error) {
        console.error('Error processing CV items:', error);
        return NextResponse.json(
            { message: 'Failed to process CV items', error: (error as Error).message },
            { status: 500 },
        );
    }
}

