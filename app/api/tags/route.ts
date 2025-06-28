import connectMongoDB from "@/lib/mongodb";
import TagsModel from "@/models/tags.model";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectMongoDB();
    await TagsModel.create(body);

    return new Response(JSON.stringify({ message: 'Tags data logged successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error logging tags data:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to log tags data', error: (error as Error).message }),
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const { type, name } = Object.fromEntries(searchParams.entries());

    await connectMongoDB();

    const filter: { type?: string; name?: { $regex: string; $options: string } } = {};
    if (type) filter.type = type;
    if (name) filter.name = { $regex: name, $options: "i" };

    const tags = await TagsModel.find(filter).sort({ createdAt: -1 });

    return new Response(JSON.stringify(tags), { status: 200 });
  } catch (error) {
    console.error("Error fetching tags:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch tags", error: (error as Error).message }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), { status: 400 });
    }

    await connectMongoDB();
    await TagsModel.findByIdAndDelete(id);

    return new Response(JSON.stringify({ message: "Tag deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting tag:", error);
    return new Response(
      JSON.stringify({ message: "Failed to delete tag", error: (error as Error).message }),
      { status: 500 }
    );
  }
}
