import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const SmashOrPassPage = async ({ params }: { params: { id: string } }) => {
  const list = await prisma.smashOrPassList.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!list) notFound();

  return (
    <div>
      {list.images.map(image => (
        <img src={image} />
      ))}
    </div>
  );
};

export default SmashOrPassPage;
