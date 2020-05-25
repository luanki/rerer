import HttpRequest from '@/common/ajax.js';

import * as API from './index.js';

export function homeGet(params) {
  return HttpRequest.get(API.HOMT_TEST, params);
}

export function homePost(params) {
  return HttpRequest.post(API.HOMT_TEST, params);
}

export function deviceList(params) {
  return HttpRequest.get(API.DEVICE_LIST, params);
}
