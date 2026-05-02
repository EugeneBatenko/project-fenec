import { NextResponse } from "next/server";
import ProjectsModel from "@/models/projects.model";
import connectMongoDB from "@/lib/mongodb";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connectMongoDB();
        const slug = (await params).slug;
        const project = await ProjectsModel.findOne({ slug }).lean();
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to fetch project", error: (error as Error).message },
            { status: 500 }
        );
    }
}