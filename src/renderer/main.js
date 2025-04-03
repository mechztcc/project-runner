import { createApp } from 'vue';
import router from './router'; // Importando o router
import App from './App.vue';

const app = createApp(App);
app.use(router); // Adicionando o Vue Router
app.mount('#app');