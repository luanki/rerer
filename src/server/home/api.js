import HttpRequest from '@/common/js/ajax.js';

import * as API from './index.js';

export function homeGet(params) {
  return HttpRequest.get(API.HOMT_TEST, params);
}

export function homePost(params) {
  return HttpRequest.post(API.HOMT_TEST, params);
}