import {NextResponse} from "next/server";
import projectsData from "@/app/api/projects/data.json";


export async function GET(
    request: Request,
    {params}: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug
    const data = projectsData.projects.find((project) => project.slug === slug);
    if (!data) {
        return NextResponse.json({error: "Project not found"}, {status: 404});
    }
    return NextResponse.json(data);
}