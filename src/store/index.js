import Vue from 'vue';
import Vuex from 'vuex';

const INCREMENT = 'INCREMENT';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { count: 0 },
  getters: {
    useCount: state => {
      return state.count + 1;
    }
  },
  mutations: {
    [INCREMENT](state, payload) {
      console.log(payload);
      state.count += payload;
    }
  },
  actions: {},
  modules: {}
});
