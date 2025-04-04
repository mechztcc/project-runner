import { createApp } from 'vue';
import router from './router'; // Importando o router
import App from './App.vue';
import FontAwesome from './plugins/fontawesome'
import { createPinia } from 'pinia'


import './main.css';

const app = createApp(App);
app.use(router); 
app.use(createPinia())
FontAwesome(app) 


app.mount('#app');

