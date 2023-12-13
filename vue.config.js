const { defineConfig } = require("@vue/cli-service");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置正向代理服务器
  devServer: {
    proxy: "http://111.229.247.11:3000",
    // ws: false,
  },
  configureWebpack: {
    // devtool
    devtool: "source-map", // Source map generation must be turned on
    plugins: [
      sentryWebpackPlugin({
        org: "wdawd",
        project: "javascript-vue",
        // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
        authToken:
          "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",
      }),
    ],
  },
});
