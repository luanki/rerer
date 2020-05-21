// 启一个服务
module.exports = app => {
  app.post('/api/home/test', function(req, res) {
    res.json({ a: 4, ret: 0, fdsf: 33 });
  });
  app.get('/api/home/test', function(req, res) {
    res.json({ a: 4, ret: 0 });
  });
};

// 使用mock拦截，network里面不会有请求
// import Mock from 'mockjs';

// Mock.mock(new RegExp('/home/test'), 'get', function(options) {
//   console.log(options)
//   return { a: 4, ret: 0 };
// });

// Mock.mock(new RegExp('/home/test/dfdsf'), 'get', function(options) {
//   return { a: 555, ret: 0 };
// });
