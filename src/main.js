import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './assets/css/style.scss'

createApp(App).use(router).use(style).mount('#app')
