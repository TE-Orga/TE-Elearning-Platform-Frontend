import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css';
import './assets/styles/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';


createApp(App).use(router).mount('#app')
