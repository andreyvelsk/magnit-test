const { defineConfig } = require("@vue/cli-service");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    plugins: [
      new ESLintPlugin({
        extensions: ["js", "vue"],
        fix: true,
      }),
    ],
  },
};
