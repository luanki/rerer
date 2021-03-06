import { asyncRoutes, constantRoutes } from '@/router/router.js';

const state = {
  addRoutes: [],
  routes: []
};

export const SET_ROUTES = 'SET_ROUTES';

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles && route.meta.roles.length) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const mutations = {
  [SET_ROUTES]: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    let accessedRoutes;
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes || [];
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
    }
    commit(SET_ROUTES, accessedRoutes);
    return accessedRoutes;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
