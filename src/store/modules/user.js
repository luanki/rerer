import { login, userInfo } from '@/server/user/api.js';
import cookie from '@/common/cookie.js';
const state = {
  token: '',
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
    debugger
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
  async login({ commit, dispatch }, payload) {
    let res = await login(payload);
    commit(SET_TOKEN, res.data.token);
    cookie.setCookie('token', res.data.token);
    // dispatch('getUserInfo');
    return res;
  },
  async getUserInfo({ commit }) {
    debugger
    let res = await userInfo();
    console.log(342423432,res)
    let roles = [];
    if (res.name === 'jack') {
      roles = ['admin'];
    } else {
      roles = ['visitor'];
    }
    commit(SET_NAME, res.data.name || '');
    commit(SET_TEL, res.data.tel || '');
    commit(SET_ROLES, roles);
    cookie.setCookie('name', res.data.name);
    cookie.setCookie('tel', res.data.tel);
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
