import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  router from './router/index.js';
import 'animate.css/animate.min.css' //引入

const app = createApp(App)
app.use(router)
app.mount('#app')
