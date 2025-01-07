import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import VueVirtualScroller from 'vue-virtual-scroller'

import '@arco-design/web-vue/dist/arco.css';
import './assets/main.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App);

app.use(ArcoVue);
app.use(createPinia());
app.use(router);
app.use(VueVirtualScroller)

app.mount('#app');
