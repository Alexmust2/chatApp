<template>
  <div>
    <h1>Home</h1>
    <router-link v-for="chat in chats" :key="chat.id" :to="`/chat/${chat.id}`">{{ chat.name }}</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useChatStore } from '../stores/chatStore';

export default {
  name: 'Home',
  computed: {
    ...mapState(useChatStore, ['chats'])
  },
  methods: {
    ...mapActions(useChatStore, ['getChats'])
  },
  created() {
    this.getChats();
  }
};
</script>
