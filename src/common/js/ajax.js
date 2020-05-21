import axios from 'axios';

const TIME_OUT = 10 * 1000 * 6;
const apiBaseUrl = process.env.NODE_ENV === 'production' ? '/api/' : '/api/';

class HttpRequest {
  constructor(baseUrl = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  interceptors(instance) {
    // 拦截请求
    instance.interceptors.request.use(
      config => {
        // 在header里面添加token
        config.headers.taoken = '';
        if (config.method === 'post') {
          config.headers['Conten-Type'] = config.headers['Content-Type']
            ? config.header['Content-Type']
            : 'application/json';
        }
        if (config.method === 'get') {
          config.params = {
            ...config.params,
            _t: new Date().getTime()
          };
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // 拦截响应
    instance.interceptors.response.use(
      respone => {
        console.log(respone)
        if (respone.status === 200) {
          const retCode = respone.data && Number(respone.data.ret);
          if (retCode !== 0) {
            // 提示错误
            console.log(respone.data.msg);
            return Promise.reject(respone);
          }
          // TODO 登录失效的code,跳转到登录页
          return Promise.resolve(respone);
        } else {
          return Promise.reject(respone);
        }
      },
      error => {
        let errorMessage = error.message || error.msg || '';
        if (/timeout/g.test(error.message)) {
          errorMessage = '请求超时, 请稍后再试';
        }
        // 手动停止请求 absort
        if (error.__CANCEL__ !== true) {
          console.log(errorMessage);
        }
        return Promise.reject(error);
      }
    );
  }

  // 获取实例
  getInstance() {
    let instance = axios.create({ baseURL: this.baseUrl, timeout: TIME_OUT });
    this.interceptors(instance);
    return instance;
  }

  // post 请求
  post(url, data = {}, opt) {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .post(url, data, opt)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // get 请求
  get(url, params, opt) {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .get(url, {
          params,
          ...opt
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
  }

  // 用于absort 请求
  getSource() {
    return axios.CancelToken.source();
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
