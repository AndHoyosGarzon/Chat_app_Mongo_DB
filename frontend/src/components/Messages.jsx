import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => (
          <div ref={lastMessageRef} key={msg._id}>
            <Message message={msg} />
          </div>
        ))}

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
