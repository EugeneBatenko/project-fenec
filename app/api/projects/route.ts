import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import ProjectsModel from "@/models/projects.model";
import connectMongoDB from "@/lib/mongodb";
import { slugify } from "markdown-to-jsx";
import {TagTypes} from "@/types";

export async function GET() {
  try {
    await connectMongoDB();
    const projects = await ProjectsModel.find({}).sort({ start_date: -1 }).lean();
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
        { message: "Failed to fetch projects", error: (error as Error).message },
        { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const formData = await request.formData();

    // Validate mandatory project data first
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const start_date = formData.get("start_date") as string;
    const end_date = formData.get("end_date") as string;
    const tagsRaw = formData.get("tags");
    if (!name || !description || !start_date || !end_date || !tagsRaw) {
      return NextResponse.json(
          { error: "All required fields must be provided." },
          { status: 400 }
      );
    }
    let tags: TagTypes[] = [];
    try {
      tags = JSON.parse(tagsRaw as string);
    } catch {
      return NextResponse.json(
          { error: "Invalid tags format." },
          { status: 400 }
      );
    }

    const slug = slugify(name);

    // Only upload the image after validation
    let imageUrl = null;
    const image = formData.get("image") as File | null;
    if (image) {
      try {
        const uploadedBlob = await put(`projects/${slug}-${image.name}`, image, {
          access: "public",
          addRandomSuffix: true,
        });
        imageUrl = uploadedBlob.url;
      } catch (error) {
        return NextResponse.json(
            { error: "Image upload failed.", details: (error as Error).message },
            { status: 500 }
        );
      }
    }

    try {
      const newProject = await ProjectsModel.create({
        name,
        description,
        image: imageUrl,
        start_date: new Date(start_date + "-01"),
        end_date: new Date(end_date + "-01"),
        slug,
        tags,
      });
      return NextResponse.json({ project: newProject }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
          { error: "Failed to create project", details: error },
          { status: 400 }
      );
    }

  } catch (error) {
    return NextResponse.json(
        { message: "Failed to create project", error: (error as Error).message },
        { status: 500 }
    );
  }
}
