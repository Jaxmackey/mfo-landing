module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.splitChunks(false)
  },
  configureWebpack: {
    entry: './src/entry.js'
  }
}
