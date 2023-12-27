const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.sportmonks.com/v3/football',
      changeOrigin: true,
    })
  );
};