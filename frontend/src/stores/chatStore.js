import axios from 'axios';
import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [],
  }),
  actions: {
    addChat(chat) {
      this.chats.push(chat);
    },
    getChats() {
      axios.get('http://localhost:3000/api/chat').then((response) => {
        this.chats = response.data;
      })
    }
  },
});