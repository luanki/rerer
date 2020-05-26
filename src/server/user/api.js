import HttpRequest from '@/common/ajax.js';
import * as API from './index.js';

export function login(params) {
  return HttpRequest.post(API.LOGIN, { ...params, type: 0 });
}

export function logout() {
  return HttpRequest.post(API.LOGOUT);
}

export function userInfo(params) {
  return HttpRequest.get(API.USERINFO, params);
}
