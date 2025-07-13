import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => <Message key={msg._id} message={msg} />)}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-xs font-bold">
          Send message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
