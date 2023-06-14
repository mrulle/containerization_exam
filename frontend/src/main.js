import './assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const config = {
  development: {
    api: 'http://127.0.0.1:8080',
  },
  production: {
    api: 'http://127.0.0.1:8080',
  },
};

createApp(App)
  .provide('api', config[import.meta.env.MODE || 'development'].api)
  .use(router)
  .mount('#app');

// createApp(App)
//   .provide('api', config['production' || 'development'].api)
//   .use(router)
//   .mount('#app');
