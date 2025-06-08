import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import StatsModel from "@/models/stats.model";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("User Download Data:", body);

    await connectMongoDB();

    const downloadEvent = new StatsModel(body);
    await downloadEvent.save();

    return NextResponse.json({ message: 'User data logged successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error logging user download:', error);
    return NextResponse.json(
      { message: 'Failed to log user data', error: (error as Error).message },
      { status: 500 },
    );
  }
}