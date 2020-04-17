import HttpRequest from '@/common/js/ajax.js';

import * as API from './api';

export function homeGet(params) {
  return HttpRequest.get(API.homeTest, params);
}

export function homePost(params) {
  return HttpRequest.post(API.homeTest, params);
}
