const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", { target: "http://127.0.0.1:5000" })
  );
  app.use(
    createProxyMiddleware("/auth/user", { target: "http://127.0.0.1:5000" })
  );
};
