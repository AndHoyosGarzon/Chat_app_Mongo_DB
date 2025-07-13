import Conversation from "./Conversation";
import useGetCoversations from "../hooks/useGetCoversations";
import { getRandomEmoji } from "../libs/emojis";

const Conversations = () => {
  const { conversations, loading } = useGetCoversations();
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          gender={conversation.gender}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
  
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
