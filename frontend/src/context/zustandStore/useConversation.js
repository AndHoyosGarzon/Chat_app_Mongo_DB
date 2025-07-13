import { create } from "zustand";

const useConversationStore = create((set) => ({
  selectedConversation: null,
  //setter
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  //messages
  messages: [],
  //setterMessages
  setMessages: (messages) => set({ messages }),
}));

export default useConversationStore;
