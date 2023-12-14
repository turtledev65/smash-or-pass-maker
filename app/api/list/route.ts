import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const images = await request.json();
  const newList = await prisma.smashOrPassList.create({ data: { images } });

  return NextResponse.json(newList, { status: 201 });
}
