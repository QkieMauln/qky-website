module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions.prepend(".ts");
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/src/"
      }
    }
  },
  pages: {
    index: {
      entry: "src/main.ts"
    }
  }
};
