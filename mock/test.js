module.exports = function aa(app) {
  app.post('/api/home/test', function(req, res) {
    res.json({ a: 4, ret: 0, fdsf: 33 });
  });
  app.get('/api/home/test', function(req, res) {
    res.json({ a: 4, ret: 0 });
  });
};
