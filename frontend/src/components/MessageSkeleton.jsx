const MessageSkeleton = () => {
  return (
    <div className="flex w-full flex-col my-2 gap-2 bg-gray-800/20 p-4 rounded-lg">
      <div className="skeleton bg-gray-700 h-2 w-full"></div>
      <div className="skeleton bg-gray-700 h-2 w-full"></div>
    </div>
  );
};

export default MessageSkeleton;
