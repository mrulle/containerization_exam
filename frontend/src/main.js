import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const config = {
  development: {
    api: 'http://backend:3000',
  },
};

createApp(App)
  .provide('api', config[import.meta.env.MODE || 'development'].api)
  .use(router)
  .mount('#app');
