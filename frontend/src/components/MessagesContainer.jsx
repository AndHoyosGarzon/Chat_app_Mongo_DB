import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessagesContainer = () => {
  const noChatSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col border-3 border-s-gray-800/20 border-t-0 border-b-0 border-r-0">
      <>
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-slate-500/20 px-4 py-4 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">John Doe</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </>
    </div>
  );
};

export default MessagesContainer;
