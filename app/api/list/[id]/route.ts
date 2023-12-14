import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const list = await prisma.smashOrPassList.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!list)
    return NextResponse.json({ error: "Could not find list" }, { status: 404 });

  return NextResponse.json(list);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const list = await prisma.smashOrPassList.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!list)
    return NextResponse.json({ error: "Could not find list" }, { status: 404 });

  const deletedList = await prisma.smashOrPassList.delete({
    where: { id: parseInt(params.id) }
  });
  return NextResponse.json(deletedList);
}
