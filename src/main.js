import { createApp } from 'vue';
import { Router } from './routes';
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.use(Router);
app.mount('#app');
