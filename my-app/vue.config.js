module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://snaback.teawide.xyz/api/dropped_students',
          changeOrigin: true
        },
      }
    }
  }
