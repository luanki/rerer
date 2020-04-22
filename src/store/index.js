import Vue from 'vue';
import Vuex from 'vuex';

import increase from './increase/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    increase
  }
});
