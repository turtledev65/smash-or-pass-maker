"use client";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import { useState, useTransition } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [_, startTransition] = useTransition();
  const [currIndex, setCurrIndex] = useState(images.length - 1);
  const [dragDirection, setDragDirection] = useState(0);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 200) {
      setDragDirection(Math.sign(info.offset.x));
      startTransition(() => setCurrIndex(currIndex - 1));
    }
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {images.slice(0, currIndex).map(image => (
          <motion.img
            key={image}
            src={image}
            className="absolute h-full w-full object-cover"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.2, right: 0.2 }}
            onDragEnd={handleDragEnd}
            exit={{
              translateX: SCREEN_WIDTH * dragDirection,
              transition: { duration: 0.2 }
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
