const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/distt/' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set("@vue", resolve("node_modules/vue/dist/vue.min.js"))
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"))
  }
};
