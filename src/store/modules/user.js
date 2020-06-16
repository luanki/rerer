import { login, userInfo, logout } from '@/server/user/api.js';
import cookie from '@/common/cookie.js';
const state = {
  token: cookie.getCookie('token'),
  userName: '',
  tel: '',
  roles: []
};

export const SET_TOKEN = 'SET_TOKEN';
export const SET_NAME = 'SET_NAME';
export const SET_TEL = 'SET_TEL';
export const SET_ROLES = 'SET_ROLES';

const mutations = {
  [SET_TOKEN](state, payload) {
    state.token = payload;
  },
  [SET_NAME](state, payload) {
    state.userName = payload;
  },
  [SET_TEL](state, payload) {
    state.tel = payload;
  },
  [SET_ROLES](state, payload) {
    state.roles = payload;
  }
};

const actions = {
  async login({ commit }, payload) {
    let res = await login(payload);
    commit(SET_TOKEN, res.data.token);
    cookie.setCookie('token', res.data.token);
    return res;
  },
  async logout({ commit }) {
    let res = await logout();
    commit(SET_TOKEN, '');
    cookie.setCookie('token', '');
    return res;
  },
  async getUserInfo({ commit }) {
    let res = await userInfo();
    let roles = [];
    if (res.data.name !== 'jack') {
      roles = ['admin'];
    } else {
      roles = ['visitor'];
    }
    commit(SET_NAME, res.data.name || '');
    commit(SET_TEL, res.data.tel || '');
    commit(SET_ROLES, roles);
    res.roles = roles;
    return res;
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      cookie.removeCookie('token');
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
