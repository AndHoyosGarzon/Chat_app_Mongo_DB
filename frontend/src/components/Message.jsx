import { useAuthContext } from "../context/AuthContext";
import useConversation from "../context/zustandStore/useConversation";
import { extractTime } from "../libs/extracTime";

const Message = ({ message }) => {
  //context react
  const { authUser } = useAuthContext();
  //zustand context
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?._id;
  //chat class name
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  //select image only depende if value is true
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  //bg color bubble
  const bubbleBgColor = fromMe ? "bg-gray-700/60" : "bg-blue-700";
  // formatter time
  const formatedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img src={profilePic} />
        </div>
      </div>

      <div
        className={`chat-bubble ${bubbleBgColor} text-sm font-bold text-gray-300 pb-2`}
      >
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-20 text-xs font-semibold flex gap-1 items-center`}
      >
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
