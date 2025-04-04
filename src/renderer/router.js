import { createRouter, createWebHashHistory } from "vue-router";
import FolderPage from "./pages/FolderPage.vue";
import HomePage from "./pages/HomePage.vue";

const routes = [
  { path: "/", component: FolderPage },
  { path: "/projects", component: HomePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
