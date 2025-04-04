import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

const routes = [
  { path: '/', component: AboutView },
  { path: '/projects', component: HomeView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
