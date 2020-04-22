export const INCRAESE = 'INCRAESE';

const mutations = {
  [INCRAESE](state, payload) {
    state.count += payload;
  }
};

export default mutations;
