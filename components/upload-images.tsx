"use client";

import { useRouter } from "next/navigation";
import { UploadDropzone } from "./util/uploadthing";

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
          const list = await fetch("/api/list/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(res.map(image => image.url))
          });
          const { id } = await list.json();
          router.push(id.toString());
        } catch (err) {
          console.error(err);
        }
      }}
      onUploadError={(error: Error) => console.error(error.message)}
    />
  );
};

export default UploadImages;
