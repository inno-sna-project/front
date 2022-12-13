module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://snaback.teawide.xyz',
          changeOrigin: true
        },
      }
    }
  }
