import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const {searchParams} = new URL(req.url);
  const fileName = searchParams.get("fileName");
  if (!fileName) {
    return NextResponse.json({ error: "Missing 'fileName' parameter" }, { status: 400 });
  }

  if (!req.body) {
    return NextResponse.json({ error: "Missing file body" }, { status: 400 });
  }
  const blob = await put(fileName, req.body, {
    access: "public",
    addRandomSuffix: true,
  });

  return NextResponse.json(blob);
}
