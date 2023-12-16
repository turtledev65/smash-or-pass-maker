import { useState } from "react";
import {
  PiHandSwipeRight as SwipeRightIcon,
  PiHandSwipeLeft as SwipeLeftIcon
} from "react-icons/pi";

const SwipeGuides = () => {
  const [active, setActive] = useState(true);
  const handleTap = () => {
    setActive(false);
  };

  if (!active) return null;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0 z-10 flex justify-evenly gap-0 text-4xl text-white"
      onTouchStartCapture={handleTap}
      onClick={handleTap}
    >
      <div className="relative h-full w-full select-none bg-gradient-to-l from-transparent to-red-500 to-80% p-5">
        <p>Smash</p>
        <SwipeLeftIcon className="absolute right-1/2 top-1/2 h-28 w-28 translate-x-1/2" />
      </div>
      <div className="relative h-full w-full select-none  bg-gradient-to-r from-transparent to-blue-500 to-80% p-5 text-right">
        <p>Pass</p>
        <SwipeRightIcon className="absolute right-1/2 top-1/2 h-28 w-28 translate-x-1/2" />
      </div>
    </div>
  );
};

export default SwipeGuides;
