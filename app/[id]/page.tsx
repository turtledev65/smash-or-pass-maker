import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ImageCarousel from "./image-carousel";
import ShareWithFriends from "./share";
import { TiArrowBack as BackIcon } from "react-icons/ti";
import Link from "next/link";

const SmashOrPassPage = async ({ params }: { params: { id: string } }) => {
  const list = await prisma.smashOrPassList.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!list) notFound();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="space-y-3 text-white">
        <ShareWithFriends />
        <Link href="/" className="flex gap-1 text-xl">
          <BackIcon className="h-7 w-7" />
          Go back
        </Link>
      </div>
      <ImageCarousel images={list.images} />
    </div>
  );
};

export default SmashOrPassPage;
