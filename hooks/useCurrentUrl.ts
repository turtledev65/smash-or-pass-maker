import { useEffect, useState } from "react";

const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState<string | null>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return currentUrl;
};

export default useCurrentUrl;
