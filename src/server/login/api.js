import HttpRequest from '@/common/ajax.js';
import * as API from './index.js';

export function login(params) {
  return HttpRequest.post(API.LOGIN, { ...params, type: 0 });
}
