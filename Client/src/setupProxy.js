const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://floating-earth-66732.herokuapp.com',
      changeOrigin: true,
    })
  );
};