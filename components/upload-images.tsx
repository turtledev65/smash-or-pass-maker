"use client";

import { UploadDropzone } from "./util/uploadthing";

const UploadImages = () => {
  return (
    <UploadDropzone
      endpoint="imageUploader"
      content={{
        label({ ready }) {
          if (!ready) return "Loading...";
          return "Upload Images";
        },
        allowedContent({ ready }) {
          if (!ready) return "Loading...";
          return "max: 15";
        }
      }}
      onClientUploadComplete={res => console.log("Uploaded: ", res)}
      onUploadError={(error: Error) => console.error(error.message)}
    />
  );
};

export default UploadImages;
