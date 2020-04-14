import axios from 'axios';

const TIME_OUT = 10 * 1000 * 6;
const apiBaseUrl = process.env.NODE_ENV === 'production' ? '/api/' : '/api/';

class Request {
  constructor(baseUrl = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  private interceptors(instance) {
    // 拦截请求
    instance.interceptors.request.use(
      config => {
        // 在header里面添加token
        config.headers.taoken =  '';
        if (config.method === 'post') {
          config.headers['Conten-Type'] = config.headers['Content-Type']
            ? config.header['Content-Type']
            : 'application/json';
        }
        if (config.method === 'get') {
          config.params = {
            ...conifg.params,
            _t: new Date().getTime()
          }
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // 拦截响应
    instance.interceptors.response.use(
      respone => {
        if (respone.status === 200) {
          const retCode = respone.data && Number(respone.data.ret);
          if (retCode !== 0) {
            console.log(respone.data.msg);
            return Promise.reject(respone);
          }
          // TODO 登录失效的code,跳转到登录页
          return Promise.resolve(respone);
        } else {
          return Promise.reject(respone);
        }
      }
    );
  }

  // 获取实例
  private getInstance() {
    let instance = axios.create({ baseURL: this.baseUrl, timeout: TIME_OUT });
    this.interceptors(instance);
    return instance;
  }

  // post 请求
  public post(url, data = {}, opt) {
    return new Promise((resolve, reject) => {
      this.getInstance()
        .post(url, data, opt)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    });
  }
}
