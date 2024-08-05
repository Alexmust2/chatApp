<template>
    <div>
      <h1>Chat {{ $route.params.id }}</h1>
      <Chat />
    </div>
  </template>
  
  <script>
  import Chat from '../components/Chat.vue';
  
  export default {
    components: {
      Chat,
    },
  };
  </script>