const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img
            src={"https://img.daisyui.com/images/profile/demo/gordon@192.webp"}
          />
        </div>
      </div>

      <div
        className={`chat-bubble bg-blue-700 text-sm font-bold text-gray-300`}
      >
        Hi! What is up?
      </div>
      <div className={`chat-footer opacity-20 text-xs font-semibold flex gap-1 items-center`}>
        12:42
      </div>
    </div>
  );
};

export default Message;
