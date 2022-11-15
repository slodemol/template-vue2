const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    port: 8080, // 修改默认端口
    proxy: {
      // 代理转发
      "/api": {
        target: "https://616c0z6649.zicp.fun",
        // target: "http://192.168.28.230",
        changeOrigin: true, // 本地是否开启代理
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
