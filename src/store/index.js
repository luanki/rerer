import Vue from 'vue';
import Vuex from 'vuex';

import increase from './modules/increase/index.js';
import user from './modules/user.js';
import permission from './modules/permission.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    increase,
    user,
    permission
  }
});
