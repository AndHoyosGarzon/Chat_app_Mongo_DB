import useConversation from "../context/zustandStore/useConversation";

const Conversation = ({ conversation, gender, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center ${
          gender === "male" ? "hover:bg-sky-500" : "hover:bg-rose-500"
        } ${isSelected ? "bg-sky-400" : ""} rounded p-2 py-1 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 ">
        <div className="flex items-center justify-between  gap-3">
          <p className="text-xs font-bold">{conversation.username}</p>
          <span className="text-md ">{emoji}</span>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
