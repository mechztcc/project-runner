import { createApp } from 'vue';
import router from './router'; // Importando o router
import App from './App.vue';
import FontAwesome from './plugins/fontawesome'


import './main.css';

const app = createApp(App);
app.use(router); // Adicionando o Vue Router
FontAwesome(app) // Registra os ícones

app.mount('#app');

