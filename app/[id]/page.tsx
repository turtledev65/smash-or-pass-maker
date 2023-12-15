import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ImageCarousel from "./image-carousel";
import ShareWithFriends from "./share";

const SmashOrPassPage = async ({ params }: { params: { id: string } }) => {
  const list = await prisma.smashOrPassList.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!list) notFound();

  return (
    <div className="h-full w-full">
      <ShareWithFriends />
      <ImageCarousel images={list.images} />
    </div>
  );
};

export default SmashOrPassPage;
