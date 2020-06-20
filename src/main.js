import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import permission from './directive/permission.js';

import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
import './styles/index.scss'; // global css

Vue.use(ViewUI);
Vue.use(permission);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
