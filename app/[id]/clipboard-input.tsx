"use client";
import { MdCopyAll as CopyIcon } from "react-icons/md";
import { motion } from "framer-motion";
import useCurrentUrl from "@/hooks/useCurrentUrl";

const ClipboardInput = () => {
  const url = useCurrentUrl();

  return (
    <div className="flex rounded-md border-2 border-white p-2 text-xl">
      <input
        type="text"
        value={url || "Could not get URL"}
        disabled
        className="bg-transparent p-0"
      />
      <motion.button
        whileTap={{ scale: 1.2 }}
        onClick={() => url && navigator.clipboard.writeText(url)}
      >
        <CopyIcon className="h-[35px] w-[35px]" />
      </motion.button>
    </div>
  );
};

export default ClipboardInput;
