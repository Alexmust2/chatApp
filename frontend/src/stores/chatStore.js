import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [],
  }),
  actions: {
    addChat(chat) {
      this.chats.push(chat);
    },
  },
});