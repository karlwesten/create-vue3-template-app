import { createApp } from 'vue'
import { createPinia } from 'pinia' // 状态管理 pinia

import App from './App.vue' // 根组件
import router from './router' // 路由

// TDesign
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import './permission'; // 全局路由

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TDesign)

app.mount('#app')
