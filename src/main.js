import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false;

// require('../mock/test.js');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
