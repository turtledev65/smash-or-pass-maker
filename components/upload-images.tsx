"use client";
import { BiImage, BiImages } from "react-icons/bi";

import { useRouter } from "next/navigation";
import { UploadDropzone } from "./util/uploadthing";
import axios from "axios";

const UploadImages = () => {
  const router = useRouter();

  return (
    <UploadDropzone
      className="ut-upload-icon:scale-120 border-none ut-button:mt-8 ut-button:bg-red-500 ut-allowed-content:text-xl ut-allowed-content:text-gray-300 ut-label:text-2xl ut-label:text-gray-100"
      endpoint="imageUploader"
      content={{
        label({ ready }) {
          if (!ready) return "Loading...";
          return "Upload Images";
        },
        allowedContent({ ready, fileTypes }) {
          if (!ready) return "Loading...";
          return "max: 15";
        },
        uploadIcon() {
          return (
            <BiImages className="mx-auto block h-32 w-32 align-middle text-white" />
          );
        }
      }}
      onClientUploadComplete={async res => {
        try {
          const list = await axios.post(
            "/api/list",
            res.map(image => image.url)
          );
          router.push(list.data.id.toString());
        } catch (err) {
          console.error(err);
        }
      }}
      onUploadError={(error: Error) => console.error(error.message)}
    />
  );
};

export default UploadImages;
