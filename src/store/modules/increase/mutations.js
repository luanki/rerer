export const INCRAESE = 'INCRAESE';

const mutations = {
  [INCRAESE](state, payload) {
    console.log('payload from mutations', payload);
    state.count += payload;
  }
};

export default mutations;
