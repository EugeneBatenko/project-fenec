import connectMongoDB from "@/lib/mongodb";
import mongoose from "mongoose";
import {NextResponse} from "next/server";
import {CvItemModel} from "@/models/cv.model";

export async function DELETE(
    request: Request,
    {params}: { params: Promise<{ id: string }> }) {
    try {
        await connectMongoDB();

        const id = (await params).id

        if (!id || !mongoose.isValidObjectId(id)) {
            return NextResponse.json(
                {message: 'Invalid or missing ID provided'},
                {status: 400},
            );
        }

        const deletedItem = await CvItemModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return NextResponse.json(
                {message: 'Item not found'},
                {status: 404},
            );
        }

        return NextResponse.json({message: 'Item deleted successfully!', item: deletedItem});
    } catch (error) {
        console.error('Error deleting CV item:', error);
        return NextResponse.json(
            {message: 'Failed to delete CV item', error: (error as Error).message},
            {status: 500},
        );
    }
}