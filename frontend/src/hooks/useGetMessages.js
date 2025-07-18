import { useEffect, useState } from "react";
import useConversation from "../context/zustandStore/useConversation";
import { toast } from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);

  //zustand context
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.message);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
