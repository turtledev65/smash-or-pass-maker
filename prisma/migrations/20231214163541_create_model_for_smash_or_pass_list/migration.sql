-- CreateTable
CREATE TABLE "SmashOrPassList" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],

    CONSTRAINT "SmashOrPassList_pkey" PRIMARY KEY ("id")
);
