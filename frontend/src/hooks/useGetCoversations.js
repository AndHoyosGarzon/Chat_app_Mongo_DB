import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetCoversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data.data);
        toast.success(data.message);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { conversations, loading };
};

export default useGetCoversations;
