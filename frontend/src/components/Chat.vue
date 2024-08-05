<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
    <input v-model="newMessage" @keyup.enter="sendMessage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      ws: null,
    };
  },
  created() {
    this.ws = new WebSocket('ws://localhost:3000');

    this.ws.onmessage = (event) => {
      this.messages.push(event.data);
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.ws.send(this.newMessage);
        this.newMessage = '';
      }
    }
  }
};
</script>