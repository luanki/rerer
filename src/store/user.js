import { login, userInfo } from '@/server/user/api.js';
import cookie from '@/common/cookie.js';
const state = {
  token: '',
  userName: '',
  tel: ''
};

export const SET_TOKEN = 'SET_TOKEN';
export const SET_NAME = 'SET_NAME';
export const SET_TEL = 'SET_TEL';

const mutations = {
  [SET_TOKEN](state, payload) {
    state.token = payload;
  },
  [SET_NAME](state, payload) {
    state.userName = payload;
  },
  [SET_TEL](state, payload) {
    state.tel = payload;
  }
};

const actions = {
  async login({ commit, dispatch }, payload) {
    let res = await login(payload);
    commit(SET_TOKEN, res.data.token);
    cookie.setCookie('token', res.data.token);
    dispatch('getUserInfo');
  },
  async getUserInfo({ commit }) {
    let res = await userInfo();
    commit(SET_NAME, res.data.name || '');
    commit(SET_TEL, res.data.tel || '');
    cookie.setCookie('name', res.data.name);
    cookie.setCookie('tel', res.data.tel);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
