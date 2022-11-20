import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/globalStyle.css' //for adding some global style

createApp(App).use(store).use(router).mount('#app')
