const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@common', resolve('src/common'));
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        secure: false,
        changeOrigin: true,
        target: 'https://192.168.1.148'
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    before: require('./mock/test.js')
  }
};
