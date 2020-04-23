import { INCRAESE } from './mutations.js';

const actions = {
  async increase({ commit }, payload) {
    console.log('payload from action', payload);
    // request
    setTimeout(() => {
      commit(INCRAESE, 2);
    }, 1000);
  }
};

export default actions;
