<template>
  <div>
    <h1>Home</h1>
    <router-link v-for="chat in chats" :key="chat.id" :to="`/chat/${chat.id}`">{{ chat.name }}</router-link>
  </div>
</template>

<script>
import { useChatStore } from '../stores/chatStore';

export default {
  setup() {
    const chatStore = useChatStore();
    return {
      chats: chatStore.chats,
    };
  },
};
</script>