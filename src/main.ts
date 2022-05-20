import { createApp } from 'vue'
import store from "@/stores";

import App from './App.vue' // 根组件
import router from './router' // 路由

// TDesign
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import './permission'; // 全局路由

const app = createApp(App)

app.use(store)
app.use(router)
app.use(TDesign)

app.mount('#app')
