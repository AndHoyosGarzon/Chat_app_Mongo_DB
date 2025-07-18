import { useState } from "react";
import useConversation from "../context/zustandStore/useConversation.js";
import useGetConversations from "../hooks/useGetCoversations.js";
import { toast } from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  //zustand context
  const { setSelectedConversation } = useConversation();

  //Hook
  const { conversations } = useGetConversations();

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters");
    }

    const conversationFind = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (conversationFind) {
      setSelectedConversation(conversationFind);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        id="search"
        placeholder="Search"
        className="input input-bordered w-full bg-gray-500/10 rounded-full border-gray-500 text-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-md btn-circle bg-rose-500/80  border-0.5 border-gray-500 shadow hover:bg-rose-700/90 transition-all duration-300">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="size-4 text-gray-300 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
