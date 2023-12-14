"use client";

import { useRouter } from "next/navigation";
import { UploadDropzone } from "./util/uploadthing";
import axios from "axios";

const UploadImages = () => {
  const router = useRouter();

  return (
    <UploadDropzone
      endpoint="imageUploader"
      content={{
        label({ ready }) {
          if (!ready) return "Loading...";
          return "Upload Images";
        },
        allowedContent({ ready, fileTypes }) {
          if (!ready) return "Loading...";
          return "max: 15";
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
