import ClipboardInput from "./clipboard-input";

const ShareWithFriends = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 space-y-3 text-white">
      <h2 className="text-3xl">Share with your friends</h2>
      <ClipboardInput />
    </div>
  );
};

export default ShareWithFriends;
