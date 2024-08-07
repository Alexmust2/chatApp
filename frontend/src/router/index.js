import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChatView from '../views/ChatView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/chat/:id', component: ChatView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;