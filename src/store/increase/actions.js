import { INCRAESE } from './mutations.js';

const actions = {
  async increase({ commit }) {
    // request
    setTimeout(() => {
      commit(INCRAESE);
    }, 1000);
  }
};

export default actions;
