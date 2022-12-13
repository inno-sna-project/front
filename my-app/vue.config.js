module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://snaback.teawide.xyz/api',
          changeOrigin: true
        },
      }
    }
  }
